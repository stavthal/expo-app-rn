import { View, Text, StyleSheet } from "react-native";
import theme from "../../utilities/Theme";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
        #{roundNumber} {""}
      </Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: theme.colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: theme.colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignSelf: "center",

    //shadows
    elevation: 4,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
