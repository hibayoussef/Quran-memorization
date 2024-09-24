export const containerStyles = (containerCustomStyles) => ({
  display: "flex",
  alignItems: "center",
  gap: 1, // المسافة بين التقييم والنص
  width: "100%", // اجعل العرض كامل العرض المتاح
  ...containerCustomStyles,
});

export const labelStyles = (labelCustomStyles) => ({
  fontWeight: "bold",
  whiteSpace: "nowrap", // منع التفاف النص
  overflow: "hidden",
  textOverflow: "ellipsis", // إضافة ... عند تجاوز النص
  fontSize: "16px",
  direction: "rtl", // ضبط اتجاه النص العربي
  ...labelCustomStyles,
  color: "black",
});

export const ratingStyles = (ratingCustomStyles) => ({
  fontSize: "20px", // حجم أيقونات التقييم
  ...ratingCustomStyles,
  color: "black",
});
