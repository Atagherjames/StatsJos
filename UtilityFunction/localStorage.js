import * as CryptoJS from "crypto-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "./environment";

const encryptionKey = `${environment.key}`;

const encryptData = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
};

const decryptData = (encryptedData, key) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
  const decryptedvalue = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedvalue;
};

export const localstorageSetitem = async (storagekey, dataToEncrypt) => {
  const encryptedData = encryptData(dataToEncrypt, encryptionKey);

  try {
    await AsyncStorage.setItem(storagekey, encryptedData);
  } catch (error) {
    console.error("Failed to store in local storage", error);
  }
};

export const localstorageGetitem = async (storagekey) => {
  try {
    const retrievedData = await AsyncStorage.getItem(storagekey);
    if (retrievedData !== null) {
      const decryptedData = decryptData(retrievedData, encryptionKey);
      return decryptedData;
    }
    return retrievedData;
  } catch (error) {
    console.log("there was an error, pleas try again", error);
  }
};

export const localstorageRemoveItem = async (storagekey) => {
  try {
    await AsyncStorage.removeItem(storagekey);
    console.log(`Item with key ${storagekey} removed from local storage`);
  } catch (error) {
    console.error("Failed to remove item from local storage", error);
  }
};
