//class is a custom data structure
class Vehicle {

//called when object intatiated
  constructor(type){
    this.vehicle=type;


  }
  let showc=() => return "i have :" + this.vehicle;
  
}
cosnt v1 = new Vehicle ("motorcycle");
v1.show()

class Model extends Vehicle {
  constructor(type,brand){
    super(type);
    this.company=brand;
  }
  //arrow function
  let print = () => return "i have" +this.show()+this.company;
  
}
const M1= new Model("bk","hero");
M1.print();

//map array method
let myArray = [1,2,3,4];
let newArray = myArray.map((ele)=>{return ele * 3;});

let arrayOfObjects = [{firstname:"s",lastname:"b",profession:"tech-billionaire"},
{firstname:"s",lastname:"b",profession:"tech-billionaire"},
{firstname:"s",lastname:"b",profession:"tech-billionaire"}];

let newarrayObject= arrayOfObjects.map((ele)=>
// backtick `` is used for placeholder ${}
//it is called template literal
{return `${ele.firstname} ${ele.lastname} ${ele.profession}`; });
console.log(newarrayObject);

// destructuring
//taking specifically what is needed
let calculate = (a,b) =>{
  let sub = a-b;
   let add = a+b;
    let mul = a*b;
     let div = a/b;

     //returning an array
     return [sub,add,mul,div];

};
//taking out array elements which are only needed
let result [sub,mul] = calculate(3,4);

//spread operator ...
//often used for copying array/object into another

let person1={
  fname: "s",
  lname: "b",
}
let person2={
  fname: "n",
  lname: "c",
}
let conju = {...person1,...person2};

const arr1= [1,2,3,4];
const arr2=[4,5,6,7];
const arr3=[...ar1,...arr2];

//Ternary operator
//simplified if/else

if (auth){
  renderApp();
}
else{
  renderLogin();
}

// condition ? ifstatement : elsestatement ;
auth ? renderApp() : renderLogin() ;

//ES6 modules
//breaking up codebases into small parts
//import ,export function and variables


