for (var i = 0; i < 5; i++) {
  setTimeout(function (j) {
    console.log(new Date, j);
  }, 1000, i);
}
console.log(new Date, i);


var output = function (i, timer) {
  setTimeout(function () {
    console.log(new Date, i);
  }, 1000);
};

for (var i = 0; i < 5; i++) {
  output(i);  // 这里传过去的 i 值被复制了
}
console.log(new Date, i);

var list = [];
for (var i = 0; i < 5; i++) {
  list.push(new Promise((reslove, reject) => {
    setTimeout(function () {
      console.log(new Date, i);
      reslove();
    }, 1000);
  }));
}
Promise.all(list).then(() => {

})


let output = new Promise((reslove, reject) => {
  setTimeout(function () {
    console.log(new Date, i);
    reslove();
  }, 1000);
});

for (var i = 0; i < 5; i++) {
  await output();
}

