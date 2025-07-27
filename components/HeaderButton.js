import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function HeaderButton({ icon, onpressed, color }) {
  return (
    <Pressable
      onPress={onpressed}
      style={(pressedbutton) => pressedbutton && styles.pressedbutton}>
      <Ionicons name={icon} size={28} color={color} />
    </Pressable>
  );
}

export default HeaderButton;

const styles = StyleSheet.create({
  pressedbutton: {
    opacity: 0.6,
  },
});
