import { Text, StyleSheet } from "react-native";

import theme from "../../utilities/Theme";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.secondary500,
    padding: 12,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 30,
    borderWidth: 2,
    borderColor: theme.colors.secondary500,
  },
});

export default Title;
