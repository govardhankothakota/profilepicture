import React, { useEffect, useRef, useState } from "react";

function SignupForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleInputRef = useRef();
  let femaleInputRef = useRef();
  let selectStateInputRef = useRef();
  let profilePicInputRef = useRef();
  let paraSignUpRef = useRef();

  let imgSpanRef = useRef();

  let [profilePic, setProfilePic] = useState("./images/emptyImg.jpg");

  let selectedGender;
  let maritalStatus;
  let salutation;
  let languagesKnown = {
    tel: false,
    hin: false,
    eng: false,
    urd: false,
    kan: false,
    tam: false,
  };

  return (
    <div>
      <form>
        <h2 style={{ textAlign: "center" }}>Sign Up </h2>
        <div>
          <label>Name</label>
          <input placeHolder="First Name" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label></label>
          <input placeHolder="Last Name" ref={lastNameInputRef}></input>
        </div>

        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <label>Mobile No</label>
          <input type="tel" ></input>
        </div>
        <div>
          <label>Date Of Birth</label>
          <input type="date" className="DOBWidth" ></input>
        </div>

        <div>
          <label>Gender</label>
          <input
            className="radioSelect"
            type="radio"
            name="gender"
            ref={maleInputRef}
            onChange={() => {
              if (maleInputRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            className="radioSelect"
            type="radio"
            name="gender"
            ref={femaleInputRef}
            onChange={() => {
              if (femaleInputRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            className="radioSelect"
            type="radio"
            name="ms"
            onChange={(maritalEventObj) => {
              if (maritalEventObj.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            className="radioSelect"
            type="radio"
            name="ms"
            onChange={(maritalEventObj) => {
              if (maritalEventObj.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>

        <div>
          <label>Languages Known </label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.tel = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Telugu</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.hin = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Hindi</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.eng = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>English</label>
        </div>
        <div>
          <label></label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.urd = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Urdhu</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.sans = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Kannada</label>
          <input
            className="checkBoxSelect"
            type="checkbox"
            onChange={(languageEventObj) => {
              languagesKnown.tam = languageEventObj.target.checked;
            }}
          ></input>
          <label style={{ width: "auto" }}>Tamil</label>
        </div>
        <div>
          <label>Address</label>
          <input placeHolder="House No"></input>
        </div>
        <div>
          <label></label>
          <input placeHolder="Street"></input>
        </div>
        <div>
          <label></label>
          <input placeHolder="City"></input>
        </div>

        <div>
          <label>State </label>
          <select ref={selectStateInputRef} className="stateWidth">
            <option>select state</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="ACP">Arunachal Pradesh</option>
            <option value="ASM">Assam</option>
            <option value="BH">Bihar</option>
            <option value="CHG">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="GR">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="MGL">Meghalaya</option>
            <option value="MZR">Mizoram</option>
            <option value="NG">Nagaland</option>
            <option value="OD">Odisha</option>
            <option value="PJ">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TS">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UK">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
        </div>

        <div>
          <label>Select Image</label>
          <input
            type="file"
            accept="image/*"
            ref={profilePicInputRef}
            onChange={(picEventObj) => {
              console.log(picEventObj);
              if (picEventObj.target.files[0].size < 2097152) {
                let selectedImagePath = URL.createObjectURL(
                  picEventObj.target.files[0]
                );
                setProfilePic(selectedImagePath);
                imgSpanRef.current.innerHTML = `image is accepted`;
                imgSpanRef.current.style.color = "green";
              } else {
                imgSpanRef.current.innerHTML = `image size is too big`;
                imgSpanRef.current.style.color = "red";
              }
            }}
          ></input>
        </div>
        <div>
          <label></label>
          <img className="picture" src={profilePic}></img>
          <br></br>
          <span className="imageSpan" ref={imgSpanRef}>
            choose file below 2Mb
          </span>
        </div>

        <div className="signUpButton">
          <button
            type="button"
            onClick={() => {
              console.log(languagesKnown);

              // if(selectedGender === "male"){
              //    salutation = "Mr."
              // }
              //  if(selectedGender === "female"){
              //     if(maritalStatus === "married")
              //      salutation = "Mrs."
              //  }else{
              //     salutation = "Miss."
              //  }

              //   paraSignUpRef.current.innerHTML = `${salutation} ${
              //       firstNameInputRef.current.value
              //     } ${lastNameInputRef.current.value}
              //        from ${selectStateInputRef.current.value},<br>knows 
              //        ${languagesKnown.tel == true ? "Telugu" : ""},
              //        ${languagesKnown.hin == true ? "Hindi" : ""},
              //        ${languagesKnown.eng == true ? "English" : ""},
              //        ${languagesKnown.urd == true ? "Urdhu" : ""},
              //        ${languagesKnown.sans == true ? "Kannada" : ""},
              //        ${languagesKnown.tam == true ? "Tamil" : ""},
              //        <br> your account has been created successfully.`;

            

              salutation = "";
              if (selectedGender == "male") {
                salutation = "Mr.";
              } else {
                if (maritalStatus == "single") {
                  salutation = "Miss.";
                } else {
                  salutation = "Mrs.";
                }
              }
              paraSignUpRef.current.innerHTML = `${salutation} ${
                firstNameInputRef.current.value
              } ${lastNameInputRef.current.value}
                 from ${selectStateInputRef.current.value},<br>knows 
                 ${languagesKnown.tel == true ? "Telugu" : ""},
                 ${languagesKnown.hin == true ? "Hindi" : ""},
                 ${languagesKnown.eng == true ? "English" : ""},
                 ${languagesKnown.urd == true ? "Urdhu" : ""},
                 ${languagesKnown.kan == true ? "Kannada" : ""},
                 ${languagesKnown.tam == true ? "Tamil" : ""},
                 <br> your account has been created successfully.`;
            }}
          >
            Signup
          </button>
        </div>
        <div className="paragraph">
          <p ref={paraSignUpRef}></p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
