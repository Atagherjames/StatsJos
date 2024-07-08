export const reducer = (state, action) => {
  switch (action.type) {
    // CBT EXAMS
    case "SELECTED_ANSWERS":
      {
        return { ...state, cbtSelectedAnswers: action.payload };
      }
      break;

    case "SUBMIT_CBT_EXAM":
      {
        return { ...state, submitCbtExam: action.payload };
      }
      break;

    case "CONFIRMED_SUBMIT":
      {
        return { ...state, confirmedSubmit: action.payload };
      }
      break;

    case "CBT_EXAM_SUBMITTED":
      {
        return { ...state, cbtExamSubmitted: action.payload };
      }
      break;

    case "ELAPSED_TIME": {
      return { ...state, elapsedTime: action.payload };
    }

    case "CBT_SELECTED_COURSE":
      {
        return { ...state, cbtSelectedCourse: action.payload };
      }
      break;

    case "CBT_REVIEW_MODE":
      {
        return { ...state, reviewMode: action.payload };
      }
      break;

    case "INITIAL_MINUTES":
      {
        return { ...state, initialMinutes: action.payload };
      }
      break;

    // Login & Authentication
    case "LOGIN_USER":
      return { ...state, isLoggedIn: true, token: action.payload };
      break;

    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, token: null, currentUser: {} };
      break;

    default:
      return state;
  }
};
