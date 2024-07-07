import { useState, useEffect } from "react";
import { View, Modal, Text } from "react-native";
import { Appbar } from "react-native-paper";
import styles from "./appStyle";
import { Pressable, TouchableWithoutFeedback } from "react-native";
import { useDataStore } from "./DataStore/DataStore";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { state, dispatch } = useDataStore();
  const { isLoggedIn } = state;

  const logout = () => {
    dispatch({
      type: "LOGOUT_USER",
      payload: true,
    });
    navigation.navigate("login");
  };

  return (
    /* Header view */
    <View style={styles.headerContainer}>
      <Appbar.Header style={{ backgroundColor: "#3668B7" }}>
        <Appbar.Action
          icon="menu"
          color="#fff"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="StatsJos" titleStyle={{ color: "#fff" }} />
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
            {isLoggedIn ? (
              <View style={styles.modalLogoutContainer}>
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
            ) : (
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
                </Pressable>
              </View>
            )}
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Header;
