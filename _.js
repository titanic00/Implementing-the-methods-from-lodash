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
    }
  };





module.exports = _;