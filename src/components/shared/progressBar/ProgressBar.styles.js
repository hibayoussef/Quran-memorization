export const containerStyle = {
  width: "100%",
  paddingTop: 2,
};

export const progressBarStyle = {
  height: 8,
  borderRadius: 5,
  marginBottom: 1,
  backgroundColor: "background.progressBar", // Background color of the progress bar
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "text.secondary",
  },
};

export const textContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 1,
};

export const leftTextStyle = {
  fontSize: "14px",
  color: "card.secondary",
};

export const rightTextStyle = {
  fontSize: "14px",
  color: "text.percent",
};
