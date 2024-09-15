const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const about = {
  container: {
    marginTop: "20px",
  },
  containerGrid: {
    ...flexCenter, // Reuse flex styles
  },
  title: {
    color: "#2C3971",
    fontSize: "40px",
    marginBottom: "15px",
  },
  subTitle: {
    color: "#19213D",
    fontSize: "24px",
    fontWeight: "400", // Fixed typo from weight to fontWeight
  },
  video: {
    ...flexCenter, // Reuse flex styles
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: "400px",
    borderRadius: "22px",
  },
};
