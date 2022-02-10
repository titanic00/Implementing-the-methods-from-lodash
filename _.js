const _ = {
    clamp (number, lowerBound, upperBound) {
      // checking if the provided number within two bounds or not
      // if it't not the corresponding number will be returned
      if (number < lowerBound)
        return lowerBound;
      else if (number > upperBound)
        return upperBound;
      else
        return number;
    },
    // checking if the number is within the range
    inRange (number, startValue, endValue) {
        // if start value is bigger then end value we swap them
        if (startValue > endValue) {
          let buff = 0;
          buff = startValue;
          startValue = endValue;
          endValue = buff;
        }
        // if there is no end value we assign start value to 0
        // and end value to start value
        if (!endValue) {
          endValue = startValue;
          startValue = 0;
        }
        // if provided number is bigger or smaller then these numbers
        // it means that the number is smaller or bigger than assigned range
        if(number < startValue || number >= endValue)
          return false;
        // if the number is in the range the function returns true
        return true;
    },
  };

module.exports = _;