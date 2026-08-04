export const validation = {
  phone: {
    pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/,
    message: 'Please enter a valid Bangladeshi phone number'
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email address'
  },
  url: {
    pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message: 'Please enter a valid URL'
  }
};
