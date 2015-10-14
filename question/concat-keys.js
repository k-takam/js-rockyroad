/*
  [
    { animal: 'tiger', fruits: 'apple' },
    { animal: 'flamingo', fruits: 'grape' },
    { animal: 'elephant', fruits: 'peach' },
    ...
  ]

  上記のような、配列に含まれるオブジェクトのkeyごとに値をまとめた新しい配列を返す。
  また、返す値の各keyに対する配列は昇順でソートする。
  上記の場合は、
  [
    { animal: ['elephant', 'flamingo', 'tiger']},
    { fruits: ['apple', 'grape', 'peach']},
  ]
  という配列が返る。

  @param {Array} array
  @returns {Array}
*/

const objectArrayKeys = arr => {
    let ret = [];

    arr.forEach(elm => {
        ret = ret.concat(Object.keys(elm));
    });

    ret = ret.filter((elm, index, self) => {
        return self.indexOf(elm) === index;
    });

    return ret;
};

const getValues = elm => {
    let ret = [];

    if (typeof elm === 'object') {
        let keys = Object.keys(elm);

        keys.forEach(key => {
            ret.push(elm[key]);
        });
    } else {
        ret.push(elm);
    }

    return ret;
};

const findValues = (key, objArr) => {
    let ret = [];

    objArr.forEach(obj => {
        if (obj.hasOwnProperty(key)) {
            ret = ret.concat(getValues(obj[key]));
        }
    });

    ret = ret.filter((elm, index, self) => {
        return self.indexOf(elm) === index;
    });

    return ret.sort();
};

export default function(array) {
    let tempObj = {};
    const keys = objectArrayKeys(array);

    keys.forEach((elm, index) => {
        tempObj[keys[index]] = findValues(keys[index], array);
    });

    return [tempObj];
}
