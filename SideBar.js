import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./appStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDataStore } from "./DataStore/DataStore";
import SideBarItems from "./SideItem";
import { localstorageGetitem } from "./UtilityFunction/localStorage";

export default function SideBar({ navigation }) {
  const { state } = useDataStore();
  const { isLoggedIn } = state;
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function getUser() {
      try {
        const authentication = await localstorageGetitem("authentication");
        const user = await JSON.parse(authentication);
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser({});
        }
      } catch (error) {
        console.error("Error getting user from local storage:", error);
      }
    }

    getUser();
  }, []);

  return (
    <ScrollView style={styles.sideBar}>
      <View style={styles.sideBar.profile}>
        <Icon name="user-circle" size={30} color="white" />
        <Text style={{ color: "white" }}>
          {isLoggedIn ? currentUser.email : "Not Logged In"}
        </Text>
      </View>

      {/* Sidebar Children */}
      <View style={styles.sideBar.sideBarList}>
        <SideBarItems
          icon="home"
          lock={false}
          text="Home"
          routeName="home"
          navigation={navigation}
        />
        <SideBarItems
          icon="pencil-square-o"
          lock={true}
          text="Take an Exam"
          routeName="ExamPreset"
          navigation={navigation}
        />
        <SideBarItems
          icon="leanpub"
          lock={true}
          text="Study Past Questions"
          routeName="PastQuestion"
          navigation={navigation}
        />
        <SideBarItems
          icon="question"
          lock={true}
          text="Ask a Question"
          routeName="Question"
          navigation={navigation}
        />

        <SideBarItems
          icon="star"
          lock={false}
          text="Rate Us"
          routeName="Question"
          navigation={navigation}
        />

        <SideBarItems
          icon="share"
          lock={false}
          text="Share"
          routeName="Question"
          navigation={navigation}
        />

        <SideBarItems
          icon="info-circle"
          lock={false}
          text="About Us"
          routeName="aboutUs"
          navigation={navigation}
        />

        <SideBarItems
          icon="shield"
          lock={false}
          text="Privacy Policy"
          routeName="privacyPolicy"
          navigation={navigation}
        />
      </View>

      {/* Sidebar continuation */}
      <View style={{ borderTopWidth: 1, borderColor: "gray", width: "100%" }}>
        <View style={{ padding: 20, width: "100%" }}>
          <Text>Activation</Text>
          <SideBarItems
            icon="shopping-cart"
            lock={false}
            text="Buy Activation Code"
            routeName="ActivationPin"
            navigation={navigation}
          />
          <SideBarItems
            icon="check-circle"
            lock={false}
            text="Enter Activation code"
            routeName="ActivatePin"
            navigation={navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
}
