class Helper {
    // Simple function
    static randomStr(len, arr) {
        let ans = "";
        for (let i = len; i > 0; i--) {
          ans += arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
      }
   
  }
  export default Helper;