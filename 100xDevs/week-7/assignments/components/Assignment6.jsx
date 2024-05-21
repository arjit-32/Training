import { useRef, useState } from "react";

const Assignment6 = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [validOTP, setValidOTP] = useState(null); // State to store the valid OTP
  const inputRef = useRef();
  const otpRef = [useRef(), useRef(), useRef(), useRef()];

  const buttonHandler = (e) => {
    if (!otpSent) {
      let phone_no = inputRef.current.value;

      // Used a Mock API to send payload, it returns OTP for now (but would return success in reality and we might handle OTP correctness in backend)
      fetch("https://run.mocky.io/v3/dce309e7-ca58-4c12-aab6-3184f268332f", {
        method: "POST",
        body: JSON.stringify({
          mobile_number: phone_no,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setValidOTP(res.data[0].message); // Set the valid OTP
          setOtpSent(true);
          console.log("OTP sent: ", res.data[0].message);
        });
    } else {
      const enteredOtp = otpRef.map((ref) => ref.current.value).join('');
      if (enteredOtp === validOTP) {
        alert("OTP is valid!");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col content-center items-center">
      <h1 className="text-3xl mb-8">Login Via OTP</h1>
      {!otpSent ? <PhoneInput inputRef={inputRef} /> : <OtpInput otpRef={otpRef} />}
      <button
        onClick={buttonHandler}
        className="border mt-4 p-2 rounded-lg bg-stone-700 text-zinc-200">
        {!otpSent ? "Send OTP" : "Validate"}
      </button>
    </div>
  );
};

const PhoneInput = ({ inputRef }) => {
  return (
    <input
      ref={inputRef}
      id="phone_no"
      type="text"
      className="border p-3 rounded"
      placeholder="Enter your mobile number"
    />
  );
};

const OtpInput = ({ otpRef }) => {
  const handleChange = (e, index) => {
    const nextSibling = otpRef[index + 1];
    if (nextSibling && e.target.value.length === e.target.maxLength) {
      nextSibling.current.focus();
    }
  };

  return (
    <div className="flex flex-row">
      {otpRef.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          className="rounded border w-20 mr-2 text-center"
          type="text"
          maxLength="1"
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Assignment6;
