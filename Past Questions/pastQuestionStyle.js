import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(54, 104, 183,)",
    position: "relative",
    padding: 20,
  },

  cbtMetaData: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  questionText: {
    color: "#4382DF",
  },

  text: {
    color: "#000",
  },

  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  optionsContainer: {
    marginTop: 20,
  },

  questionContainer: {
    marginTop: 30,
    width: "100%",
  },

  explanationContainer: {
    width: "100%",
  },

  explanationText: {
    color: "rgba(102, 153, 51, 1)",
  },

  navBtn: {
    backgroundColor: "#4382DF",
    width: 150,
  },

  showAnswer: {
    backgroundColor: "#4382DF",
    marginTop: 20,
  },

  answer: {
    backgroundColor: "rgba(102, 153, 51, 1)",
  },

  answerText: {
    color: "white",
  },

  card: {
    borderRadius: 0,
    marginBottom: 10,
  },

  firstOfType: {
    marginTop: 10,
  },

  button: {
    display: "flex",
    width: 30,
    height: 30,
    borderRadius: "50%",
    padding: 7,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4382DF",
  },

  cardBodyContainer: {
    display: "flex",
    gap: 20,
  },

  // Header
  modalPosition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    width: 200,
    height: 100,
    borderRadius: 5,
    position: "absolute",
    right: 5,
  },

  modalItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default styles;
