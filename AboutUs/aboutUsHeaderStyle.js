import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100 %",
  },

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
