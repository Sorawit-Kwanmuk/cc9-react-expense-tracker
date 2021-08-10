// console.log(
//   new Intl.DateTimeFormat('en-US', {
//     // timeStyle: 'full',
//     // dateStyle: 'full',
//     timeStyle: 'short',
//     dateStyle: 'short',
//     timeZone: 'America/New_York',
//   }).format(new Date())
// );
// console.log(
//   new Intl.DateTimeFormat('en-US', {
//     month: 'short',
//     year: '2-digit',
//   }).format(new Date())
// );
const formatShotMonthShortYear = date => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: '2-digit',
  }).format(date);
};

export { formatShotMonthShortYear };
