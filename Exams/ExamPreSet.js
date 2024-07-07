import { useState, useCallback, useEffect } from "react";
import { View, Text, Image, Pressable, Modal, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DropDown from "react-native-paper-dropdown";
import { useDataStore } from "../DataStore/DataStore";
import styles from "./examPreSetStyle";
import { SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const ExamPreSet = ({ navigation }) => {
  const { state, dispatch } = useDataStore();

  const [showSemesterDropDown, setShowSemesterDropDown] = useState(false);
  const [showCourseDropDown, setShowCourseDropDown] = useState(false);
  const [showTimerDropDown, setShowTimerDropDown] = useState(false);

  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [timer, setTimer] = useState("");

  const semesterList = [
    { label: "First Semester", value: "first" },
    { label: "Second Semester", value: "second" },
  ];

  const courseList = [
    { label: "Math 101", value: "MATH101" },
    { label: "BIO 101", value: "BIO101" },
  ];

  const timerList = [
    { label: "20 Minutes", value: 20 },
    { label: "30 Minutes", value: 30 },
    { label: "40 Minutes", value: 40 },
    { label: "50 Minutes", value: 50 },
    { label: "60 Minutes", value: 60 },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const startExam = () => {
    if (semester && course && timer) {
      dispatch({
        type: "CBT_SELECTED_COURSE",
        payload: course,
      });

      dispatch({
        type: "INITIAL_MINUTES",
        payload: timer,
      });

      dispatch({
        type: "CBT_REVIEW_MODE",
        payload: false,
      });

      navigation.navigate("Exam");
    } else {
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={require("../assets/exam.png")} />
        </View>

        <View style={styles.textContainer}>
          <Text style={{ fontSize: 18 }}>Choose your preferred test </Text>
          <Text style={{ fontSize: 18 }}>and start practicing</Text>
        </View>

        <View style={styles.selectionContainer}>
          <View style={{ marginTop: 20 }}>
            <DropDown
              label={"Semester"}
              mode={"outlined"}
              visible={showSemesterDropDown}
              showDropDown={() => setShowSemesterDropDown(true)}
              onDismiss={() => setShowSemesterDropDown(false)}
              value={semester}
              setValue={setSemester}
              list={semesterList}
              outlineColor="grey"
              activeColor="#4382DF"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <DropDown
              label={"Course"}
              mode={"outlined"}
              visible={showCourseDropDown}
              showDropDown={() => setShowCourseDropDown(true)}
              onDismiss={() => setShowCourseDropDown(false)}
              value={course}
              setValue={setCourse}
              list={courseList}
              outlineColor="grey"
              activeColor="#4382DF"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <DropDown
              label={"Timer"}
              mode={"outlined"}
              visible={showTimerDropDown}
              showDropDown={() => setShowTimerDropDown(true)}
              onDismiss={() => setShowTimerDropDown(false)}
              value={timer}
              setValue={setTimer}
              list={timerList}
              outlineColor="grey"
              activeColor="#4382DF"
            />
          </View>
        </View>

        <View style={styles.startContainer}>
          <Pressable style={styles.startButton} onPress={startExam}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Start</Text>
              <Icon name="arrow-right" size={30} color="#4382DF" />
            </View>
          </Pressable>
        </View>

        {/* Modal for warning */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Please select Semester, Course, and Timer to start the exam.
              </Text>
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.modalButton, { backgroundColor: "#4382DF" }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>OK</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamPreSet;
