import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { TextInput } from "react-native-paper";
import { useState } from "react";

import styles from "./sign_UpStyle";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../assets/Statsjos.png")}
          />
        </View>

        <View style={styles.signupContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={name}
              onChangeText={setName}
              mode="outlined"
              label="Name"
              placeholder="Name"
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon="account"
                  color={focusedInput === "name" ? "#4382DF" : "grey"}
                />
              }
              outlineColor="grey"
              activeOutlineColor="#4382DF"
              keyboardType="name"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon="email"
                  color={focusedInput === "email" ? "#4382DF" : "grey"}
                />
              }
              outlineColor="grey"
              activeOutlineColor="#4382DF"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              mode="outlined"
              label="Phone number"
              placeholder="Phone number"
              onFocus={() => setFocusedInput("phoneNumber")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon="phone"
                  color={focusedInput === "phoneNumber" ? "#4382DF" : "grey"}
                />
              }
              outlineColor="grey"
              activeOutlineColor="#4382DF"
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
            <TextInput
              mode="outlined"
              label=" Confirm password"
              placeholder=" Confirm password"
              secureTextEntry={!passwordVisible}
              value={confirmPassword}
              onChangeText={setPassword}
              onFocus={() => setFocusedInput("confirmPassword")}
              onBlur={() => setFocusedInput(null)}
              right={
                <TextInput.Icon
                  icon={confirmPasswordVisible ? "eye" : "eye-off"}
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                  color={
                    focusedInput === "confirmPassword" ? "#4382DF" : "grey"
                  }
                />
              }
              outlineColor="grey"
              activeOutlineColor="#4382DF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>
              Creating an account means you're okay with our{" "}
              <Text style={styles.text1}>Terms of Service</Text> and
              <Text style={styles.text1}> Privacy Policy</Text>
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text2}>Create an Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>
              Already have an account? <Text style={styles.text1}>Sign In</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
