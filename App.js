import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Toast from "react-native-toast-message";
import { DataStore } from "./DataStore/DataStore";

import SideBar from "./SideBar";
import Home from "./Home";
import Header from "./Header";
import Exam from "./Exams/Exam";
import Question from "./Questions/Question";
import QuestionHeader from "./Questions/QuestionHeader";
import PastQuestion from "./Past Questions/PastQuestion";
import PastQuestionHeader from "./Past Questions/QuestionHeader";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./AboutUs/AboutUs";
import AboutHeader from "./AboutUs/AboutUsHeader";
import { ActivationPin } from "./BuyActivationPin/ActivationPin";
import ActivatePin from "./EnterActivationPin/ActivatePin";
import SignUp from "./Sign_Up/SignUp";
import Login from "./Login/Login";
import ExamHeader from "./Exams/ExamHeader";
import ExamPreSet from "./Exams/ExamPreSet";
import ExamReview from "./Exams/ExamReview";
import ExamReviewHeader from "./Exams/ExamReviewHeader";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <SafeAreaProvider>
        <DataStore>
          <PaperProvider theme={DefaultTheme}>
            <NavigationContainer>
              <Drawer.Navigator
                screenOptions={{
                  drawerStyle: {
                    backgroundColor: "#4382DF",
                  },
                }}
                drawerContent={(props) => <SideBar {...props} />}
              >
                <Drawer.Screen
                  name="home"
                  component={Home}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="login"
                  component={Login}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="sign_up"
                  component={SignUp}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="ExamPreset"
                  component={ExamPreSet}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="Exam"
                  component={Exam}
                  options={{
                    header: (props) => <ExamHeader {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="ExamReview"
                  component={ExamReview}
                  options={{
                    header: (props) => <ExamReviewHeader {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="PastQuestion"
                  component={PastQuestion}
                  options={{
                    header: (props) => <PastQuestionHeader {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="Question"
                  component={Question}
                  options={{
                    header: (props) => <QuestionHeader {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="aboutUs"
                  component={AboutUs}
                  options={{
                    header: (props) => (
                      <AboutHeader {...props} title={"About Us"} />
                    ),
                  }}
                />

                <Drawer.Screen
                  name="privacyPolicy"
                  component={PrivacyPolicy}
                  options={{
                    header: (props) => (
                      <AboutHeader {...props} title={"Privacy Policy"} />
                    ),
                  }}
                />

                <Drawer.Screen
                  name="ActivationPin"
                  component={ActivationPin}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />

                <Drawer.Screen
                  name="ActivatePin"
                  component={ActivatePin}
                  options={{
                    header: (props) => <Header {...props} />,
                  }}
                />
              </Drawer.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </DataStore>
      </SafeAreaProvider>

      <Toast />
    </>
  );
}
