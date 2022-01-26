module.exports = function dateFilterShorthand(value) {
  const dateObject = new Date(value)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`
};
