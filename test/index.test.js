test("If waiting list data and user input data are the same compareData function should return true", () => {
  const actual = compareData("+440123456789", "example@example.com");
  const expected = true;
  equal(actual, expected);
});

test("If waiting list data and user input data are not the same compareData function should return false", () => {
  const actual = compareData("+440123456115", "example@false.com");
  const expected = false;
  equal(actual, expected);
});

test("If mobile numbers are not the same, but emails are the same, compareData function should still return true", () => {
  const actual = compareData("+440123456115", "example@example.com");
  const expected = true;
  equal(actual, expected);
});

test("If mobile numbers are the same, but emails are not the same, compareData function should still return true", () => {
  const actual = compareData("+440123456789", "example@false.com");
  const expected = true;
  equal(actual, expected);
});

test("If mobile number input pattern is incorrect compareData function should return false", () => {
  const actual = compareData("string", "example@false.com");
  const expected = false;
  equal(actual, expected);
});
