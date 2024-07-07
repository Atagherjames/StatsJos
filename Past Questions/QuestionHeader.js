import { Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Pressable,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from "react-native";
import { useState } from "react";
import styles from "./pastQuestionStyle";

const PastQuestionHeader = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {" "}
      <Appbar.Header style={{ backgroundColor: "#3668B7" }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("home");
          }}
          color="#ffffff"
        />
        <Appbar.Content title="Chemistry" color="#ffffff" />

        <Appbar.Action
          icon="dots-vertical"
          onPress={() => setModalVisible(!modalVisible)}
          color="#ffffff"
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
                <Text>
                  Sign Out <Icon name="sign-out" size={18} color="grey" />
                </Text>
              </Pressable>
              <Pressable
                style={styles.modalItem}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("sign_up");
                }}
              ></Pressable>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default PastQuestionHeader;
