// examReviewStyle.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
  },

  DetailsTitle: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },

  head: { height: 40, backgroundColor: "#f1f8ff" },
  headText: { textAlign: "center", margin: 6, fontWeight: "bold" },
  boderStyle: { borderWidth: 1, borderColor: "#C1C0B9" },
  bodyText: { textAlign: "center", margin: 6 },

  correctionBtn: {
    backgroundColor: "#4382DF",
    textTransform: "uppercase",
  },

  btnContainer: {
    marginTop: 30,
  },
});

export default styles;
