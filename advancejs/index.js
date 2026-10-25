// console.log("hello")
// try{
//     cosole.log("hello2")
// }catch(err){
//     console.log(err)
// }
// console.log("hello3")


// let a;

// try{
//      console.log(a)
//     if (a === undefined) {
       
//         throw "the value of a is not define"
        
//     }
// }catch(err){
//     console.log(err)
// }


// const a = 9;
// console.log(a)
// a = 8;
// console.log(a)

// const a = {};
// a.name = "hello";
// console.log(a)

// let obj = {
//     name: "minahil",
//     schol: "SIT",
//     batch: {
//         cr1: "wMA",
//         cr2: "GD"
//     }
// }
// console.log(obj?.batch?.cr3?.stds?.[1])

// let schol = "saylani";
// // console.log(obj.batch.cr1)
// let {name, schol: smitSchool = "SMIT", batch} = obj;
// let {cr1, cr2} = batch;

// let mySchool = "schol"
// let {[mySchool]: schol} = obj
// console.log(schol)

// let arr = ["muntaha", "minahil", "dua"];
// let [mango, apple,carrot] = arr;
// // let [0,1,2] = arr;
// console.log(apple)

// function abc(a="hey",b=9){
//     console.log(a + b)
// }

// abc(5);

// function abc(a, ...b){
//     console.log(a, b)
// }

// abc(9,8,4,200,3000)

// let obj = {
//     name: "minahil",
//     fName: "irfan"
// }
// let obj2 = {
//     course: "web",
//     batch: 6
// }

// let finalObj = {...obj, ...obj2};
// console.log(finalObj)


// let arr = ["muntaha", "minahil"];
// let arr2 = ["noor", "mahnoor"]
// let finalArr = [...arr2, ...arr ]
// console.log(finalArr)

// function abc(){
//     let a = 899;
//     ///window
//     ///abc
//     ///a
//     function xyz(){
//         ///abc()
//         ///window
//         ///a
//         ///xyz()
//     }
// }

// function abc(cb){
//     setTimeout(() => {
//         console.log("kam hgya")
//         cb();
//     }, 3000);
// }

// function xyz(){
//     console.log("done")
// }
// abc(xyz)

// let arr = [
//   {
//   city: "karachi",
//   population: 700
// },{
//   city: "lahore",
//   population: 700
// },{
//   city: "Isl",
//   population: 1200
// }
// ];
// console.log(arr[1].population)

// let result = arr.reduce(function(a,v,i){
//   // console.log(v.population)
//   return a + v.population
// },1000)
// console.log(result)

// let arrr = arr.forEach(function(elem, i, all){
//     return elem;
// })
// console.log(arrr)

// let arrr = arr.map(function(elem,i,all){
//   return `${elem} Pakistan`;
// })
// console.log(arrr)



// let xyz = a => a * 10


// console.log(xyz(2))




