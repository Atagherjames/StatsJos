import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(54, 104, 183,)",
    position: "relative",
    padding: 20,
  },

  btn: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    fontSize: 10,
    backgroundColor: "#4382DF",
  },

  imgContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },

  image: {
    width: "100%",
    height: 145,
    borderRadius: 10,
  },

  selectionContainer: {
    marginTop: 50,
  },

  textContainer: {
    display: "flex",
    placeItems: "center",
    marginTop: 50,
  },

  text: {
    color: "#4382DF",
    textTransform: "uppercase",
    fontSize: 17,
  },

  startContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "ce",
    justifyContent: "flex-end",
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
