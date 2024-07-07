import { useState } from "react";
import { View, Modal, Text } from "react-native";
import { Appbar } from "react-native-paper";
import styles from "./aboutUsHeaderStyle";
import { Pressable, TouchableWithoutFeedback } from "react-native";

const AboutHeader = ({ navigation, title }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    /* Header view */
    <View style={styles.headerContainer}>
      <Appbar.Header style={{ backgroundColor: "#3668B7" }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("home");
          }}
          color="#ffffff"
        />
        <Appbar.Content title={title} titleStyle={{ color: "#fff" }} />
        <Appbar.Action
          icon="dots-vertical"
          color="#fff"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </Appbar.Header>

      {/* modal */}
      <View style={styles.modalPosition}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <Pressable
                style={styles.modalItem}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("login");
                }}
              >
                <Text>Login</Text>
              </Pressable>
              <Pressable
                style={styles.modalItem}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("sign_up");
                }}
              >
                <Text>Sign Up</Text>
                {/* <Text>
                  Sign Out <Icon name="sign-out" size={18} color="gray" />
                </Text> */}
              </Pressable>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AboutHeader;
