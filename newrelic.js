import NewRelic from "newrelic-react-native-agent";
import { Platform } from "react-native";
import dotenv from "dotenv";

dotenv.config();

export let appToken;

if (Platform.OS === "ios") {
  // appToken = "AA17fe6658e601c9f10eefc8f808c0763461b532d2-NRMA";
  appToken = process.env.IOS_APP_TOKEN;
} else {
  // appToken = "AA6ea739552a5cde5e301e44aad55ec695855a9d71-NRMA";
  appToken = process.env.ANDROID_APP_TOKEN;
}

// const prodAndroid = "AAe5ea2f069b2cb3a4dd642c0d9357601e45b71b53-NRMA";
// const prodiOS = "AA0bc03a3ad543bbd9c967593a6eac7faf26b63421-NRMA";

// const pchoiAndroid = "AA56ff5439e21865920f5948207d72b173eec56a62-NRMA";
// const pchoiiOS = "AAa21d956691d382d1b6abe6511d67b4d3fb9e867c-NRMA";

if (process.env.ENVIRONMENT === "prod") {
  appToken = Platform.OS === "ios" ? prodiOS : prodAndroid;
} else {
  appToken = Platform.OS === "ios" ? pchoiiOS : pchoiAndroid;
}

const collectorAddress =
  process.env.ENVIRONMENT === "prod"
    ? "mobile-collector.newrelic.com"
    : process.env.ENVIRONMENT === "eu-prod"
    ? "mobile-collector.eu01.nr-data.net"
    : "staging-mobile-collector.newrelic.com";
const crashCollectorAddress =
  process.env.ENVIRONMENT === "prod"
    ? "mobile-crash.newrelic.com"
    : process.env.ENVIRONMENT === "eu-prod"
    ? "mobile-crash.eu01.nr-data.net"
    : "staging-mobile-crash.newrelic.com";

export const agentConfiguration = {
  //Android Specific
  // Optional:Enable or disable collection of event data.
  analyticsEventEnabled: true,

  // Optional:Enable or disable crash reporting.
  crashReportingEnabled: true,

  // Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
  interactionTracingEnabled: true,

  // Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
  networkRequestEnabled: true,

  // Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
  networkErrorRequestEnabled: true,

  // Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
  httpResponseBodyCaptureEnabled: true,

  // Optional:Enable or disable agent logging.
  loggingEnabled: true,

  // Optional:Specifies the log level. Omit this field for the default log level.
  // Options include: ERROR (least verbose), WARNING, INFO, VERBOSE, AUDIT (most verbose).
  logLevel: NewRelic.LogLevel.INFO,

  // iOS Specific
  // Optional:Enable/Disable automatic instrumentation of WebViews
  webViewInstrumentation: true,

  // Optional:Set a specific collector address for sending data. Omit this field for default address.
  // comment out below for production
  collectorAddress,

  // Optional:Set a specific crash collector address for sending crashes. Omit this field for default address.
  crashCollectorAddress,
};
