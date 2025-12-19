const dayjs = require("dayjs");

function generateDynamicBuildName() {
  const now = dayjs().format("YYYY-MM-DD_HH-mm");

  return `Build_main-agent-test-app-${process.env.ENVIRONMENT} - android:${now}`;
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
        // app: process.env.CUSTOM_APP_ID_ANDROID, // custom_id
        app: 'main-agent-jbj-test' // Custom ID for this specific test
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
