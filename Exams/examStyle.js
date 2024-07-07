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

  icon: {
    height: "100 %",
    color: "white",
  },

  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  questionContainer: {
    marginTop: 20,
  },

  optionsContainer: {
    marginTop: 20,
  },

  radioButtonItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  questionListContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    width: "100%",
  },

  btn: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    fontSize: 10,
    backgroundColor: "#4382DF",
  },

  btnActive: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    fontSize: 10,
    backgroundColor: "#FFA500",
  },

  activeBtnText: {
    color: "#fff",
    backgroundColor: "rgba(255, 169, 51, 1)",
    backgroundImage:
      "linear-gradient( rgba(238, 232, 170, 0.6), rgba(255, 169, 51, 1))",
    padding: 6,
    borderColor: "rgb(255, 165, 0)",
    borderWidth: 1,
  },

  btnSelected: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    fontSize: 10,
    backgroundColor: "#006400",
  },

  btnText: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 255, 0.2)",
    backgroundImage:
      "linear-gradient(rgba(67, 130, 223, 1.0), rgba(0, 0, 255, 0.6))",
    padding: 6,
    borderColor: "rgb(67, 130, 223)",
    borderWidth: 1,
  },

  selectedBtnText: {
    color: "#fff",
    backgroundColor: "rgba(51, 102, 0, 1)",
    backgroundImage:
      "linear-gradient(rgba(51, 102, 0, 1), rgba(102, 153, 51, 1))",
    padding: 6,
    borderColor: "rgba(51, 102, 0, 1)",
    borderWidth: 1,
  },

  navBtn: {
    backgroundColor: "#4382DF",
    width: 150,
  },
});

export default styles;
