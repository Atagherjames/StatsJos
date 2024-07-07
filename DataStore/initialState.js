import { localstorageGetitem } from "../UtilityFunction/localStorage";
export const initialState = {
  // cbt exam state initials
  cbtSelectedAnswers: {},
  submitCbtExam: false,
  confirmedSubmit: false,
  initialMinutes: 0,
  elapsedTime: 0,
  cbtSelectedCourse: "",
  reviewMode: false,

  // Login & Authentication
  // isLoggedIn: !!localstorageGetitem("token"),
  // token: localstorageGetitem("token"),
  // currentUser: {},

  isLoggedIn: false,
  token: localstorageGetitem("token"),
  currentUser: {},
};
