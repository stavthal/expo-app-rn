import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import theme from "../utilities/Theme";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNubmer] = useState("");

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  const handleReset = () => {
    setEnteredNubmer("");
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card
        num={enteredNumber}
        handleNum={setEnteredNubmer}
        handleConfirm={handleConfirm}
        handleReset={handleReset}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
});

export default StartGameScreen;
