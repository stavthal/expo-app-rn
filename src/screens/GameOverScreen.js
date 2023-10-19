import { SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ restartGame }) => {
  return (
    <SafeAreaView>
      <Text>Game is over</Text>
      <PrimaryButton onPress={restartGame}>Try again</PrimaryButton>
    </SafeAreaView>
  );
};

export default GameOverScreen;
