// let students = ['Aziz','Saidbek','Shaxzod','muhhamadAmin','Odilbek']
// alert(`
//     ${students[0]},
//     ${students[1]},
//     ${students[2]},
//     ${students[3]},
//     ${students[4]},
// `) 
// let name = prompt('Напишите имя котого вы хотите удалить: ')

// if(students.includes(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())){
//     name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
//     let index = students.indexOf(name)
//     console.log(students);
//     students.splice(index, 1)
//     console.log(students);
// }else{
//     console.log('we have not this name in our array');
// }   



// let arr = [4,1,2,5,4,46,11,9,27,8,33,0,9]

// let even = []
// let odd = []

// arr.filter(num =>{
//     if(num % 2 === 0){
//         even.push(num)
//     }
//      else{
//     odd.push(num)
// } 
// })
// // 3
//  let students = ['Aziz', 'Saidbek', 'Shaxzod', 'Emil', 'Ozod']
// let name = prompt('Кого удалить, напишите имя')
// let index = students.indexOf(name)

// if(index !== -1){
//     console.log(students);
//     console.log(students.splice(index, 1));
// } else{
//     console.log('We have not this name in our array');
// }


// let word = ['Bob', 'Jane', "Leo", 'Alex', 'Dick','Roma', 'Antony',"Leo"]
// let names = ['Aziz','Saidbek','Shaxzod','MuhhamadAmin','Odilbek']

// let obj = {
//   name1:'Aziz',
//   name2:'Saidbek',
//   name3:'Shaxzod',
//   name4:'MuhhamadAmin',
//   name5:'Odilbek,Maxa,Abbos'
// }
// word = word.concat(names)
// word.unshift(obj)

// var
//   size = 6,
//   space = '';

// var items = ['* '];

// for (var s = 0; s < size - 1; s++) {
//   space += ' ';
// }

// for (var i = 0; i < size; i++) {
//   if (i == 0)
//     console.log(space + '*');
//   else {
//     var tree = '';
//     for (var j = 0; j < i + 1; j++) {
//       tree += items[getRandomInt(0, items.length)];
//     }
//     console.log(space + tree);
//   }

//   space = space.substring(0, space.length - 1);
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let zv = ''
// let yv = '*'
// // let ov = '******'

// do {

//     zv += zv + yv
//     document.write(`<h1>${zv}</h1>`)


// } while (zv.length < 10)
// // do {
// //  ov = ov.replace(/\*\*\*/, "");
// // document.write(`<h1>${ov}</h1>`)
// // document.write(`<h1>${yv}</h1>`)
// // } while(ov.length < 1 )



let bozor = [
  {
    brand: "Ferrari F430 Spider",
    year: 2004,
    price: 470000,
    guarantee: false
  },
  {
    brand: "Bentli ",
    year: 2005,
    price: 470000,
    guarantee: false
  },
  {
    brand: "BMW S6",
    year: 2011,
    price: 470000,
    guarantee: true
  },
  {
    brand: "Buggati 450G ",
    year: 2001,
    price: 470000,
    guarantee: false
  },
  {
    brand: "Porshe_Panamera",
    year: 2011,
    price: 470000,
    guarantee: true
  },

]


let firstB = []
let Others = []

for (item of bozor) {
  if (item.brand[0] == 'B') {
    firstB.push(item)
  } else (Others.push(item))
  if (item.year < 2011 && item.guarantee == false) {
    console.log("Машина старая горантии не будет");
  } else (
    console.log("Машина относительна новая горантия год ")
  )
}
console.log(bozor);
console.log(firstB);
console.log(Others);