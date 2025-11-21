import NewRelic from "newrelic-react-native-agent";
import { APP_TOKEN, ENVIRONMENT } from "@env";

export let appToken = APP_TOKEN;

const collectorAddress =
  ENVIRONMENT === "prod"
    ? "mobile-collector.newrelic.com"
    : ENVIRONMENT === "eu-prod"
    ? "mobile-collector.eu01.nr-data.net"
    : "staging-mobile-collector.newrelic.com";
const crashCollectorAddress =
  ENVIRONMENT === "prod"
    ? "mobile-crash.newrelic.com"
    : ENVIRONMENT === "eu-prod"
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
