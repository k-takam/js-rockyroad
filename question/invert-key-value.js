/*
  {
    a: 100,
    b: 10,
    c: 101,
    d: 10
  }

  上記のような、オブジェクトのkeyと値を逆にして新しいオブジェクトを返す。
  上記の場合は、
    {
      10: ['b', 'd'],
      100: ['a'],
      101: ['c']
    }
  というオブジェクトが返る。

  @param {Object} object
  @returns {Object}
*/

const objectValues = obj => {
    let ret = [];

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            ret.push(obj[prop]);
        }
    }

    ret = ret.sort().filter((elm, index, self) => {
        return self.indexOf(elm) === index;
    });

    return ret;
};

export default function(object) {
    let retObj = {};
    const keys = Object.keys(object);
    const values = objectValues(object);

    values.forEach(value => {
        retObj[value] = keys.filter((elm, index) => {
            return value === object[elm];
        });
    });

    return retObj;
}
