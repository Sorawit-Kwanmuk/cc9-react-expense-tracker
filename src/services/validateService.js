const isEmpty = value => {
  return !value || !value.trim(); //ดัก value === '' กับ value === white space
};

const isNumeric = value => {
  return !isNaN(value);
};

const validatePayee = value => {
  if (isEmpty(value)) {
    return 'Payee is required';
  } else {
    return '';
  }
};

const validateAmount = value => {
  if (isEmpty(value)) {
    return 'Amount is required';
  } else if (isNaN(value)) {
    return 'Amount must be numeric';
  } else if (+value <= 0) {
    return 'Amount must be greater than zero';
  } else {
    return '';
  }
};

const validateDate = value => {
  if (isEmpty(value)) {
    return 'Date is required or invalid format';
  } else {
    return '';
  }
};

export { isEmpty, isNumeric, validatePayee, validateAmount, validateDate };
