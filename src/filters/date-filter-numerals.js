module.exports = function dateFilterNumerals(value) {
  const dateObject = new Date(value)
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const days   = ['01', '02']
  return `${dateObject.getFullYear()}.${months[dateObject.getMonth()]}.${('0' + [dateObject.getDate()]).slice(-2)}`
};
