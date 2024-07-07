import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { Card } from "react-native-paper";
import styles from "./privacyPolicyStyle";

const PrivacyPolicy = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Privacy Policy for StatsJos</Text>

              <Text style={{ marginTop: 10 }}>
                Effective Date: 1st September, 2024
              </Text>

              <Text style={{ marginTop: 10 }}>1. Introduction</Text>
              <Text>
                StatsJos is committed to protecting the privacy of its users.
                This Privacy Policy outlines how we collect, use, disclose, and
                safeguard your information when you use our mobile application,
                StatsJos.
              </Text>

              <Text style={{ marginTop: 10 }}>2. Information We Collect</Text>
              <Text>
                - Personal Information: We do not collect personally
                identifiable information such as your name, address, phone
                number, or email address unless you voluntarily provide it to
                us.
              </Text>
              <Text>
                - Non-Personal Information: We may collect non-personal
                information about you automatically when you use StatsJos, such
                as usage data, device information, and technical information
                like your IP address and device identifiers.
              </Text>

              <Text style={{ marginTop: 10 }}>
                3. How We Use Your Information
              </Text>
              <Text>
                We may use the information we collect in the following ways:
              </Text>
              <Text>- To provide and maintain StatsJos and its features.</Text>
              <Text>- To improve and personalize your experience.</Text>
              <Text>
                - To analyze usage of the app and improve our services.
              </Text>
              <Text>
                - To respond to your inquiries, support needs, or customer
                service requests.
              </Text>

              <Text style={{ marginTop: 10 }}>4. Sharing Your Information</Text>
              <Text>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. However, we may share
                non-personal information with third-party service providers to
                assist us in operating StatsJos or conducting our business.
              </Text>

              <Text style={{ marginTop: 10 }}>
                5. Security of Your Information
              </Text>
              <Text>
                We implement reasonable security measures to protect the
                security of your information both online and offline. However,
                no method of transmission over the internet or electronic
                storage is completely secure, so we cannot guarantee absolute
                security.
              </Text>

              <Text style={{ marginTop: 10 }}>
                6. Exam Preparation Disclaimer
              </Text>
              <Text>
                StatsJos provides practice questions to help users prepare for
                exams. While these questions simulate exam formats and topics,
                they may not mirror actual exam questions. The similarity
                depends on various factors, including exam updates and changes.
                Using StatsJos can enhance familiarity with exam content but
                does not guarantee identical questions in exams.
              </Text>

              <Text style={{ marginTop: 10 }}>
                7. Changes to This Privacy Policy
              </Text>
              <Text>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this Privacy
                Policy periodically.
              </Text>

              <Text style={{ marginTop: 10 }}>8. Contact Us</Text>
              <Text>
                If you have any questions about this Privacy Policy, please
                contact us at jamesatagher@gmail.com
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
