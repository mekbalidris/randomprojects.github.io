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



console.log(numbers.reduce(ttl, 0));
