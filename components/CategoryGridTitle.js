import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTitle({ title, color, onpressd }) {
  return (
    <View style={[styles.outerContainer, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.buttonStyle}
        onPress={onpressd}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    overflow: "hidden",
  },
  buttonStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
