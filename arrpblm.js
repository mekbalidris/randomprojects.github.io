const array = ["a","e","c","d","a","d","e",1,2,1];
const numbers = [1,2,3,4,5,6,7,8,9];
const obj = {};
const stuff = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,
    },{
        name: 'desktop',
        price: 1500,
        count: 10,
    },{
        name: 'phone',
        price: 500,
        count: 3,
    }
];

function is_array(value) {
    return(Array.isArray(value));
}

//-------------------
function array_clone(value) {
    return(value.slice(0));
}

function array_clone2(value){
    let array2=[];
    for(let i=0;i<value.length;i++){
        array2.push(value[i]);
    }
    return array2;
}
//METHODS:

function Marray_clone(arr){
    return [...arr];
}

function Marray_clone2(arr){
    return Array.from(arr);
}

function Marray_clone3(arr){
    return arr.slice();
}
//-------------------
function firstlast(arr,n){
    return(arr.slice(-n));
    //return(arr.slice(0,n));
}
//-------------------
function join(arr){
    let string = "";
    for(let i=0;i<arr.length;i++){
        string += arr[i] + " ";
    }
    return(string)
}

//METHODS
function join2(arr){
    return arr.join(" ");
}
//-------------------
//for each
function addobj(item, index, arr){
    if(obj[item]){
        obj[item]++;
    }else{
        obj[item]= 1;
    }
}
//-------------------
// map
function additem(item){
    return {
    name: item.name,
    total: item.price * item.count
    };
}

//-------------------
// filter
function even(item){
    return item % 2 == 0;
}

function available(item){
    return item.count >5;
}
// array.reduce({function((accumulater,item,index,arr))}, start-index)
function ttl(S, item){
    return S + item;
}
//-------------------

class products{
    
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productinfo(){
        console.log(`price : $${this.price.toFixed(2)}`);
    }

    total(){
        return this.price + (this.price * 0.05);
    }
}
//-------------------

class mathutil{

    static PI = 3.14159;

    static getdiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius
    }
}

//-------------------
class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
    console.log(`${this.name} is swimming`);
    }
}

const dog = new Animal("dog");
const cat = new Animal("cat");

const rabbit = new Rabbit();
const fish = new Fish();


//-------------------

class students{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printname(name){
        console.log(`name : ${name}`)
    }
    
    printage(age){
        console.log(`age is : ${age}`);
    }

}

class Idris extends students{
    constructor(name,age,mental){
        super(name,age);
        this.mental = mental;
    }

    info(){
        console.log(`mental : ${mental}`);
        super.printname();
        super.printage();
    }
}

//-------------------

const bro = ["amine", "akram", "anis", "idris"];

const [first, second, ...lasttwo] = bro;

const first1 = {
    bd : 1996,
    age : 28,
    job : "employed" 
}

const second1 = {
    bd : 2001,
    age : 23,
    job : "student" 
}

const {bd, age, job} = second1;


//--------------

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}



class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("idris", 18, "123", "algeirs", "algeria");

console.log(person1.address.street);


