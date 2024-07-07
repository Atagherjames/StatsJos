import { useState } from "react";
import { ScrollView, View, SafeAreaView, Text } from "react-native";
import { Divider, Card, Button } from "react-native-paper";

import styles from "./pastQuestionStyle";
import { examData } from "../Exams/examData";

const PastQuestion = ({ navigation }) => {
  const [currentIndex, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextButton = () => {
    setShowAnswer(false);
    if (currentIndex < examData.length - 1) {
      setIndex(currentIndex + 1);
    }
  };

  const prevButton = () => {
    setShowAnswer(false);
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  const showAnswerFunc = () => {
    const answer = examData[currentIndex].answer.key;
    return answer;
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          {/* CBT metadata */}
          <Text style={styles.cbtMetaData}>
            <Text style={styles.text}>
              ANATOMY: {currentIndex + 1}/{examData.length}
            </Text>
          </Text>
          <Divider />

          {/* question */}
          <View style={styles.questionContainer}>
            <Card style={styles.card}>
              <Card.Content>
                <Text variant="bodyMedium" style={styles.questionText}>
                  {examData[currentIndex].question}
                </Text>
              </Card.Content>
            </Card>
          </View>

          {/* options */}
          <View style={styles.optionsContainer}>
            <Card style={styles.card}>
              <Card.Content>
                {examData[currentIndex].options.map((option) => (
                  <Card
                    style={[
                      styles.card,
                      option.key === "A" && styles.firstOfType,
                      showAnswer &&
                        option.key === showAnswerFunc() &&
                        styles.answer,
                    ]}
                    key={option.key}
                  >
                    <Card.Content>
                      <Text
                        variant="bodyMedium"
                        style={[styles.cardBodyContainer]}
                      >
                        <Text style={[styles.button]}>{option.key}</Text>
                        <Text
                          style={
                            showAnswer &&
                            option.key === showAnswerFunc() &&
                            styles.answerText
                          }
                        >
                          {option.text}
                        </Text>
                      </Text>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Content>
            </Card>
          </View>

          {/* explanation */}
          <View style={styles.explanationContainer}>
            {showAnswer && examData[currentIndex].explanation && (
              <Card style={styles.card}>
                <Card.Content>
                  <Text variant="bodyMedium" style={styles.explanationText}>
                    {examData[currentIndex].explanation}
                  </Text>
                </Card.Content>
              </Card>
            )}
          </View>

          <View style={styles.navigationContainer}>
            <Button mode="contained" onPress={prevButton} style={styles.navBtn}>
              PREVIOUS
            </Button>
            <Button mode="contained" onPress={nextButton} style={styles.navBtn}>
              NEXT
            </Button>
          </View>

          {!showAnswer ? (
            <Button
              mode="contained"
              onPress={() => setShowAnswer(true)}
              style={styles.showAnswer}
            >
              SHOW ANSWER
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={() => setShowAnswer(false)}
              style={styles.showAnswer}
            >
              HIDE ANSWER
            </Button>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PastQuestion;
