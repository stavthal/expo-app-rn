import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import theme from "../utilities/Theme";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton style={styles.buttonContainer}>Reset</PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: theme.colors.mediumBlue,
    elevetaion: 8, // android only property
    shadowOffset: { widht: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 1.25,
  },
  numberInput: {
    alignSelf: "center",
    width: 50,
    textAlign: "center",
    height: 50,
    fontSize: 32,
    borderBottomColor: theme.colors.teal,
    borderBottomWidth: 2,
    color: theme.colors.teal,
    fontWeight: "bold",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
