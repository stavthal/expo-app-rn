import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./src/screens/StartGameScreen";
import theme from "./src/utilities/Theme";

export default function App() {
  return (
    <LinearGradient
      colors={[theme.colors.teal, theme.colors.blue]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMethod="cover"
        source={require("./assets/images/background.jpg")}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
