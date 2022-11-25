import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import useInput from "../../hooks/use-input";
import "./login.css";

export const Login = (props) => {
  const userNameCheck = /^[가-힣]{3,6}$/;
  const emailCheck = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
  const addressCheck = /^[가-힣0-9- ]{8,40}$/;
  const phoneNumberCheck = /^[0-9]{10,11}$/;
  const passwordCheck =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;

  const isName = (value) => userNameCheck.test(value);
  const isEmail = (value) => emailCheck.test(value) && !test1.includes(value);
  const isAddress = (value) => addressCheck.test(value);
  const isPhone = (value) => phoneNumberCheck.test(value);
  const isPassword = (value) => passwordCheck.test(value);
  const isPasswordCheck = (value) => passwordValue === value;
  const [test1, settest1] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8001/auth/join", {})
      .then(async (result) => {
        const data = result.data.data;
        return data;
      })
      .then(async (result) => {
        const emailData = [];
        for (var i = 0; i < result.length; i++) {
          emailData.push(result[i].email);
        }
        console.log();
        console.log(emailData, test1);
        return settest1(emailData);
      });
  }, []);
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: restname,
    hasError: nameHasError,
  } = useInput(isName);
  const {
    value: addressValue,
    isValid: addressIsValid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    hasError: addressHasError,
    reset: restaddress,
  } = useInput(isAddress);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: restemail,
  } = useInput(isEmail);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: restphone,
  } = useInput(isPhone);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: restpassword,
  } = useInput(isPassword);
  const {
    value: passwordCheckValue,
    isValid: passwordCheckIsValid,
    hasError: passwordCheckHasError,
    valueChangeHandler: passwordCheckChangeHandler,
    inputBlurHandler: passwordCheckBlurHandler,
    reset: restpasswordCheck,
  } = useInput(isPasswordCheck);
  let formIsValid = false;
  if (
    nameIsValid &&
    addressIsValid &&
    emailIsValid & phoneIsValid &&
    passwordIsValid &&
    passwordCheckIsValid
  ) {
    formIsValid = true;
  }
  const nameClasses = nameHasError ? "form-control" : "form-control valid";
  const addressClasses = addressHasError
    ? "form-control"
    : "form-control valid";
  const emailClasses = emailHasError ? "form-control" : "form-control valid";
  const phoneClasses = phoneHasError ? "form-control" : "form-control valid";
  const passwordClasses = passwordHasError
    ? "form-control"
    : "form-control valid";
  const passwordCheckClasses = passwordCheckHasError
    ? "form-control"
    : "form-control valid";

  const submitHandler = (event) => {
    const data = {
      name: nameValue,
      address: addressValue,
      password: passwordValue,
      telephone: phoneValue,
      email: emailValue,
    };
    console.log(test1);
    // axios
    //   .post("http://localhost:8001/auth/join", {
    //     data,
    //   })
    //   .then((res) => res.data);
    console.log(test1);
    event.preventDefault();

    if (!formIsValid) {
    }

    restname();
    restaddress();
    restemail();
    restphone();
    restpassword();
    restpasswordCheck();
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={nameClasses}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
              placeholder="홍길동"
            />
            {nameHasError && (
              <p className="error-text"> 이름을 똑바로 입력해주세요.</p>
            )}
          </div>
          <div className={passwordClasses}>
            <label htmlFor="name">비밀번호</label>
            <input
              type="password"
              id="name"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text"> 정확한 비밀번호를 입력해주세요!</p>
            )}
          </div>
          <div className={passwordCheckClasses}>
            <label htmlFor="name">비밀번호 확인</label>
            <input
              type="password"
              id="name"
              value={passwordCheckValue}
              onChange={passwordCheckChangeHandler}
              onBlur={passwordCheckBlurHandler}
            />
            {passwordCheckHasError && (
              <p className="error-text"> 비밀번호가 다릅니다!</p>
            )}
          </div>
          <div className={addressClasses}>
            <label htmlFor="name">주소</label>
            <input
              type="text"
              id="name"
              onChange={addressChangeHandler}
              value={addressValue}
              onBlur={addressBlurHandler}
            />
            {addressHasError && (
              <p className="error-text"> 주소를 똑바로 입력해주세요!</p>
            )}
          </div>

          <div className={emailClasses}>
            <label htmlFor="name">이메일</label>
            <input
              type="text"
              id="name"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text"> 이메일을 확인해주세요!.</p>
            )}
          </div>
          <div className={phoneClasses}>
            <label htmlFor="name">휴대전화(-제외)</label>
            <input
              type="text"
              id="name"
              value={phoneValue}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneHasError && (
              <p className="error-text"> 정확한 휴대전화를 입력해주세요.</p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button disabled={!formIsValid}>회원가입</button>
        </div>
      </form>
      <Link to="/">
        <button>to main</button>
      </Link>
    </div>
  );
};

export default Login;
