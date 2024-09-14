import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import ResendCodeTimer from '../RegisterationRestLink/ResendCodeTimer'
const CodeInput = ({ onSubmitCode, resendCode }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    let timer;
    if (isResendDisabled) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsResendDisabled(false);
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isResendDisabled]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(0, 1); // Keep only one character
    setCode(newCode);

    if (index < 3 && e.target.value) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    if (newCode.every((c) => c)) {
      onSubmitCode(newCode.join(""));
    }
  };

  const handleResend = () => {
    resendCode();
    setIsResendDisabled(true);
  };

  return (
    <Box sx={{ mb: 10}}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {code.map((value, index) => (
          <TextField
            key={index}
            id={`code-input-${index}`}
            value={value}
            onChange={(e) => handleChange(e, index)}
            inputProps={{ maxLength: 1 }}
            sx={{ width: 50, mx: 1, textAlign: "center" }}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <ResendCodeTimer
          questionText=" لم تستلم الرّمز؟"
          linkText="أعد إرسال الرّمز" 
          linkUrl="/resend-code"
          timerDuration={20} // 20 seconds
        />
      </Box>
    </Box>
  );
};

export default CodeInput;
