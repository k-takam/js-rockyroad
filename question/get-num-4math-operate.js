/*
  {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [13, 434, 314]
  }

  上記のようなプロパティをもつオブジェクトを第2引数にとり、第1引数で渡された数値に対して、
  プロパティそれぞれに対応する四則演算を、その値である数値、
  または数値が格納された配列それぞれで行いその結果を返す

  小数点以下は切り捨てる

  @param {Number} number
  @param {Object} object
  @returns {Number}
*/

var fourArithmeticOperations = (leftOperand, rightOperand, operatorKey) => {
    switch (operatorKey) {
        case 'add':
            return leftOperand + rightOperand;
        case 'sub':
            return leftOperand - rightOperand;
        case 'multi':
            return leftOperand * rightOperand;
        case 'div':
            return Math.floor(leftOperand / rightOperand);
    }
};

export default function(number, object) {
    var keys = Object.keys(object);

    keys.forEach(key => {
        if (Array.isArray(object[key])) {
            object[key].forEach(value => {
                number = fourArithmeticOperations(number, value, key);
            });
        } else {
            number = fourArithmeticOperations(number, object[key], key);
        }
    });

    return number;
}
