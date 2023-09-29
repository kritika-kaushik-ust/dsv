class Helper {
    static randomStr(len, arr) {
        let randomString = "";
        for (let i = len; i > 0; i--) {
            randomString += arr[Math.floor(Math.random() * arr.length)];
        }
        return randomString;
      }
   
  }
  export default Helper;