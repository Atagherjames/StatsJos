import React, { useState, useEffect } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { Appbar } from "react-native-paper";
import { BackHandler } from "react-native";
import { useDataStore } from "../DataStore/DataStore";
import styles from "./examHeaderStyle";

const ExamHeader = ({ navigation }) => {
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [submitModalVisible, setSubmitModalVisible] = useState(false);
  const { state, dispatch } = useDataStore();
  const reviewMode = state.reviewMode;

  useEffect(() => {
    const backAction = () => {
      setExitModalVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (state.submitCbtExam) {
      setSubmitModalVisible(true);
    }
  }, [state.submitCbtExam]);

  return (
    <View style={styles.headerContainer}>
      <Appbar.Header style={{ backgroundColor: "#3668B7" }}>
        <View style={styles.container}>
          <Appbar.BackAction
            onPress={() => setExitModalVisible(true)}
            color="#ffffff"
          />
          {!reviewMode && (
            <Text
              style={styles.text}
              onPress={() => setSubmitModalVisible(true)}
            >
              Submit
            </Text>
          )}
        </View>
      </Appbar.Header>

      {/* Exit modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={exitModalVisible}
        onRequestClose={() => {
          setExitModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>Are you sure you want to exit?</Text>
          <View style={styles.confirmBtn}>
            <Pressable
              style={styles.modalItem}
              onPress={() => {
                setExitModalVisible(false);

                dispatch({
                  type: "CBT_REVIEW_MODE",
                  payload: true,
                });

                dispatch({
                  type: "SELECTED_ANSWERS",
                  payload: {},
                });

                dispatch({
                  type: "CONFIRMED_SUBMIT",
                  payload: false,
                });

                dispatch({
                  type: "INITIAL_MINUTES",
                  payload: 0,
                });

                navigation.navigate("ExamPreset");
              }}
            >
              <Text style={{ color: "#fff" }}>Exit</Text>
            </Pressable>

            <Pressable
              style={styles.modalItem}
              onPress={() => {
                setExitModalVisible(false);
              }}
            >
              <Text style={{ color: "#fff" }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Submit modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={submitModalVisible}
        onRequestClose={() => {
          setSubmitModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>Are you sure you want to Submit?</Text>
          <View style={styles.confirmBtn}>
            <Pressable
              style={styles.modalItem}
              onPress={() => {
                setSubmitModalVisible(false);
                dispatch({
                  type: "CONFIRMED_SUBMIT",
                  payload: true,
                });

                dispatch({
                  type: "CBT_REVIEW_MODE",
                  payload: false,
                });

                navigation.navigate("ExamReview");
              }}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </Pressable>

            <Pressable
              style={styles.modalItem}
              onPress={() => {
                setSubmitModalVisible(false);
                dispatch({
                  type: "SUBMIT_CBT_EXAM",
                  payload: false,
                });
              }}
            >
              <Text style={{ color: "#fff" }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExamHeader;
