import JustValidate from "just-validate";

export const formValidator = () => {
  const validation = new JustValidate(".get-started__form");

  validation
    .addField("#firstName", [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 30,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Enter a name!",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Email is required",
      },
      {
        rule: "email",
        errorMessage: "Email is invalid!",
      },
    ]);
};
