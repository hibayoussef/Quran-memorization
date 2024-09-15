const commonStyles = {
  centered: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  fontWeightBold: {
    fontWeight: 700,
  },
};

export const styles = {
  listItem: {
    display: "flex",
    justifyContent: "space-evenly",
    overflowY: "visible",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    lineHeight: "76.23px",
    color: "#2C3971",
    marginTop: "20px",
    ...commonStyles.fontWeightBold,
  },
  boxImg: {
    position: "relative",
  },
  icon: {
    top: "50%",
    ...commonStyles.centered,
    transform: "translate(-50%, -100%)",
  },
  titleImg: {
    top: "60%",
    width: "100%",
    textAlign: "center",
    fontSize: "30px",
    lineHeight: "45.74px",
    color: "#fff",
    ...commonStyles.centered,
    ...commonStyles.fontWeightBold,
  },
};
