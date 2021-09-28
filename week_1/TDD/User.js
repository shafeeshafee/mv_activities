// username
// password
// email
// age
// user's favorite programs

class User {
  constructor(username, password, email, age, favoritePrograms) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.age = age;
    this.favoritePrograms = [];
  }
  // checkAge: make sure above 18, below 75 (bool)
  // addProgram: add program to the favoritePrograms array

  checkAge() {
    let { age } = this;

    return age >= 18 && age < 75;
  }

  addTech(newTech) {
    let { favoritePrograms } = this;

    favoritePrograms.push(newTech);

    return favoritePrograms;
  }

  verifyGmail() {
    let { email } = this;

    if (email.includes("@gmail.com")) {
      return true;
    } else {
      return false;
    }
  }
}

const shaf = new User("shaf123", "password123", "shaf@gmail.com", 30, [
  "Steam",
  "Discord",
  "Spotify",
]);

console.log(shaf.addTech("Notion").length);
console.log("gmail", shaf.verifyGmail());

module.exports = User;
