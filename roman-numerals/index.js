export const toRoman = (num) => {
    const romanNumeral = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"}, 
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"}, 
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"}, 
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"}
    ];
        let result = '';
        for (const { value, symbol } of romanNumeral) {
          // Loop continues as long as num (1914 - example) is superior the value I'm looping on (1000 - example)
            while (num >= value) {
              // As long as it is true, result adds up the Roman Letter and substracts the number (1914 e.g) to the value I'm lopping on (1000 e.g) => (1914 - 1000 = 914) => (914 is equal to the actual value so it will continue...)
                result += symbol;
                num -= value;
            }
        }
        return result;
    };