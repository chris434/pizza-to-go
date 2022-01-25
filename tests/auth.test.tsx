import {
  ageVerification,
  chartersOnly,
  emailVerification,
  phoneVerification,
  passwordVerification,
} from "../utils/auth-util";
//name

test("return error message if sting contains none charters", () => {
  expect(chartersOnly("hello44", "fist name")).toBe(
    "fist name must only be letters"
  );
});

//age

test("return message if date is under 18 years go", () => {
  expect(ageVerification("2020-02-02")).toBe("must be 18 or over");
});

//email

test("return message if email dose not match email format", () => {
  expect(emailVerification("chir89gmail")).toBe("email not valid");
});

//phone number

test("return message if number contains none digest", () => {
  expect(phoneVerification("55568r")).toBe("phone number not valid");
});

//password

passwordVerification().map((error: any) => {
  test("each password error should be logged", () => {
    const e = !error.patten.test("pass") ? error.message : "";
    expect(e).toBe(error.message);
  });
});
