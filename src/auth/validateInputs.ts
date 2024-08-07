export const validateInputs = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  console.log("username, password", { username, password });
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    // !/^[a-z0-9_-]+$/.test(username) ||  // this is giving an error with 'something' for the password
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      success: false,
      message: "Invalid Credentials",
    };
  }
  return { success: true, message: "" };
};

// import { string } from "astro/zod";

// export const validateInputs = ({
//   username,
//   password,
// }: {
//   username: string;
//   password: string;
// }) => {
//   // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
//   // keep in mind some database (e.g. mysql) are case insensitive
//   if (
//     typeof username !== "string" ||
//     username.length < 3 ||
//     username.length > 31 ||
//     !/^[a-z0-9_-]+$/.test(username) ||
//     typeof password !== "string" ||
//     password.length < 6 ||
//     password.length > 255
//   ) {
//     return {
//       success: false,
//       message: "Invalid Credentials",
//     };
//   }

//   return { succes: true, message: "" };
// };
