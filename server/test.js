// null, undefined, boolean, number, string, object, symbol
// console.log(typeof(null))
// console.log(typeof('asda'))

// приведение типов
// let language = 'JS'
// if (language) console.log('best language: ' + language)

// Строки и числа
// console.log(1 + '2') //  '12'
// console.log('' + 1 + 0)  // '10'
// console.log('' - 1 + 0) // -1
// console.log('3' * '8')  // 24
// console.log(4 + 10 + 'px')  // '14px'
// console.log('px' + 4 + 10)  // 'px410'

// == vs === (3-ое равно без приведения типов)
// console.log(2 === '2')
// console.log(2 == '2')
// console.log(undefined === null)
// console.log(undefined == null)

// console.log(false == '')  // true
// console.log(false == [])  // true
// console.log(false == {})  // false


// массив - это объект, он хранит ссылку, а не сам объект
// let a = [1, 2 , 3]
// let b = a;
// b.push(4)
// console.log('a', a)
// console.log('b', b)

// scope (область видимости) функция не видит переменные из вложенной в неё функции
// const funkA = () => {
//     let a = 1;
//     const funkB = () => {
//         let b = 2;
//         const funkC = () => {
//             let c = 3;
//             console.log('funkC', a, b ,c)
//         }
//         funkC()
//         console.log('funkB', a, b)
//     }
//     funkB()
//     console.log('funkA', a)
// }
// funkA()

// hosting
// console.log(sum(1, 2))
// // function declaration (видна до определения функции)
// function sum(a, b) {
//     return (a + b)
// }
// // function expression (видна только после определения функции)
// const sum = function(a, b) {
//     return (a + b)
// }
// console.log(sum(1 ,2))


// let доступно только внутри фигурных скобов
// let a = 'aaa'
// let b = 'bbb'
// {
//     a = 'newaaa'
//     let b = 'localbbb'
//     console.log(a, b)
// }
// console.log(a, b)

// const (примитивные типы нельзя менять, объекты можно менять, но нельзя поменять их тип)
// const POST = 8080;
// const arr = ['js', 'lang']
// arr.push('hhh')
// console.log(arr)

// замыкания
// function sayHello(name) {
//     const message = 'hello ' + name;
//     return function() {
//         console.log(message)
//     }
// }
// const helloToMe = sayHello('me')
// helloToMe()


// function createFramework() {
//     const fw = ['ang', 'react']
//     return {
//         print: function() {
//             console.log(fw.join(' '))
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }
// const manager = createFramework()
// manager.print()
// manager.add('vue')
// manager.print()


// либо поменять var на const, либо замыканием внутри цикла
// const fib = [1, 2, 3, 5, 8, 13];
// for (var i = 0; i < fib.length; i++ ) {
//     (
//         (j) => {
//             setTimeout(() => {
//                 console.log(j, fib[j])
//             }, 1000);
//         }
//     )(i)
// }


// let result = [];
// for (var i = 0; i < 5; i ++) {
//     result.push(() => {
//         console.log(i)
//     })
// }
// result[2]()
// result [4]()

// замыкание (оборачиваем в самовызывающуюся функцию)
// let result = [];
// for (var i = 0; i < 5; i ++) {
//     (() => {
//         var j = i
//         result.push(() => console.log(j))
//     })()
// }
// result[2]()
// result[4]()


// const sum = (a) => {
//     return (b) => a + b
// }
// console.log(sum(1)(3))

// const equil = (a, b) => {
//     let arrA = {};
//     let arrB = {};
//     a.split('').forEach(el => {
//       if (arrA[el]) {
//         arrA[el]++
//       } else arrA[el] = 1
//     })
//     b.split('').forEach(el => {
//       if (arrB[el]) {
//         arrB[el]++
//       } else arrB[el] = 1
//     })
//     if (Object.keys(arrA).every(el => (arrA[el] === arrB[el]))) {
//       return true
//     } else return false
//   }
//   console.log(equil('acc', 'cba'))