import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

import theme from "../utilities/Theme";

function PrimaryButton({ children }) {
  const pressHandler = () => {
    alert("Pressed");
  };
  return (
    <View style={{ ...styles.buttonOuterContainer }}>
      <Pressable
        style={({ pressed }) =>
          pressed && Platform.OS === "ios"
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233a" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: theme.colors.blue,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
