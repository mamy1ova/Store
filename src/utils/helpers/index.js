const showErrors = (errors) => {
  let errorMessage = null;

  if (Object.keys(errors).length > 1) {
    errorMessage = "Please fill in all fields!";
  } else if (errors?.username) {
    errorMessage = errors?.name;
  } else if (errors?.password) {
    errorMessage = errors?.password;
  }

  return errorMessage;
};

export { showErrors };
