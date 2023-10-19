import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";

import StartGameScreen from "./src/screens/StartGameScreen";
import theme from "./src/utilities/Theme";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundsPlayed, setRoundsPlayed] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setGameOver(false);
    setUserNumber(pickedNumber);
  };

  const restartGame = () => {
    setGameOver(false);
    setUserNumber();
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        setRounds={setRoundsPlayed}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen restartGame={restartGame} roundsPlayed={roundsPlayed} />
    );
  }

  function gameOverHandler() {
    setGameOver(true);
  }
  return (
    <LinearGradient
      colors={[theme.colors.primary500, theme.colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMethod="resize"
        source={require("./assets/images/background.jpg")}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
