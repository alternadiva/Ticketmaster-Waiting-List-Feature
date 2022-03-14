test("Test compareData function", () => {
  const testWaitingListObject = [
    {
      mobile: "+440123456789",
      email: "example@example.com",
    },
  ];
  test("If waiting list data and user input data are the same function should return true", () => {
    const actual = compareData(
      testWaitingListObject,
      "+440123456789",
      "example@example.com"
    );
    const expected = true;
    equal(actual, expected);
  });

  test("If waiting list data and user input data are not the same function should return false", () => {
    const actual = compareData(
      testWaitingListObject,
      "+440123456115",
      "example@false.com"
    );
    const expected = false;
    equal(actual, expected);
  });

  test("If mobile numbers are not the same, but emails are the same, function should still return true", () => {
    const actual = compareData(
      testWaitingListObject,
      "+440123456115",
      "example@example.com"
    );
    const expected = true;
    equal(actual, expected);
  });

  test("If mobile numbers are the same, but emails are not the same, function should still return true", () => {
    const actual = compareData(
      testWaitingListObject,
      "+440123456789",
      "example@false.com"
    );
    const expected = true;
    equal(actual, expected);
  });

  test("If mobile number input pattern is incorrect function should return false", () => {
    const actual = compareData(
      testWaitingListObject,
      "string",
      "example@false.com"
    );
    const expected = false;
    equal(actual, expected);
  });
});
