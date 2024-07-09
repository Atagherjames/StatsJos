import SInfo from "react-native-sensitive-info";

// Function to set data
const setSensitiveInfo = async (storageKey, value) => {
  try {
    await SInfo.setItem(storageKey, JSON.stringify(value), {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    return true;
  } catch (error) {
    console.error("Error setting data:", error);
    return false;
  }
};

// Function to get data
const getSensitiveInfo = async (storageKey) => {
  try {
    const value = await SInfo.getItem(key, {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    return value;
  } catch (error) {
    console.error("Error getting data:", error);
    return null;
  }
};

// Function to delete data
const deleteSensitiveInfo = async (storageKey) => {
  try {
    await SInfo.deleteItem(storageKey, {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    return true;
  } catch (error) {
    console.error("Error deleting data:", error);
    return false;
  }
};

export { setSensitiveInfo, getSensitiveInfo, deleteSensitiveInfo };
