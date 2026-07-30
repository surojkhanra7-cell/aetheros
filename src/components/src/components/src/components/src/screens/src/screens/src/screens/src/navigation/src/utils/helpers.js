// Format numbers with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Truncate text with ellipsis
export const truncate = (str, length = 100) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
};

// Delay helper for async operations
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
