import React, { useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

import { ExternalLink } from "../../components/ExternalLink";
import { ThemedText } from "../../components/ThemedText";
import NewRelic from "newrelic-react-native-agent";

const Separator = () => <View style={styles.separator} />;

export default function TabTwoScreen() {
  const [result, setResult] = useState("");

  const HTTPRequestError = () => {
    fetch("https://leasestar-api.realpage.com/jsp/configElements")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const HTTPRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResult(json.title);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const delayedRequest = async () => {
    try {
      await fetch("https://postman-echo.com/delay/5")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setResult(json.delay);
          return json.delay;
        })
        .catch((error) => {
          console.error(error);
          NewRelic.noticeNetworkFailure(
            "https://postman-echo.com/delay/5",
            "500",
            500,
            5,
            "5"
          );
        });
    } catch (error) {
      console.error("Error in delayedRequest:", error);
    }
  };

  const NetworkFailure = () => {
    fetch(
      "https://ec2-54-183-227-129.us-west-1.compute.amazonaws.com:3001/webrequest"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResult(json.data.first_name);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <ExternalLink href="https://www.google.com">
          <ThemedText type="link">Google</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.newrelic.com">
          <ThemedText type="link">New Relic</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.expo.dev">
          <ThemedText type="link">Expo</ThemedText>
        </ExternalLink>
      </View>
      <Separator />
      <View style={styles.buttons}>
        <Button
          title="HTTP Request"
          accessibilityLabel="HTTP Request"
          onPress={() => HTTPRequest()}
        />
        <Button
          title="HTTP Request Error"
          accessibilityLabel="HTTP Request Error"
          onPress={() => HTTPRequestError()}
        />
        <Button
          title="Network Failure"
          accessibilityLabel="Network Failure"
          onPress={() => delayedRequest()}
        />
        <Button
          title="Distributed Tracing Request"
          accessibilityLabel="Distributed Tracing Request"
          onPress={() => NetworkFailure()}
        />
        <Separator />
        <Button title="Reset" onPress={() => setResult("")} />
        <Separator />
        <Button
          title="Handled Exception"
          accessibilityLabel="Handled Exception"
          onPress={() => {
            try {
              var foo = {};
              /* @ts-expect-error type mismatch */
              foo.bar();
            } catch (e: any) {
              NewRelic.recordError(e);
            }
          }}
        />
        <Text>Your Result: {result}</Text>
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
