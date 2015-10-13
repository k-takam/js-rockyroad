/*
  いくつかの number を要素にもつ配列を引数にとり
  それらを結合したときの最大値を返す

  @param {Array} array
  @returns {Number}
*/

var permutation = (ret, preview, array, max) => {
    if (!max) max = array.length;

    if (max > 0) {
        array.forEach((value, index) => {
            let copyArray = array.slice(0);
            let splice = copyArray.splice(index, 1);
            let concat = preview.concat(splice);
            permutation(ret, concat, copyArray, max - 1);
        });
    } else {
        ret.push(parseInt(preview.join(''), 10));
    }
};

export default function(array) {
    let ret = [];

    permutation(ret, [], array);

    return Math.max.apply(null, ret);
}
