import { Text, View, StyleSheet } from "react-native";
import theme from "../../utilities/Theme";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.colors.blue,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: theme.colors.blue,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
