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
import { useDataStore } from "../DataStore/DataStore";
import styles from "./examReviewHeaderStyle";

const ExamReviewHeader = ({ navigation }) => {
  const { dispatch } = useDataStore();
  const [modalVisible, setModalVisible] = useState(false);
  const logout = () => {
    dispatch({
      type: "LOGOUT_USER",
      payload: true,
    });
    navigation.navigate("login");
  };

  return (
    <View>
      {" "}
      <Appbar.Header style={{ backgroundColor: "#3668B7" }}>
        <Appbar.BackAction
          onPress={() => {
            dispatch({
              type: "CBT_REVIEW_MODE",
              payload: false,
            });

            dispatch({
              type: "SELECTED_ANSWERS",
              payload: {},
            });

            dispatch({
              type: "CONFIRMED_SUBMIT",
              payload: false,
            });

            navigation.navigate("ExamPreset");
          }}
          color="#ffffff"
        />
        <Appbar.Content title="Result" color="#ffffff" />
        {/* <Appbar.Action
          icon="share-variant"
          onPress={() => {}}
          color="#ffffff"
        /> */}
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
                  logout();
                }}
              >
                <Text>
                  Sign Out <Icon name="sign-out" size={18} color="grey" />
                </Text>
              </Pressable>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ExamReviewHeader;
