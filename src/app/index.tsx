import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>I Am Rich</Text>
      </View>

      <View style={styles.content}>
        <MaterialCommunityIcons
          name="diamond-stone"
          size={180}
          color="#5faece"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    backgroundColor: "#e2b94f",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appBarTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  caption: {
    marginTop: 24,
    color: "#ecf0f1",
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
});
