import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    width: 300,
    height: 300,
    borderRadius: 5,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -200 }],
    boxShadow: "4px 4px 6px rgba(0,0,0,0.1), -4px -4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  confirmBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
    marginTop: 80,
  },

  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 17,
  },

  modalItem: {
    backgroundColor: "#4382DF",
    padding: 4,
    width: 90,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default styles;
