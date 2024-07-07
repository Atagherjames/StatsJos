import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { Card } from "react-native-paper";
import styles from "./aboutUsStyle";

const AboutUs = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={{ fontSize: 20 }}>Welcome to StatsJos!</Text>

              <Text style={{ fontSize: 18, marginTop: 20 }}>
                StatsJos is brought to you by a passionate team of developers:
              </Text>
              <Text style={{ fontSize: 18 }}>
                - Atagher James: A 200L medical student with a knack for
                innovation and education technology.
              </Text>
              <Text style={{ fontSize: 18 }}>
                - Favour Idoko: Also a 200L medical student, dedicated to
                creating impactful learning tools.
              </Text>
              <Text style={{ fontSize: 18 }}>
                - Prime Idoko: A 200L engineering student, bringing technical
                expertise and creativity to StatsJos.
              </Text>

              <Text style={{ marginTop: 20, fontSize: 20 }}>
                Our mission is to empower students through innovative
                educational solutions. Whether you're preparing for exams or
                expanding your knowledge, StatsJos is here to support your
                academic journey.
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
