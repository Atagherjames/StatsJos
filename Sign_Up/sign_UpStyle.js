import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    position: "relative",
    padding: 20,
  },

  imgContainer: {
    display: "flex",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  image: {
    width: 400,
    height: 400,
  },

  signupContainer: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },

  inputContainer: {
    width: "100%",
    paddingTop: 20,
  },

  input: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    height: 45,
    padding: 10,
  },

  btn: {
    borderRadius: 15,
    backgroundColor: "#4382DF",
    padding: 10,
    alignItems: "center",
  },

  text1: { color: "#4382DF" },
  text2: { color: "white" },
});

export default styles;
