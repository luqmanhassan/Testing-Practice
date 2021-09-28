const functions = {
  capitalize: (string) => {
    let y = string.charAt(0);
    y = y.toUpperCase();
    let x = string.slice(1);
    return y + x;
  },
  reverse: (string) => {
    let x = '';
    for (let i = string.length; 0 <= i; i--) {
      x += string.charAt(i - 1);
    }
    return x;
  },
  calculator: {
    add: () => {},
    subtract: () => {},
    divide: () => {},
    multiply: () => {},
  },
  analyze: (arr) => {
    let mx = () => {
      return Math.max.apply(null, arr);
    };
    let mn = () => {
      return Math.min.apply(null, arr);
    };

    let av = () => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum / arr.length;
    };
    let lg = arr.length;

    return {
      average: av(),
      min: mn(),
      max: mx(),
      length: lg,
    };
  },
  caesar: {
    encrypt: (mssg) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let final = '';
      for (let i = 0; i < mssg.length; i++) {
        let x = mssg.charAt(i);
        let u = letters.indexOf(x);
        final += letters.charAt(u + 1);
      }
      return final;
    },
    decrypt: (mssg) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let final = '';
      for (let i = 0; i < mssg.length; i++) {
        let x = mssg.charAt(i);
        let u = letters.indexOf(x);
        final += letters.charAt(u + 1);
      }
      return final;
    },
  },
};

module.exports = functions;
