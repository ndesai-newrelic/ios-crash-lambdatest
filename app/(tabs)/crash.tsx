import React from "react";
import { Platform } from "react-native";
import { StyleSheet, View, Text, Button, SafeAreaView, NativeModules } from "react-native";
import NewRelic from "newrelic-react-native-agent";

const Separator = () => <View style={styles.separator} />;

export default function crash() {
  const { CrashModule } = NativeModules;

  const url: string = "http://www.example.com";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 28 }}>There will be a crash</Text>
        <Text style={{ fontSize: 16 }}>Example Errors</Text>
        <Text>{"\n"}</Text>
        <Text style={{ fontSize: 13 }}>
          Background the application and see the errors in New Relic.
        </Text>
      </View>
      <Separator />
      <View style={styles.buttons}>
        {Platform.OS === "android" ? (
          <Button
            title="Simulate ANR"
            accessibilityLabel="Simulate ANR"
            onPress={() => {
              CrashModule.createCrashEvent("anr", "ANR in progress");
            }}
          />
        ) : null}
        <Button
          title="Range Error"
          accessibilityLabel="Range Error"
          onPress={() => {
            var pi = 3.14159;
            pi.toFixed(100000);
            Platform.OS === "android" ? CrashModule.createCrashEvent("crash", "Range Error") : null;
            NewRelic.crashNow("Crash now - Range Error");
            NewRelic.noticeNetworkFailure(url, "500", 500, 5, "5");
          }}
        />
        <Button
          title="Reference Error"
          accessibilityLabel="Reference Error"
          onPress={() => {
            Platform.OS === "android" ? CrashModule.createCrashEvent("crash", "Reference Error") : null;
            NewRelic.crashNow("Crash now - Reference Error");
            /* @ts-expect-error type mismatch */
            bar++;
          }}
        />
        <Button
          title="URI Error"
          accessibilityLabel="URI Error"
          onPress={() => {
            decodeURIComponent("%");
            Platform.OS === "android" ? CrashModule.createCrashEvent("crash", "URI Error") : null;
            NewRelic.crashNow("Crash now - URI Error");
          }}
        />
        <Button
          title="Eval Error"
          accessibilityLabel="Eval Error"
          onPress={() => {
            Platform.OS === "android" ? CrashModule.createCrashEvent("crash", "Eval Error") : null;
            NewRelic.crashNow("Crash now - Eval Error");
            /* @ts-expect-error type mismatch */
            throw new EvalError("Hello", "someFile.js", 10);
          }}
        />
        <Button
          title="Type Error"
          accessibilityLabel="Type Error"
          onPress={() => {
            var foo = {};
            /* @ts-expect-error type mismatch */
            foo.bar();
            Platform.OS === "android" ? CrashModule.createCrashEvent("crash", "Type Error") : null;
            NewRelic.crashNow("Crash now - Type Error");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 150,
    color: "#808080",
    backgroundColor: "#D0D0D0",
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    padding: 8,
  },
});
