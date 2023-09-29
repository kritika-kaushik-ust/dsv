const sortByProperty = (prop, order = 1) => {
    if (order !== -1) order = 1;
    return (a, b) => {
    if(prop == 'company')
       return (a[prop]['name'] > b[prop]['name']) ? 1: (a[prop]['name'] < b[prop]['name']) ? -1: 0;
    else
      return (a[prop] > b[prop]) ? 1: (a[prop] < b[prop]) ? -1: 0;
    };
  };
  
  export default sortByProperty;

  
  