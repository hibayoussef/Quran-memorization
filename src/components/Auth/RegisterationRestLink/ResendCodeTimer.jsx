import { Box, Divider, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const ResendCodeTimer = ({
  showDivider = true,
  questionText,
  linkText,
  initialTimerDuration = 20, // Default countdown duration (in seconds)
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(0); // Start with 0 (no countdown initially)
  const [isLinkDisabled, setIsLinkDisabled] = useState(false); // Initially, the link is not disabled

  // Countdown timer logic
  useEffect(() => {
    if (secondsRemaining > 0) {
      const interval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsLinkDisabled(false); // Enable the link when the timer ends
    }
  }, [secondsRemaining]);

  const handleResendCode = () => {
    setSecondsRemaining(initialTimerDuration);
    setIsLinkDisabled(true); // Disable the link once clicked
  };

  // Function to format the time into MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      {/* {showDivider && <Divider sx={{ width: "100%", my: 3 }} />} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography sx={{ color: "text.secondary", ml: 1 }}>{questionText}</Typography>
        <Typography
          onClick={() => {
            if (!isLinkDisabled) {
              handleResendCode(); // Start the timer when the link is clicked
            }
          }}
          sx={{
            color: isLinkDisabled ? "grey" : "headerText.main",
            textDecoration: isLinkDisabled ? "none" : "underline",
            cursor: isLinkDisabled ? "default" : "pointer",
            ml: 1,
          }}
        >
          {isLinkDisabled
            ? `إعادة المحاولة بعد ${formatTime(secondsRemaining)}`
            : linkText}
        </Typography>
      </Box>
    </>
  );
};

export default ResendCodeTimer;
