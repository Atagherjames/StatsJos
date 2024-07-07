import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import { useDataStore } from "../DataStore/DataStore";
import {
  localstorageSetitem,
  localstorageGetitem,
} from "../UtilityFunction/localStorage";

import styles from "./loginStyle";

const Login = ({ navigation }) => {
  const { dispatch } = useDataStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const loginByAuth = async (email, password) => {
      try {
        await authLogin(email, password);
        await getProfile();
        Toast.show({
          type: "success",
          text1: "Login Sucessful!",
          autoHide: true,
          visibilityTime: 2000,
        });
        navigation.navigate("home");
      } catch (error) {
        Toast.show({
          type: "error",
          text1: error.message,
          autoHide: true,
        });
      }
    };

    const getProfile = async () => {
      try {
        const user = await getAuthStatus();
        if (user) {
          dispatch({
            type: "LOAD_USER",
            payload: JSON.parse(user),
          });
        } else {
          this.logout();
        }
      } catch (error) {
        logout();
        throw error;
      }
    };

    const logout = () => {
      dispatch({
        type: "LOGOUT_USER",
        payload: true,
      });
      navigation.navigate("login");
    };

    const authLogin = (email, password) => {
      return new Promise(async (res, rej) => {
        if (email === "admin@gmail.com" && password === "admin") {
          localstorageSetitem(
            "authentication",
            JSON.stringify({ email: "admin@gmail.com" })
          );

          localstorageSetitem("token", "login_token");

          dispatch({
            type: "LOGIN_USER",
            payload: "login_token",
          });
          return res({ email: "admin@gmail.com" });
        }
        return rej({ message: "Either password or email is incorrect!" });
      });
    };

    const getAuthStatus = () => {
      return new Promise(async (res, rej) => {
        try {
          let authentication = localstorageGetitem("authentication");

          if (authentication) {
            return res(authentication);
          }
          return res(undefined);
        } catch (error) {
          return res(undefined);
        }
      });
    };

    if (login) {
      loginByAuth(email, password);
      setLogin(false);
    }
  }, [login]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../assets/Statsjos.png")}
          />

          <View style={styles.welcomeMessage}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.welcomeText}>
              to <Text style={styles.text2}>StatsJos</Text>
            </Text>
          </View>
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              outlineColor="grey"
              activeOutlineColor="#4382DF"
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon="email"
                  color={focusedInput === "email" ? "#4382DF" : "grey"}
                />
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye" : "eye-off"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  color={focusedInput === "password" ? "#4382DF" : "grey"}
                />
              }
              outlineColor="grey"
              activeOutlineColor="#4382DF"
            />
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => setLogin(true)}>
              <Text style={styles.text1}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgotPassword}>
            <Text style={styles.text2}>I Forgot my Password</Text>
          </View>

          <View style={styles.signUp}>
            <Text style={styles.inputText}>
              Don't have a StatsJos Account Yet?
            </Text>

            <Text style={styles.text2}>Click here to get one</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
