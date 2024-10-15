// import JustValidate from "just-validate";
// import intlTelInput from "intl-tel-input";
// import "intl-tel-input/build/css/intlTelInput.css";

// export const useTestInputMask = () => {
//   const phoneInput = document.querySelector("#phone");

//   const iti = intlTelInput(phoneInput, {
//     separateDialCode: true,
//     onlyCountries: ["us", "gb", "ru"],
//     initialCountry: "auto",
//     strictMode: true,
//     geoIpLookup: (callback) => {
//       fetch("https://ipapi.co/json")
//         .then((res) => res.json())
//         .then((data) => callback(data.country_code))
//         .catch(() => callback("us"));
//     },
//     utilsScript:
//       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/22.0.2/js/utils.js",
//   });

//   const validation = new JustValidate(".get-started__form");

//   validation
//     .addField("#firstName", [
//       {
//         rule: "minLength",
//         value: 3,
//         errorMessage: "Must be longer than 3 characters",
//       },
//       {
//         rule: "maxLength",
//         value: 30,
//         errorMessage: "Maximum 30 characters",
//       },
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Enter a First name!",
//       },
//     ])
//     .addField("#lastName", [
//       {
//         rule: "minLength",
//         value: 3,
//         errorMessage: "Must be longer than 3 characters",
//       },
//       {
//         rule: "maxLength",
//         value: 30,
//         errorMessage: "Maximum 30 characters",
//       },
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Enter a Last name!",
//       },
//     ])
//     .addField("#email", [
//       {
//         rule: "required",
//         errorMessage: "Email is required",
//       },
//       {
//         rule: "email",
//         errorMessage: "Email is invalid!",
//       },
//     ])
//     .addField("#phone", [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Phone is required",
//       },
//       {
//         rule: "function",
//         validator: function () {
//           return iti.isValidNumber() && iti.getNumber().length >= 10;
//         },
//         errorMessage: "Enter the correct phone number",
//       },
//     ])
//     .addField("#message", [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Enter a name!",
//       },
//       {
//         rule: "minLength",
//         value: 5,
//         errorMessage: "Must be longer than 5 characters",
//       },
//     ]);
// };
