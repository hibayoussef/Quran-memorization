export const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    marginTop: "30px",
  },
  leftSection: {
    flex: 1,
    backgroundColor: "#1a2e61", // Dark blue background
    color: "#fff",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  contactTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  contactDescription: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  contactInfo: {
    marginBottom: "30px",
    "& > p": {
      margin: "10px 0",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "flex-start",
    "& a": {
      marginRight: "15px",
      fontSize: "20px",
      color: "#fff",
      textDecoration: "none",
    },
  },
  rightSection: {
    flex: 1.5,
    backgroundColor: "#fff",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  textField: {
    marginBottom: "20px",
    "& .MuiInputLabel-root": {
      right: "auto",
      left: "auto", // RTL support
    },
  },
  submitButton: {
    backgroundColor: "#ffba00", // Yellow button
    fontSize: "16px",
    padding: "12px",
    "&:hover": {
      backgroundColor: "#e0a800",
    },
  },
};
