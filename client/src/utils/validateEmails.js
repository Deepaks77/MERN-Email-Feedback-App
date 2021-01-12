const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validateEmails = (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);
  if (emails.endsWith(",")) {
    return `Emails should not end with ,`;
  }
  if (invalidEmails.length) {
    return `These emails are invalid : ${invalidEmails}`;
  }
  return;
};

export default validateEmails;
