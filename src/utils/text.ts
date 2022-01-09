const FitTextWithDots = (text = '', maxlength = 40) => {
  return text.length > maxlength
    ? text.substring(0, maxlength - 5) + '...'
    : text;
};

export default {FitTextWithDots};
