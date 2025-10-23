function simplePasswordValidator(password) {
  // Trim spaces
  password = password.trim();
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const isLength = password.length >= 8;

  // Combine the conditions
  return hasLowercase && hasUppercase && hasNumber && isLength;
}

console.log(simplePasswordValidator("Sujoy143")); // true
console.log(simplePasswordValidator("sujoy143")); // false (no uppercase)
console.log(simplePasswordValidator("SUJOY143")); // false (no lowercase)
console.log(simplePasswordValidator("Sujoy14")); // false (less than 8 characters)
