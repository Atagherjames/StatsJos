// examReviewStyle.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalPosition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  modalContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 16,
    width: 200,
    height: 50,
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
