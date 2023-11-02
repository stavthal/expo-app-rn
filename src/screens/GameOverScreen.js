import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import theme from "../utilities/Theme";

const GameOverScreen = ({ restartGame, roundsPlayed }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.gameOver}>Game is over</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.roundsRow}>
          <Text style={styles.roundsPlayed}>
            Your guess was found by the computer after: {roundsPlayed}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={restartGame}>Start new game</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},

  imageContainer: {
    borderRadius: 200,
    borderWidth: 0.8,
    borderColor: "black",
    height: 300,
    width: 300,
    overflow: "hidden",
    alignSelf: "center",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  gameOver: {
    marginVertical: 80,
    fontSize: 40,
    textAlign: "center",
    color: theme.colors.grey300,
    fontFamily: "Lobster",

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
    marginHorizontal: "3%",

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
