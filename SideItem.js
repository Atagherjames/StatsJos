import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDataStore } from "./DataStore/DataStore";
import Icon from "react-native-vector-icons/FontAwesome";
const SideBarItems = ({ icon, text, lock, routeName, navigation }) => {
  // styles
  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
      paddingRight: 10,
    },

    item: {
      flexDirection: "row",
      alignItems: "center",
    },

    iconStyle: {
      marginRight: 10,
    },

    lockContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
    },

    btnPressed: {
      color: "#4382DF",
    },
  });

  const [isPressed, setIsPressed] = useState(false);
  const { state } = useDataStore();
  const { isLoggedIn } = state;

  const logout = () => {
    navigation.navigate("login");
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setTimeout(() => setIsPressed(false), 500);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => {
        isLoggedIn
          ? navigation.navigate(routeName)
          : routeName === "home"
          ? navigation.navigate(routeName)
          : logout();
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Icon
            name={icon}
            size={25}
            color={isPressed ? "#4382DF" : "gray"}
            style={styles.iconStyle}
          />
          <Text style={isPressed && styles.btnPressed}>{text}</Text>
        </View>
        <View style={styles.lockContainer}>
          {lock && (
            <Icon
              name="lock"
              size={20}
              color="black"
              style={styles.iconStyle}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default SideBarItems;
