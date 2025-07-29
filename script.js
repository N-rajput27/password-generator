function generatePassword(){
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (charset.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
   const password = document.getElementById("password");
   if(!password.value) {
       alert("Please generate a password first.");
       return;
   }
   navigator.clipboard.writeText(password.value)
       .then(() => {
           alert("Password copied to clipboard!");
       })
       .catch(err => {
           console.error("Failed to copy password: ", err);
           alert("Failed to copy password.");
       });
}