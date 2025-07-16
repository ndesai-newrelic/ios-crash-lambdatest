const moment = require("moment");

function generateDynamicBuildName() {
  const now = moment();
  const minutes = now.minutes();
  const roundedMinutes = Math.floor(minutes / 30) * 30;
  const timestamp = now.clone().minutes(roundedMinutes).seconds(0).milliseconds(0).format("YYYY-MM-DD_HH-mm");

  return `Build_main-agent-test-app - android:${timestamp}`;
}

exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESSKEY || "YOUR_ACCESS_KEY",

  updateJob: false,
  specs: ["./test-android.js"],
  exclude: [],

  maxInstances: 10,
  capabilities: [
    {
      "lt:options": {
        build: generateDynamicBuildName(),
        network: false,
        devicelog: true,
        visual: true,
        w3c: true,
        platformName: "android",
        deviceName: "Pixel 9 Pro",
        appiumVersion: "1.22.3",
        platformVersion: "15",
        app: "ANDROIDAPP", // custom_id
      },
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 443,
  protocol: "https",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 100000,
  },
};
