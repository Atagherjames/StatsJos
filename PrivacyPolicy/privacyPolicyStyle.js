import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(54, 104, 183,)",
    position: "relative",
    padding: 20,
  },

  card: {
    borderRadius: 0,
    marginBottom: 10,
  },

  questionTextOne: {
    fontSize: 20,
  },

  questionTextTwo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  questionInput: {
    marginTop: 30,
  },

  btn: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#4382DF",
    padding: 10,
    alignItems: "center",
  },
});

export default styles;
