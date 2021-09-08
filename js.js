// 1
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const data = [];
// let count = null;

// rl.on("line", function (line) {
//     if (count === null) {
//         count = Number(line);
//     } else {
//         data.push(line);
//         if (--count === 0) {
//             data.forEach(function (str) {
//                 console.log(func(str));
//             });
//             rl.close();
//         }
//     }
// });
// rl.on("close", function () {
//     process.exit(0);
// });

// function func(string) {
//     let count = string.split("").reduce((acc, letter) => {
//         acc[letter] = (acc[letter] || 0) + 1;
//         return acc;
//     }, {});

//     if (Object.values(count).length == 2 && Object.values(count)[0] == 2 && Object.values(count)[1] == 2) {
//         return "yes";
//     } else {
//         return "no";
//     }
// }
// func("ABBAA", "GOGO", "FIRE", "WAPP1");
// func("ABBA");

// // 2
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let data = [];
// let count = 2;

// rl.on("line", function (line) {
//     data.push(line);

//     if (--count === 0) {
//         let input = data[0];
//         let length = data[1];
//         let distance = input.split(" ").map((val) => +val)[0];
//         let vilageCount = input.split(" ").map((val) => +val)[1];
//         func(
//             distance,
//             vilageCount,
//             length.split(" ").map((val) => +val)
//         );
//         rl.close();
//     }
// });
// rl.on("close", function () {
//     process.exit(0);
// });

// const func = (distance, vilageCount, length) => {
//     let max = 0;
//     let i = 0;
//     while (i < vilageCount) {
//         let nextPos;
//         if (i + 1 === vilageCount) {
//             nextPos = distance + length[0];
//         } else {
//             nextPos = length[i + 1];
//         }
//         let diff = nextPos - length[i];
//         if (diff > max) {
//             max = diff;
//         }
//         i++;
//     }
//     console.log(distance - max);
// };
// 3

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let data = [];
// let count = 2;

// rl.on("line", (line) => {
//     data.push(line);

//     if (--count === 0) {
//         let input = data[0];
//         let woodBarCount = input.split(" ").map((val) => +val)[0];
//         let woodBars = data[1]
//             .split(" ")
//             .map((val) => +val)
//             .splice(0, woodBarCount);

//         let cut = input.split(" ").map((val) => +val)[1];
//         func(cut, woodBars);
//         rl.close();
//     }
// });
// rl.on("close", () => process.exit(0));

// function func(cut, woodBars) {
//     for (let i = 0; i < cut; i++) {
//         const maxWoodBar = woodBars.sort().pop();

//         woodBars.push(Math.floor(maxWoodBar / 2) || 1, Math.ceil(maxWoodBar / 2));
//     }

//     return console.log(woodBars.sort()[woodBars.length - 1]);
// }

// 4
// function pathCount(cityCount, removedRoads, pathLength) {
//     var x = new Array(cityCount);
//     for (let i = 0; i < x.length; i++) {
//         x[i] = new Array(cityCount);
//         for (let j = 0; j < x[i].length; j++) {
//             i == j ? (x[i][j] = 0n) : (x[i][j] = 1n);
//         }
//     }

//     let roadArr = removedRoads.reduce(function (acc, item) {
//         acc[item] = item.split(" ").map((item) => +item);
//         return acc;
//     }, {});

//     for (let key of Object.values(roadArr)) {
//         x[key[0] - 1][key[1] - 1] = 0n;
//         x[key[1] - 1][key[0] - 1] = 0n;
//     }
//     /// *****************СПИЖЖЕНО С ИНТЕРНЕТОВ ПЕРЕМНОЖЕНИЕ МАТРИЦ *********************
//     function multiplyMatrix(A, B) {
//         let rowsA = A.length,
//             colsA = A[0].length,
//             rowsB = B.length,
//             colsB = B[0].length,
//             C = [];
//         if (colsA != rowsB) return false;
//         for (let i = 0; i < rowsA; i++) C[i] = [];
//         for (let k = 0; k < colsB; k++) {
//             for (let i = 0; i < rowsA; i++) {
//                 let t = 0n;
//                 for (let j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
//                 C[i][k] = t;
//             }
//         }
//         return C;
//     }
//     function matrixPow(n, A) {
//         if (n == 1) return A;
//         else return multiplyMatrix(A, matrixPow(n - 1, A));
//     }
//     /// ********************************************************************************

//     result = matrixPow(pathLength, x)[0][0] % 998244353n;
//     return Number(result);
// }
// const func = (n, m) => {
//     let res = 0;

//     const get = (state) => {
//         if (state.len === n) {
//             state.summ === m && state.val === 0 && res++;

//             return;
//         }

//         for (let i = 0; i <= m; i++) {
//             if (state.summ + i <= m) {
//                 get({
//                     len: state.len + 1,
//                     summ: state.summ + i,
//                     val: state.val ^ i,
//                 });
//             }
//         }
//     };

//     get({ len: 0, summ: 0, val: 0 });

//     return res;
// };
// console.log(func(2, 2));
// console.log(func(5, 4));
// console.log(func(5, 20));

//4*2
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const data = [];
// let removedQty = null;
// let cityCount;
// let pathLength;

// rl.on("line", function (line) {
//     if (removedQty === null) {
//         const [countLine, qtyLine, lengthLine] = line.split(" ").map(Number);

//         removedQty = qtyLine;
//         cityCount = countLine;
//         pathLength = lengthLine;
//     } else {
//         data.push(line);

//         if (--removedQty === 0) {
//             console.log(pathCount(cityCount, pathLength, data));
//             rl.close();
//         }
//     }
// });
// rl.on("close", function () {
//     process.exit(0);
// });

// function pathCount(cityCount, pathLength, removedRoads) {
//     var x = new Array(cityCount);
//     for (let i = 0; i < x.length; i++) {
//         x[i] = new Array(cityCount);
//         for (let j = 0; j < x[i].length; j++) {
//             i == j ? (x[i][j] = 0) : (x[i][j] = 1);
//         }
//     }

//     let roadArr = removedRoads.reduce(function (acc, item) {
//         acc[item] = item.split(" ").map(Number);
//         return acc;
//     }, {});

//     for (let key of Object.values(roadArr)) {
//         x[key[0] - 1][key[1] - 1] = 0;
//         x[key[1] - 1][key[0] - 1] = 0;
//     }

//     function multiplyMatrix(A, B) {
//         let rowsA = A.length,
//             colsA = A[0].length,
//             rowsB = B.length,
//             colsB = B[0].length,
//             C = [];
//         if (colsA != rowsB) return false;
//         for (let i = 0; i < rowsA; i++) C[i] = [];
//         for (let k = 0; k < colsB; k++) {
//             for (let i = 0; i < rowsA; i++) {
//                 let t = 0;
//                 for (let j = 0; j < rowsB; j++) t += (A[i][j] * B[j][k]) % 998244353;
//                 C[i][k] = t;
//             }
//         }
//         return C;
//     }
//     function matrixPow(n, A) {
//         if (n == 1) return A;
//         else return multiplyMatrix(A, matrixPow(n - 1, A));
//     }

//     return matrixPow(pathLength, x)[0][0];
// }

// // console.log(pathCount(3, 4, ["2 3"]));
// // console.log(pathCount(3, 3, ["1 2", "1 3", "2 3"]));
// // console.log(pathCount(5, 100, ["1 2", "4 5", "2 3"]));

// // 5
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", (line) => {
//     let numCount = line.split(" ").map((val) => +val)[0];
//     let numSum = line.split(" ").map((val) => +val)[1];
//     console.log(func(numCount, numSum));
//     rl.close();
// });
// rl.on("close", () => process.exit(0));

// function func(numCount, numSum) {
//     let result = 0;

//     function repeat(condition1 = 0, condition2 = 0, condition3 = 0) {
//         let count = 0;

//         while (count <= numSum) {
//             if (condition1 + 1 == numCount && condition2 + count == numSum && (condition3 ^ count) == 0) {
//                 result = (result + 1) % 998244353;

//                 return;
//             }

//             if (condition1 + 1 <= numCount && condition2 + count <= numSum) {
//                 repeat(condition1 + 1, condition2 + count, condition3 ^ count);
//             }

//             count++;
//         }
//     }

//     repeat();

//     return result;
// }

// const sum = function (a) {
//     const f = (b) => {
//         return f(b + a);
//     };
//     f.valueOf = function () {
//         return b;
//     };

//     return f;
// };
function printNumbers(from, to) {
    let i = from;
    // console.log(i++);
    // if (i <= to) {
    //     setTimeout(printNumbers, 1000, i, to);
    // }

    let timer = setInterval(() => {
        if (to >= i) {
            console.log(i++);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
printNumbers(1, 4);
