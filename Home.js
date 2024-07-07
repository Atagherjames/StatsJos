import { SafeAreaView } from "react-native-safe-area-context";
import { useDataStore } from "./DataStore/DataStore";
import Swiper from "react-native-web-swiper";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./appStyle";

export default function Home({ navigation }) {
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
    <SafeAreaView style={styles.container}>
      {/* slide show */}
      <View style={styles.swiperContainer}>
        <Swiper controlsEnabled={false} loop timeout={4}>
          <View style={[styles.slideContainer, styles.slide1]}>
            <Text style={styles.swiperText}>Study & Practice Anywhere</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Text style={styles.swiperText}>UNIJOS CBT & Past Questions</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Text style={styles.swiperText}> Get One on One Coaching</Text>
          </View>
        </Swiper>
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() =>
            isLoggedIn ? navigation.navigate("ActivationPin") : logout()
          }
        >
          <Text style={styles.cardBtnText}>Buy Activation Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() =>
            isLoggedIn ? navigation.navigate("ActivatePin") : logout()
          }
        >
          <Text style={styles.cardBtnText}>Enter Activation Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => (isLoggedIn ? navigation.navigate("Exam") : logout())}
        >
          <Text style={styles.cardBtnText}>Exam Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() =>
            isLoggedIn ? navigation.navigate("PastQuestion") : logout()
          }
        >
          <Text style={styles.cardBtnText}>Study Past Questions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => (isLoggedIn ? navigation.navigate("News") : logout())}
        >
          <Text style={styles.cardBtnText}>Read News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() =>
            isLoggedIn ? navigation.navigate("Question") : logout()
          }
        >
          <Text style={styles.cardBtnText}>Ask a Question</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
