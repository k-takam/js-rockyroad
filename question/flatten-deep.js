/*
  [
    [],
    [[[]]],
    [[]]
    ...
  ]

  多次元配列を引数に受け取り、
  1次元配列に変換した配列の新しい参照を返す

  @param {Array} array
  @returns {Array}
*/

var flatten = (arr, resultArr) => {
    let ret = resultArr || [];

    arr.forEach(value => {
        if (Array.isArray(value)) {
            flatten(value, ret);
        } else {
            ret.push(value);
        }
    });

    return ret;
};

export default function(array) {
    return flatten(array);
}
