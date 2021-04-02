export const votetoadd = (polloptions, optionclicked) => {
    const existingoption = polloptions.find(
      polloption => polloption.option === optionclicked.option
    );
  
    if (existingoption) {
      return polloptions.map(polloption =>
        polloption.option === optionclicked.option
          ? { ...polloptions, votes: polloption.count + 1 }
          : polloption
      );
    }
  
    return [...polloptions, { ...optionclicked, votes: 1 }];
  };