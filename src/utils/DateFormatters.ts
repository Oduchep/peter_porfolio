export const getYearsOfExperience = (
  startDate: Date = new Date('2020-01-01')
): string => {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();

  const monthsDiff =
    now.getMonth() -
    startDate.getMonth() +
    (now.getFullYear() - startDate.getFullYear()) * 12;

  // Normalize total months
  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  // Adjust if current day is before start day
  const hasNotReachedMonthDay = now.getDate() < startDate.getDate();
  const adjustedMonths = hasNotReachedMonthDay ? totalMonths - 1 : totalMonths;

  years = Math.floor(adjustedMonths / 12);
  const remainingMonths = adjustedMonths % 12;

  if (years <= 0) return '0';

  // Add "+" only if 6+ extra months
  const hasHalfYear = remainingMonths >= 6;

  return hasHalfYear ? `${years}+` : `${years}`;
};
