import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4382DF",
    position: "relative",
  },

  headerContainer: {
    width: "100 %",
  },

  modalPosition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  modalContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 16,
    width: 200,
    height: 100,
    borderRadius: 5,
    position: "absolute",
    right: 5,
  },

  modalLogoutContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: 16,
    width: 200,
    height: 50,
    borderRadius: 5,
    position: "absolute",
    right: 5,
  },

  modalItem: {
    fontSize: 18,
    marginVertical: 10,
  },

  swiperContainer: {
    marginTop: 10,
    flex: 0.4,
  },

  slideContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },

  swiperText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  sideBar: {
    backgroundColor: "#ffffff",
    zIndex: 20000,
    flex: 1,
    flexGrow: 1,
    width: "100%",
    height: "100%",

    profile: {
      backgroundColor: "#3668B7",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      padding: 20,
    },

    sideBarList: {
      padding: 20,
    },
  },

  cardContainer: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
  },

  btnContainer: {
    width: "45%",
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },

  cardBtnText: {
    width: "100%",
    height: "100%",
    color: "#4382DF",
    textAlign: "center",
    marginTop: 45,
  },
});

export default styles;
