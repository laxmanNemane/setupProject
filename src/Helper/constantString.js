import moment from "moment";

const STRING = {
  // Website description messages
  Web_slogan: "add your app slogan",
  content: "brief description your app",

  //   Auth message for Login and signup Page
  already_have_an_account: "Already have an account?", //ask to create account
  login: "Login",
  sign_up: "Sign Up",
  sign_up_detail: "Please enter your details below to continue", // signup page message
  i_agree_to_all: "I agree to all ", // agree confirmation message
  term_condition: "Terms & Privacy Policy", // agree confirmation message
  or: "OR",
  log_in: "Login",
  always_logged_in: "Always Logged-in",
  forgot_password: "Forgot Password?",
  dont_have_an_account: "Don’t have an account?",
  register: " Register",
  forgotPassword: "Forgot \nPassword?",
  forgot_password_content: "No worries, we’ll send you reset\ninstructions.",
  send: "Send",
  verify_password: "Verify \nPassword",
  verification_password:
    "Enter the verification code we just sent you on your email address.",
  verify: "Verify",
  dont_receive_code: "Don’t receive a code?",
  resend: " Resend",
  reset_password: "Reset \nPassword",
  reset_password_content:
    "Your new password must be different to previously used password.",
  submit: "Submit",
  password_reset_successfully: "Your password has been reset\nsuccessfully!!",

  // place holders
  fullName: "Enter your name",
  first_name: "First Name",
  last_name: "Last Name",
  email_address: "Email Address",
  gender: "Gender",
  age: "Age",
  password: "Password",
  confirm_password: "Confirm Password",
  write_something: "Write something...",
  enter_name: "Enter Name",

  // Menu tab's Name
  home: "Home",
  activity: "Activity",
  chat: "Chat",

  //  all static varible set here and access wherever you want
};

export { STRING };

export const getWeekData = () => {
  var currentDate = moment();

  var weekStart = currentDate.clone().startOf("isoWeek");

  var days = [];

  for (var i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, "days").format("YYYY-MM-DD"));
  }

  return days;
};
