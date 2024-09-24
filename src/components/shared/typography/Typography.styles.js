export const containerBoxStyles = (containerStyles, gap) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: gap,
  flexWrap: "nowrap", // تأكد من أن العناصر تظل في نفس السطر
  overflow: "hidden", // منع تجاوز المحتوى خارج الحاوية
  ...containerStyles,
});

export const labelTypographyStyles = (labelStyles, fontWeight) => ({
  fontWeight: fontWeight || labelStyles.fontWeight || "bold", // استخدم fontWeight إذا تم تمريره أو القيمة الافتراضية
  whiteSpace: "nowrap", // منع التفاف النص الخاص بالتسمية
  direction: "rtl", // تأكد من ظهور النص باللغة العربية بشكل صحيح
  ...labelStyles,
  display: "flex",
  alignItems: "flex-start",
});

export const valueTypographyStyles = (valueStyles) => ({
  whiteSpace: "pre-wrap", // السماح بالتفاف النص في القيمة
  overflow: "hidden",
  textAlign: "start", // ضبط النص من اليسار إلى اليمين للقيمة
  direction: "rtl", // تأكد من اتجاه النص العربي
  ...valueStyles,
});
