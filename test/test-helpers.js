function equal(actual, expected) {
  if (actual === expected) {
    console.info(`Pass: Expected ${expected} and received ${actual}`);
  } else {
    console.error(`Fail: Expected ${expected} but received ${actual} instead`);
  }
}

function notEqual(actual, expected) {
  if (actual !== expected) {
    console.info(`Pass: ${expected} is different to ${actual}`);
  } else {
    console.error(`Fail: ${expected} is the same as ${actual}`);
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
