export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const arabicMonths = [
    "كانون الثّاني",
    "شباط",
    "آذار",
    "نيسان",
    "أيّار",
    "حزيران",
    "تموز",
    "آب",
    "أيلول",
    "تشرين الأوّل",
    "تشرين الثّاني",
    "كانون الأوّل",
  ];
  const day = date.getDate();
  const month = arabicMonths[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
