import { Image, StyleSheet, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/src/button";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Text>Button Primary</Text>
      <Button
        onPress={() => navigation.navigate("123" as never)}
        size="xs"
        type="primary"
        variant="solid"
        style={{ marginTop: 20 }}
      >
        Button
      </Button>

      <Button
        onPress={() => navigation.navigate("123" as never)}
        size="xs"
        type="primary"
        variant="outline"
        style={{ marginTop: 20 }}
      >
        Button
      </Button>

      <Button
        onPress={() => navigation.navigate("123" as never)}
        size="xs"
        type="primary"
        variant="link"
        style={{ marginTop: 20 }}
      >
        Button
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
