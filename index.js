// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import "@expo/metro-runtime";

import { App } from "expo-router/build/qualified-entry";
import { renderRootComponent } from "expo-router/build/renderRootComponent";
import NewRelic from "newrelic-react-native-agent";
import * as appVersion from "./package.json";
import { appToken, agentConfiguration } from "./newrelic";

NewRelic.startAgent(appToken, agentConfiguration);
NewRelic.setJSAppVersion(appVersion.version);
NewRelic.setUserId("one@one.com");

// This file should only import and register the root. No components or exports
// should be added here.
renderRootComponent(App);
