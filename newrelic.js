import NewRelic from "newrelic-react-native-agent";
import { Platform } from "react-native";

export let appToken;

if (Platform.OS === "ios") {
  appToken = "AA17fe6658e601c9f10eefc8f808c0763461b532d2-NRMA";
} else {
  appToken = "AA6ea739552a5cde5e301e44aad55ec695855a9d71-NRMA";
}

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
  collectorAddress: "staging-mobile-collector.newrelic.com",

  // Optional:Set a specific crash collector address for sending crashes. Omit this field for default address.
  crashCollectorAddress: "staging-mobile-crash.newrelic.com",
};
