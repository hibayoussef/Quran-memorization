// styles.js
export const getButtonStyles = ({ noBackground, customStyles }) => ({
    ...(noBackground
      ? {
          backgroundColor: "transparent",
          color: "secondary.main",
          border: "1px solid",
          borderColor: "secondary.main",
        }
      : { backgroundColor: "secondary.main", color: "#fff" }),
    ...customStyles, // Apply custom styles if any
  });
  