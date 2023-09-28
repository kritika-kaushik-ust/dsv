const sortByProperty = (prop, order = 1) => {
    if (order !== -1) order = 1;
    return (a, b) => {
      return (a[prop] > b[prop]) ? 1: (a[prop] < b[prop]) ? -1: 0;
    };
  };
  
  export default sortByProperty;

  
  