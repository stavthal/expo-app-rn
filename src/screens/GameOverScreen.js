import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import theme from "../utilities/Theme";

const GameOverScreen = ({ restartGame, roundsPlayed }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.gameOver}>Game is over</Text>
        <View style={styles.roundsRow}>
          <Text style={styles.roundsPlayed}>Rounds played: {roundsPlayed}</Text>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={restartGame}>Try again</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},

  gameOver: {
    marginVertical: 100,
    fontSize: 40,
    textAlign: "center",
    color: theme.colors.grey300,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  roundsRow: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  roundsPlayed: {
    fontSize: 22,
    color: theme.colors.grey300,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  btnContainer: {
    marginHorizontal: 40,
  },

  text: {
    color: theme.colors.grey300,
  },
});

export default GameOverScreen;
