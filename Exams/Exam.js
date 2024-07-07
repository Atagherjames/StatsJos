import { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";
import {
  Divider,
  Text,
  Card,
  IconButton,
  RadioButton,
  Button,
} from "react-native-paper";
import styles from "./examStyle";
import { examData } from "./examData";
import { useDataStore } from "../DataStore/DataStore";

const Exam = ({ navigation }) => {
  const { state, dispatch } = useDataStore();
  const [reviewMode, setReviewMode] = useState(state.reviewMode);
  const [time, setTime] = useState(state.initialMinutes * 60);

  useEffect(() => {
    setReviewMode(state.reviewMode);
    if (reviewMode) {
      setTime(state.elapsedTime);
    } else {
      setTime(state.initialMinutes * 60);
    }
  }, [state.reviewMode, state.initialMinutes, state.elapsedTime, reviewMode]);

  const [currentIndex, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    state.cbtSelectedAnswers || {}
  );

  useEffect(() => {
    if (!reviewMode) {
      if (time > 0) {
        const timerId = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(timerId);
      } else {
        dispatch({
          type: "SELECTED_ANSWERS",
          payload: selectedAnswers,
        });
        dispatch({
          type: "ELAPSED_TIME",
          payload: time,
        });

        Toast.show({
          type: "success",
          text1: "Submitted  successfully",
          autoHide: true,
          visibilityTime: 2000,
        });
        navigation.navigate("ExamReview");
      }
    }
  }, [reviewMode, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const currentQuestionId = examData[currentIndex].id;
    const currentSelectedAnswer = selectedAnswers[currentQuestionId];
    if (currentSelectedAnswer) {
      setChecked(currentSelectedAnswer);
    } else {
      setChecked(null);
    }
  }, [currentIndex, selectedAnswers]);

  useEffect(() => {
    if (state.confirmedSubmit) {
      dispatch({
        type: "SELECTED_ANSWERS",
        payload: selectedAnswers,
      });

      const elapsedTime = time;
      dispatch({
        type: "ELAPSED_TIME",
        payload: elapsedTime,
      });

      Toast.show({
        type: "success",
        text1: "Submitted  successfully",
        autoHide: true,
        visibilityTime: 2000,
      });
    }
    return;
  }, [state.confirmedSubmit]);

  const nextButton = () => {
    if (currentIndex < examData.length - 1) {
      setIndex(currentIndex + 1);
    }
  };

  const prevButton = () => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  const submitButton = () => {
    dispatch({
      type: "SUBMIT_CBT_EXAM",
      payload: true,
    });
  };

  const selectedAnswerFunc = (answer) => {
    const currentQuestionId = examData[currentIndex].id;
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [currentQuestionId]: answer,
    }));
  };

  const [checked, setChecked] = useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          {/* CBT metadata */}
          <View style={styles.cbtMetaData}>
            <Text style={styles.text}>
              ANATOMY: {currentIndex + 1}/{examData.length}
            </Text>
            <View style={styles.timerContainer}>
              <Text style={styles.text}>{formatTime()}</Text>
              <IconButton icon="clock-outline" size={25} />
            </View>
          </View>
          <Divider />

          <View style={styles.questionContainer}>
            <Card>
              <Card.Content>
                <Text variant="bodyMedium">
                  {examData[currentIndex].question}
                </Text>
              </Card.Content>
            </Card>
          </View>

          <View style={styles.optionsContainer}>
            <Card>
              <Card.Content>
                <RadioButton.Group
                  onValueChange={(value) => {
                    if (!reviewMode) {
                      setChecked(value);
                      selectedAnswerFunc(value);
                    }
                  }}
                  value={checked}
                >
                  {examData[currentIndex].options.map((option) => {
                    const correctAnswer = examData[currentIndex].answer.key;
                    const isSelected =
                      selectedAnswers[examData[currentIndex].id] === option.key;
                    const isCorrect = correctAnswer === option.key;

                    return (
                      <View key={option.key} style={styles.radioButtonItem}>
                        <RadioButton
                          value={option.key}
                          color="#4382DF"
                          disabled={reviewMode}
                        />
                        <Text>
                          {option.key}) {option.text}{" "}
                          {reviewMode && (
                            <>
                              {isSelected && (
                                <Text
                                  style={{ color: isCorrect ? "green" : "red" }}
                                >
                                  {isCorrect ? "✓" : "✗"}
                                </Text>
                              )}
                              {!isSelected && isCorrect && (
                                <Text style={{ color: "green" }}>✓</Text>
                              )}
                            </>
                          )}
                        </Text>
                      </View>
                    );
                  })}
                </RadioButton.Group>
              </Card.Content>
            </Card>
          </View>

          <View style={styles.navigationContainer}>
            <Button mode="contained" onPress={prevButton} style={styles.navBtn}>
              PREVIOUS
            </Button>

            {currentIndex === examData.length - 1 ? (
              <Button
                mode="contained"
                onPress={
                  reviewMode
                    ? () => navigation.navigate("ExamReview")
                    : submitButton
                }
                style={styles.navBtn}
              >
                {reviewMode ? "BACK" : "SUBMIT"}
              </Button>
            ) : (
              <Button
                mode="contained"
                onPress={nextButton}
                style={styles.navBtn}
              >
                NEXT
              </Button>
            )}
          </View>

          <View style={styles.questionListContainer}>
            {examData.map((question, index) => {
              const currentQuestionId = question.id;
              const isActive = currentIndex == index;
              const isSelected = !!selectedAnswers[currentQuestionId];

              return (
                <TouchableOpacity
                  style={[
                    styles.btn,
                    isActive && styles.btnActive,
                    isSelected && styles.btnSelected,
                  ]}
                  key={question.id}
                  onPress={() => setIndex(index)}
                >
                  <Text
                    style={[
                      styles.btnText,
                      isActive && styles.activeBtnText,
                      isSelected && styles.selectedBtnText,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exam;
