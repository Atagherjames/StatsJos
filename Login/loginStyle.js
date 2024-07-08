import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    padding: 20,
  },

  imgContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    alignSelf: "center",
  },

  welcomeMessage: {
    marginTop: -40,
  },

  image: {
    width: 200,
    height: 200,
  },

  loginContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 20,
  },

  welcomeText: {
    fontSize: 25,
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
    width: "80%",
    alignSelf: "center",
    fontSize: 20,
    padding: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    paddingBottom: 10,
  },

  forgotPassword: {
    alignSelf: "center",
    marginTop: 10,
  },

  signUp: {
    alignItems: "center",
    justifySelf: "flex-end",
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
  },

  text1: { color: "white" },
  text2: { color: "#4382DF" },
});

export default styles;
