import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

import theme from "../../utilities/Theme";

function PrimaryButton({ children, onPress, disabled, fontSize }) {
  return (
    <View style={{ ...styles.buttonOuterContainer }}>
      <Pressable
        style={({ pressed }) =>
          disabled || (pressed && Platform.OS === "ios")
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={!disabled ? onPress : null}
        android_ripple={{ color: "#640233a" }}
      >
        <Text
          style={{
            fontSize: children.length === 1 ? 28 : 16,
            ...styles.buttonText,
          }}
        >
          {children}
        </Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.6,
  },
});
