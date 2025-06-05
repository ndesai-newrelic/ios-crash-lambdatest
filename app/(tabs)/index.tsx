import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 44 }}>Home Screen</Text>
      <Text style={{ fontSize: 28 }}>main-agent-test-app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 150,
    color: "#808080",
    backgroundColor: "#D0D0D0",
    alignItems: "center",
  },
});
