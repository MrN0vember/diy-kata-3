const reachDestination = (distance, speed) => {
  let eta = Math.round(distance / speed * 2) / 2;
  if(eta < 1) {
      return "I'm nearly there"
  };

  if(eta === 1) { 
    return `I will be there in about ${eta} hour`;
  };

    return `I should be there in ${eta} hours`;
};

module.exports = reachDestination;
