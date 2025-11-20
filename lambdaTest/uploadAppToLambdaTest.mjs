import fs from "fs";
import path from "path";
import url from "url";

import dotenv from "dotenv";
dotenv.config();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, "../builds");

function uploadFileToLambdaTest(name, path, customId) {
  const file = fs.readFileSync(path);

  //Create body for the fetch
  const form = new FormData();
  form.append("name", name);
  form.append("appFile", new File([file], path));
  form.append("visibility", "team");
  form.append("custom_id", customId);

  //Upload the file to LT
  return fetch("https://manual-api.lambdatest.com/app/upload/virtualDevice", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        btoa(`${process.env.LT_USERNAME}:${process.env.LT_ACCESSKEY}`),
    },
    body: form,
  });
}
Promise.all([
  uploadFileToLambdaTest(
    `main-agent-test-app-iOS-${process.env.ENVIRONMENT}`,
    `${targetDir}/mainagenttestapp-ios.zip`,
    process.env.CUSTOM_APP_ID_IOS
  ),
  uploadFileToLambdaTest(
    `main-agent-test-app-Android-${process.env.ENVIRONMENT}`,
    `${targetDir}/app-release.apk`,
    process.env.CUSTOM_APP_ID_ANDROID
  ),
])
  .then(([iosResponse, androidResponse]) =>
    Promise.all([iosResponse.json(), androidResponse.json()])
  )
  .then(([iosResponse, androidResponse]) => {
    if (iosResponse.err || androidResponse.err) {
      throw new Error(
        `Error uploading apps: iOS: ${iosResponse.err}, Android: ${androidResponse.err}`
      );
    } else {
      console.log("Uploaded android and ios assets");
    }
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
    process.exit(1);
  });
