// Implement some helpers functions for dealing with dates
// Test is the variable is a valid Date
const isValidDate = date => (date instanceof Date) && !isNaN(date.getDate());
// Build JSON from date
const buildJSON = date => {
  // Returns error message if date is invalid
  if (!isValidDate(date)) return {error: "Invalid Date"};
  
  const unix = date.getTime();
  const utc = date.toUTCString();
  return {unix, utc};  
};

module.exports = {isValidDate, buildJSON};