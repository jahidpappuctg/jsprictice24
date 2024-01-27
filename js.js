// // function onClick(){
// //     var hH2 = document.getElementById("h2");

// //     console.log(hH2);
// // }con

// // const fun2 = () => console.log('hellow');

// // fun2();

// // const fun3 = (name1) => console.log('this is my name ' + name1);

// // fun3('anayza');

// // const fun10 = (num) => {

// //     console.log('hello', num);

// // }

// // fun10(10)

// // const fun4 = (num1, num2) => {
// //     return num1 + num2;
// // }

// // console.log(fun4(4, 5));


// // const func5 = ( nu1, num2, mum3) => {

// //     const sum = nu1 + num2 ;
// //     const divide= sum / mum3
// //      return divide;
// // }

// // console.log(2, 3, 5);



// // const info = {
// //     name: "juhi",
// //     adddress: 'ctg'
// // }

// // const {name, adddress} = info;


// // const info1 = ["jahid", "karim", "abdullah", "deshi"];

// // const [, r] = info1;

// // const obj = {

// //     person: {
// //         name: "Jahid",
// //         address: "Ctg",
// //         mobile: "0171"
// //     }
// // }


// // za

// // const arre = [
// // function add(a, b) {
// //     return a + b;
// // }
// // ]
// // const fuc3 = (object) => {
// //     console.log(object);
// // }

// // fuc3(obj);

// // const productTitle = 'White T-shirt / Cotto Round Neck T-Shir'


// // console.log(productTitle.toUpperCase());
// // console.log(productTitle.toLocaleLowerCase());
// // console.log(productTitle.includes('Cotto'));

// // const pTLcase = productTitle.toLocaleLowerCase();
// // const search = "t-shirt";
// // console.log(pTLcase.includes(search));

// // // console.log(productTitle.slice(0, 30) + '......');


// const numbers = [20, 30, 40, 40];

// numbers.forEach((value, index, arr) =>{
//     console.log(value, index, arr);
// });

// for( let i = 0; i <= 200; i++){
//    if( i >= 50 && i <= 100 || i >= 150 && i <= 200 ){
//       console.log(i);
//    }
// }

// for( let i = 50; i <= 290; i++ ){
//    if( i >= 50 && i <= 190 || i >= 201 && i <= 290){
//       console.log(i);
//    }
// }

// for( let i = 500; i  <= 3000; i++ ){
//    if( i % 9 == 0 && i % 11 == 0){
//       console.log(i);
//    }
// }

// let x = 5; 
//    if (x < 10) { 
//       x = x + 3;
//    } 
//       else {
//           x = x - 2;
//     } 
//  console.log(x);

// var grade = 60;

// var pass = grade >= 60 ? "Pass" : "Fail";


if (number % 2 == 0)
 { ... }
/**
 * 
 */
 
if (number / 2 == 0) { ... }

// const product = [
//     {
//         id: 1,
//         productName : 'com fortable Denim Shirt for men blue',
//         imageURL : 'https://static-01.daraz.com.bd/p/,',
//         price: 150,
//         description: '',
//     },
//     {
//         id: 2,
//         productName : 'com fortable Denim Shirt for men blue',
//         imageURL : 'https://static-01.daraz.com.bd/p/,',
//         price: 120,
//         description: '',
//     },
//      {
//         id: 3,
//         productName : 'com fortable Denim Shirt for men blue',
//         imageURL : 'https://static-01.daraz.com.bd/p/,',
//         price: 200,
//         description: '',
//      },
//      {
//         id: 4,
//         productName : 'com fortable Denim Shirt for men blue',
//         imageURL : 'https://static-01.daraz.com.bd/p/,',
//         price: 250,
//         description: '',
//      }    
    
// ];

// // const id = 3;

// // const findProduct = product.find((value)=> {
// //     return value.id === id;
// // });

// // console.log(findProduct);

// const findOut = product.filter((value, index, arr)=>{
//    return value.price >= 200;
// });

// console.log(findOut);
// fetch('product.json')
// .then(res => res.json())
// .then (res =>{
//    productCard(res)
// });


// function productCard(productInfo){
//    const root = document.getElementById('root');
//    productInfo.forEach(value =>{

//       root.innerHTML += htmlCode(value);

//    });
   
//    function htmlCode(info){
//       const {imageURL,productName, price, } = info;

//       const html = `
   
//          <div>
//             <img src='${imageURL}'></img>
//             <h3>${productName}</h3>
//             <h2>${price}</h2>
//          </div>
//       `;

//    return html;

//    }

// }

