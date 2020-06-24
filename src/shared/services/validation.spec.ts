import { isValidSiteURL } from "./validation";

describe.each([
  ["", false],
  ["mitz.com", false],
  ["ftp://mitz.com", false],
  ["http://mitz.com", true],
  ["https://mitz.com", true],
  ["https://chrome.google.com/webstore", false],
])("Test isValidSiteURL", (input, expected) => {
  test(`should return ${expected} with ${input}`, () => {
    expect(isValidSiteURL(input)).toBe(expected);
  });
});
