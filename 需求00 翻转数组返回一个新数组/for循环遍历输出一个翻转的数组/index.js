  // 翻转数组，返回一个新数组   [5, 4, 3, 2, 1] -> [1, 2, 3, 4, 5]
  // 翻转数组，返回一个新数组   [5, 4, 3, 2, 1] -> [1, 2, 3, 4, 5]
  var newArray = [] ;
  var array = [5, 3, 2, 1];
//   for循环功能  翻转数组
    for (var i = array.length - 1; i >= 0; i--) {
      newArray[newArray.length] = array[i];
    }



  console.log(newArray);


 