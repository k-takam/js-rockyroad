/*
  オブジェクトを要素に持つ配列を受け取り、
  第2引数で渡されたオブジェクトのプロパティと値が
  すべて一致するオブジェクトを返す
  見つからない場合は`null`を返す

  @param {Array} array
  @param {Object} object
  @returns {Object}
*/

const findByObj = (obj, other) => {
    let retFlg = false;

    for (const prop in other) {
        if (obj.hasOwnProperty(prop)) {
            retFlg = JSON.stringify(obj[prop]) === JSON.stringify(other[prop]) ? true : false;
        }
    }

    return retFlg ? true : false;
};

export default function(array, object) {
    let ret = array.filter(obj => {
        return findByObj(obj, object);
    });

    return ret.length <= 0 ? null : ret[0];
}
