This is a React Native app designed to produce all of the event types in the New
Relic Mobile Agent.

## Entities:

- Android: https://staging-one.newrelic.com/mobile/home/MTIxNDgyNzF8TU9CSUxFfEFQUExJQ0FUSU9OfDY0MzkyODE2
- iOS: https://staging-one.newrelic.com/mobile/home/MTIxNDgyNzF8TU9CSUxFfEFQUExJQ0FUSU9OfDY0MzkyODIz

## Prerequisites

- [Android Studio](https://developer.android.com/studio) is installed
- `ANDROID_HOME` env var is set, [see here](https://developer.android.com/tools/variables#set)
- Latest Java JDK is installed, using [SDKMan](https://sdkman.io/) to manage JDKs is recommended
- Node packages are installed (`npm install`)

## Running iOS build

In a terminal:

```bash
npm install
cd ios
pod install --repo-update
cd ..
npm run ios
```

## Running Android Build

In a terminal:

```bash
cd android
./gradlew clean
./gradlew build
cd ..
npm run android
```

## Steps I used to set it up 👋

1. Install Expo Go to your phone (iOS App Store used)

2. Run these commands:

   1. `npx create-expo-app main-agent-test-app && cd main-agent-test-app && npx expo prebuild`
   2. `npx expo install newrelic-react-native-agent`
   3. `npx expo prebuild --clean`

3. Follow New Relic install for Mobile --> react-native

   - Add a `newrelic.js` to the root of the project and change line 44 to: `collectorAddress: "staging-mobile-collector.newrelic.com",`
     or leave it blank if you want to report data to production
   - Run in the root: `npm i newrelic-react-native-agent`

4. Install any other dependencies like:
   `npm i react-native-paper`
   `npm i @react-native-picker/picker`
5. npx pod-install
6. add to package.json: "@react-native-community/cli": "latest"

## Local testing:

install appium and webdriverio
to start appium server: `appium --allow-cors`

## Automation testing:

Upload a new copy of main-agent-test-app via curl command. The tests depend on specific `custom_id` values in order to run. For iOS the custom_id must be set to: `IOSAPP` and for Android the custom_id must be set to: `ANDROIDAPP`.

Replace `USERNAME:ACCESSKEY` with the values found in your LambdaTest account under [Account Settings -> Password and Security](https://accounts.lambdatest.com/security/username-accesskey).

From the root directory run both curl commands:

```bash
curl -k -v -u "USERNAME:ACCESSKEY" \
  --location \
  --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
  --form 'name=“main-agent-test-app.zip"' \
  --form 'appFile=@"builds/mainagenttestapp.zip"' \
  --form 'custom_id="IOSAPP"'

curl -k -v -u "USERNAME:ACCESSKEY" \
  --location \
  --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
  --form 'name=“main-agent-test-app.apk"' \
  --form 'appFile=@"builds/mainagenttestapp.apk"' \
  --form 'custom_id="ANDROIDAPP"'
```

### Confirm apps were uploaded

**In LambdaTest UI**

Confirm the applications were uploaded by navigating to the [Virtual Mobile App Testing](https://app.lambdatest.com/console/realtime/app) page. If successful, you will see a new entry for `main-agent-test-app.apk` uploaded by your user under the Android tab and a new entry for `main-agent-test-app.zip` uploaded by your user under the iOS tab.

**Example object returned from successful curl command:**

```
{"app_id":"APP123456789","name":"Ios_App","type":"simulator","app_url":"lt://APP123456789","url":"https://prod-falcon-lt-app-artefacts-v1.s3-accelerate.amazonaws.com/prod/1413189/2025/05/23/mainagenttestappzip-1748034846399.zip","custom_id":"IOSAPP","ios_keychain_enabled":"false"}%
```

### Note on uploading

Per LambdaTest's data retention policy, applications are automatically deleted every 60 days. It is ok if there is overlap and two iOS or two Android applications are uploaded at the same time. LambdaTest will automatically use the most recently uploaded application for testing and the old application will age out at 60 days.

## To generate data

To generate data and run tests locally, create a `.env` file and add your `LT_USERNAME` and `LT_ACCESSKEY`. These values can be found in your LambdaTest account under [Account Settings -> Password and Security](https://accounts.lambdatest.com/security/username-accesskey).

From the root of main-agent-test-app run: `npm run test:wdio-ios` or `npm run test:wdio-android` This will launch the webdriver local-runner and you can watch the test run. Check the data you’ve run is showing up in New Relic [here](https://staging-one.newrelic.com/mobile/home/MTIxNDgyNzF8TU9CSUxFfEFQUExJQ0FUSU9OfDY0MzkyODIz) for iOS, [here](https://staging-one.newrelic.com/mobile/home/MTIxNDgyNzF8TU9CSUxFfEFQUExJQ0FUSU9OfDY0MzkyODE2) for Android and [here](https://appautomation.lambdatest.com/build?pageType=build) for LambdaTest.
