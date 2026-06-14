const tinderUser = new Object()//singleton object = this will return value{}
const tinderUser = {}// non singleton object = this will return value{}

tinderUser.id = "123abc"
tinderUser.name = "suman"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail,com",
    fullname:{
        userfullname:{
            firstname: "suman",
            lastname: "saw"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);



//Objects k andar objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3); // this will return { obj1: { '1': 'a', '2': 'b'}, obj2: '3': 'a', '4':'b' }}

const obj3 = Object.assign({}, obj1, obj2, obj4)
//to add all the objects to one object as



const obj4 = Object.assign({},obj1,obj2);
console.log(obj4); // here both objs is assigned to the {} and stored in obj4


const obj6 = Object.assign(target,obj1,obj2);
console.log(obj6); // here both objs is assigned to the target and stored in obj6 

const obj5 = Object.assign(obj1,obj2);
console.log(obj5); // here the properties of obj2 are added to obj1


const obj3 = {...obj1, ...obj2}
console.log(obj3); // this will return { a : 1, b : 2, c : 3, d : 4}


//assign ke through object to be assign 


//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const users = [
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));











