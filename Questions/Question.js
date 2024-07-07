import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, TextInput } from "react-native-paper";
import styles from "./questionStyle";
import { SafeAreaView } from "react-native-safe-area-context";

const Question = () => {
  const [question, setQuestion] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.questionTextOne}>
              Hi, Jossite
            </Text>

            <Text variant="bodyMedium" style={styles.questionTextTwo}>
              How can we help you today?
            </Text>

            <View style={styles.questionInput}>
              <TextInput
                mode="outlined"
                label="Ask Your Question"
                placeholder="Ask Your Question"
                keyboardType="default"
                value={question}
                onChangeText={setQuestion}
                onFocus={() => setFocusedInput("question")}
                onBlur={() => setFocusedInput(null)}
                right={
                  <TextInput.Icon
                    icon="chat"
                    color={focusedInput === "question" ? "#4382DF" : "grey"}
                  />
                }
                outlineColor="grey"
                activeOutlineColor="#4382DF"
              />

              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "white" }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Question;
