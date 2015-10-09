/*
  [
    { id: 4, name: 'sugar' },
    { id: 2, name: 'shin' },
    ...
  ]

  上記のようなプロパティをもつオブジェクトを要素にもつ配列を引数にとり、
  `id` の値で一番大きな数値に +1 してその数値を返す

  @param {Array} array
  @returns {Number}
*/

export default function(array) {
    let ids = [];

    array.forEach(elm => {
        ids.push(elm.id);
    });

    return Math.max.apply(null, ids) + 1;
}
