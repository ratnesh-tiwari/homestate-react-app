export const isValidEmail = email => {
  // Simple email validation check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const findProperty = (data = {}, id) => {
  const value = Object.keys(data)
    .map(el => data[el])
    ?.flat()
    ?.filter(el => el.property_id === +id);

  return value[0];
};

export const findBookmark = (data = [], id) => {
  const result = data.filter(el => el.id === id);
  return result.length === 0 ? false : true;
};
