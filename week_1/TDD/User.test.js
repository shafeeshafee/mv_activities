// test make sure that datatypes are correct
// test to make sure that methods are returning correct values
const User = require("./User");

// write tests in suites -> each suite should test for certain grouping

describe("User Class Datatypes", () => {
  // username is of type string
  test("Username should be of type string", () => {
    // create an instance of the class
    const testUsername = new User(
      "openCohort123",
      "thisIsAPassword",
      "cohort@gmail.com",
      30
    );
    // expect ->
    expect(typeof testUsername.username).toBe("string");
  });
  // password is of type string
  test("Password should be of type string", () => {
    // create an instance of the class
    const testPassword = new User(
      "openCohort123",
      "thisIsAPassword",
      "cohort@gmail.com",
      30
    );
    // expect ->
    expect(typeof testPassword.password).toBe("string");
  });
  // email
  test("Email should be of type string", () => {
    // create an instance of the class
    const testEmail = new User(
      "openCohort123",
      "thisIsAPassword",
      "cohort@gmail.com",
      30
    );
    // expect ->
    expect(typeof testEmail.email).toBe("string");
  });
  // age
  test("Age should be of type number", () => {
    // create an instance of the class
    const testAge = new User(
      "openCohort123",
      "thisIsAPassword",
      "cohort@gmail.com",
      30
    );
    // expect ->
    expect(typeof testAge.age).toBe("number");
  });
  // favorite programs
  test("Favorite programs should be of type array", () => {
    // create an instance of the class
    const testTech = new User(
      "testUser7",
      "thisIsAPassword",
      "cohort@gmail.com",
      28
    );
    // expect ->
    expect(Array.isArray(testTech["favoritePrograms"])).toBe(true);
  });
});

describe("User Method Values", () => {
  test("Age should be above 18 and less than 75", () => {
    const Person = new User(
      "testUser4",
      "thisIsAPassword",
      "cohort@gmail.com",
      20
    );
    const Person2 = new User(
      "testUser5",
      "thisIsAPassword",
      "cohort@gmail.com",
      900
    );

    expect(Person.checkAge()).toBe(true);
    expect(Person2.checkAge()).toBe(false);
  });

  test("See if there was an entry added to addTech", () => {
    const personAddTechMethod = new User(
      "testUser6",
      "thisIsAPassword",
      "cohort@gmail.com",
      20
    );

    personAddTechMethod.addTech("Julia");
    personAddTechMethod.addTech("Python");
    personAddTechMethod.addTech("Java");

    expect(personAddTechMethod["favoritePrograms"].length).toBe(3);
  });

  test("email should be validated with @gmail.com at the end", () => {
    const personEmailMethod = new User(
      "testUser6",
      "thisIsAPassword",
      "cohort@gmail.com",
      20
    );

    expect(personEmailMethod.verifyGmail()).toBe(true);
  });
});
