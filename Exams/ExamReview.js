import { useState, useEffect } from "react";
import { ScrollView, View, Dimensions, Text } from "react-native";
import { Button } from "react-native-paper";
import { ProgressChart } from "react-native-chart-kit";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import { useDataStore } from "../DataStore/DataStore";
import { examData } from "./examData";
import styles from "./examReviewStyle";
import { SafeAreaView } from "react-native";

const ExamReview = ({ navigation }) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const handleDimensionChange = ({ window }) => {
      setScreenWidth(window.width);
    };
    Dimensions.addEventListener("change", handleDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimensionChange);
    };
  }, []);

  const { state, dispatch } = useDataStore();

  const [cbtAnswers, setCbtAnswers] = useState(state.cbtSelectedAnswers);

  useEffect(() => {
    setCbtAnswers(state.cbtSelectedAnswers);
  }, [state.cbtSelectedAnswers]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const newScore = calculateScore(examData, cbtAnswers);
    setScore(newScore);
  }, [examData, cbtAnswers]);

  const calculateScore = (examQuestions, selectedAnswers) => {
    let score = 0;
    examQuestions.forEach((question) => {
      const correctAnswer = question.answer.key;
      const chosenAnswer = selectedAnswers[question.id];
      if (chosenAnswer && chosenAnswer === correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const timeElapsed = state.initialMinutes * 60 - state.elapsedTime;

  const percentageCorrect = (score / examData.length) * 100;

  let grade;
  switch (true) {
    case percentageCorrect >= 70:
      grade = "A";
      break;
    case percentageCorrect >= 60:
      grade = "B";
      break;
    case percentageCorrect >= 50:
      grade = "C";
      break;
    case percentageCorrect >= 40:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  const data = {
    labels: ["Time", "Score"],
    data: [timeElapsed / (state.initialMinutes * 60), score / examData.length],
  };

  const chartConfig = {
    backgroundColor: "#f1f8ff",
    backgroundGradientFrom: "#f1f8ff",
    backgroundGradientTo: "#4382DF",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 16,
    barPercentage: 0,
    useShadowColorFromDataset: false,
  };

  const tableHead = ["Course", "Score", "Time Spent", "Grade"];
  const tableData = [
    [
      state.cbtSelectedCourse,
      `${score}/${examData.length}`,
      `${(timeElapsed / 60).toFixed(2)} m`,
      grade,
    ],
  ];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chartWrapper}>
            <ProgressChart
              data={data}
              width={screenWidth - 32}
              height={220}
              strokeWidth={25}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
            />
          </View>
        </View>

        {/* Table */}
        <Text style={styles.DetailsTitle}>Detail</Text>
        <View>
          <Table borderStyle={styles.boderStyle}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <TableWrapper>
              <Rows data={tableData} textStyle={styles.bodyText} />
            </TableWrapper>
          </Table>
          <View style={styles.btnContainer}>
            <Button
              mode="contained"
              onPress={() => {
                dispatch({
                  type: "CBT_REVIEW_MODE",
                  payload: true,
                });
                navigation.navigate("Exam");
              }}
              style={styles.correctionBtn}
            >
              CORRECTIONS
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamReview;
