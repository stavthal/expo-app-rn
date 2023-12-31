import { View, TextInput, Text, StyleSheet } from "react-native";

import theme from "../../utilities/Theme";
import PrimaryButton from "./PrimaryButton";

const Card = ({ num, handleNum, handleConfirm, handleReset }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.instructionText}>Enter a number:</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={num}
        onChangeText={(n) => handleNum(n)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton disabled={num === ""} onPress={handleReset}>
            Reset
          </PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 30,
    backgroundColor: theme.colors.secondary800,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  instructionText: {
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: theme.colors.mediumprimary500,
    textAlign: "center",
    opacity: 0.35,
  },
  numberInput: {
    alignSelf: "center",
    width: 50,
    textAlign: "center",
    height: 50,
    fontSize: 32,
    borderBottomColor: theme.colors.primary500,
    borderBottomWidth: 2,
    color: theme.colors.primary500,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default Card;
