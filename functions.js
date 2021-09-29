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
    encrypt: (mssg, key) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const cap_letters = letters.toUpperCase();
      let final = '';
      for (let i = 0; i < mssg.length; i++) {
        let x = mssg.charAt(i);
        if (letters.search(x) == -1) {
          if (cap_letters.search(x) != -1) {
            let u = cap_letters.indexOf(x);
            let z = u + key;
            if (z > 25) {
              let val = 25 - u;
              while (key > val) {
                key = key - val;
                u = 0;
                val = 25;
                z = u + key;
              }
              final += cap_letters.charAt(z - 1);
            } else if (z < 0) {
              let val = 0 - u;
              while (key < val) {
                key = key - val;
                u = 25;
                val = -25;
                z = u + key;
              }
              final += cap_letters.charAt(z + 1);
            } else {
              final += cap_letters.charAt(z);
            }
          } else {
            final += x;
          }
        } else {
          let u = letters.indexOf(x);
          let z = u + key;
          // Number issue
          if (z > 25) {
            while (z > 25) {
              z = z - 25;
            }
            final += letters.charAt(z);
          } else if (z < 0) {
            while (z > 25) {
              z = z + 25;
            }
            final += letters.charAt(z);
          } else {
            final += letters.charAt(z);
          }
        }
      }
      return final;
    },
    decrypt: (mssg, key) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const cap_letters = letters.toUpperCase();
      let final = '';
      for (let i = 0; i < mssg.length; i++) {
        let x = mssg.charAt(i);
        if (letters.search(x) == -1) {
          if (cap_letters.search(x) != -1) {
            let u = cap_letters.indexOf(x);
            final += cap_letters.charAt(u - key);
          } else {
            final += x;
          }
        } else {
          let u = letters.indexOf(x);
          final += letters.charAt(u - key);
        }
      }
      return final;
    },
  },
};

module.exports = functions;
