import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

// util
import theme from "../utilities/Theme";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default GameScreen = ({ userNumber, onGameOver, setRounds }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [generatedNum, setGeneratedNum] = useState(initialGuess);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [prevGuessRounds, setGuessRounds] = useState([initialGuess]);

  const newRndNum = generateRandomBetween(
    minBoundary,
    maxBoundary,
    generatedNum
  );

  const nextGuessHandler = (dir) => {
    if (dir === "lower") {
      maxBoundary = generatedNum;
    } else {
      minBoundary = minBoundary + 1;
    }

    setGuessRounds((prevGuessRounds) => [newRndNum, ...prevGuessRounds]);
    setGeneratedNum(newRndNum);
    setRoundsPlayed(roundsPlayed + 1);
  };

  // check if the opponent's guess is the correct number
  useEffect(() => {
    if (generatedNum == userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      setRounds(roundsPlayed);
      onGameOver();
    }
  }, [generatedNum]);

  const guessRoundsListLength = prevGuessRounds.length;

  return (
    <SafeAreaView style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{generatedNum}</NumberContainer>
      <View>
        <Text style={styles.questionText}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              disabled={generatedNum < userNumber}
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons size={40} name="md-remove" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              disabled={generatedNum > userNumber}
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              <Ionicons size={40} name="md-add" />
            </PrimaryButton>
          </View>
        </View>
      </View>

      <View>
        {/* {prevGuessRounds.map((item) => (
          <Text>{item}</Text>
        ))} */}
        <FlatList
          data={prevGuessRounds}
          renderItem={(item) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - item.index}
              guess={item.item}
            />
          )}
          style={styles.flatList}
        />
      </View>
      <View style={styles.playedRoundsView}>
        <Text style={styles.playedRounds}> Rounds played: </Text>
        <View style={styles.playedRoundsCircle}>
          <Text style={styles.playedRoundsValue}>{roundsPlayed}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  questionText: {
    marginVertical: 25,
    fontSize: 24,
    textAlign: "center",
    color: theme.colors.grey300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,

    elevation: 5,
  },

  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderRadius: 20,
    backgroundColor: theme.colors.secondary800,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  playedRoundsView: {
    marginVertical: 20,
    alignContent: "center",
    alignItems: "center",
  },

  playedRounds: {
    color: theme.colors.grey300,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  playedRoundsCircle: {
    backgroundColor: theme.colors.secondary500,
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  playedRoundsValue: {
    color: theme.colors.grey300,
    fontSize: 54,
  },

  flatList: {
    height: 190,
    marginTop: 20,
    alignSelf: "center",
    width: "80%",
    // opacity: 0.75,
    borderRadius: 40,
    // paddingVertical: 40,
    // backgroundColor: theme.colors.primary500,
  },

  flatListText: {
    fontSize: 14,
    color: "#ffff",
  },
});
