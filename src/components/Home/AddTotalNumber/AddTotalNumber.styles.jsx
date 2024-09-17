const centerItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styles = {
  boxes: { marginTop: "50px" },
  title: {
    color: "#2C3971",
    fontSize: "40px",
    lineHeight: "76.23px",
  },
  // Form Number
  boxFormNumber: {
    width: {
      xs: "100%", // 100% width for extra small screens
      md: "441px", // Maintain 441px width for small screens and above
    },
    height: "490px",
    boxShadow: "0px 4px 4px 0px #00000026",
    position: "relative",
    pt: "70px",
  },
  boxTitleForm: {
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)", // This centers the box horizontally
    width: "409px",
    height: "67px",
    backgroundColor: "#2C3971",
    borderRadius: "8px",
    ...centerItem,
  },
  titleForm: {
    color: "#fff",
    fontSize: "24px",
    weight: 700,
    ...centerItem,
  },
  number: {
    fontSize: "16px",
    lineHeight: "30.49px",
    weight: 700,
    color: "#2C3971",
  },
  stack: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  columnInput: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    fontSize: "16px",
    color: "#2C3971",
    weight: 400,
  },
  Input: {
    border: "1px solid #000",
    borderRadius: "8px",
    padding: "1px 16px 12px 1px",
    boxShadow: "0px 0px 4px 0px #2C397133",
    height: "Fixed (48px)",
  },
  // azkar
  boxImg: {
    position: "relative",
  },
  styleImg: {
    position: "absolute",
    right: "-70px",
    top: "0",
    width: "53px",
    height: "38px",
  },
  list: {
    textAlign: "right",
    color: "#19213D",
  },
  listItemText: {
    fontSize: "24px", // Larger font size applied here
    display: "list-item",
    weight: 400,
  },
};
