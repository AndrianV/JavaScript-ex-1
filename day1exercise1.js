//----===**# Functions #**===---- 

//---== 1) ==---

//Function Declaration
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
}

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};


//---== 2) ==---

console.log(add(1, 2)); // --> The result will be the sum of the two passed arguments
console.log(add(7, 7)); // --> Call here the method "add(n1,n2)"and pass two arguments in oder to work
console.log(add(1, 2, 3)); // --> We have not provided a function with 3 parameters,so the 3rd paramater is ignored
console.log(add(1)); // --> Result will be NaN, because we've provided just one parameter, so return value would't be a Number
console.log(cb(3, 3, add));
console.log(cb(4, 3, sub)); // --> Call the "sub()" function to substract second from the first parameter
console.log(cb(3, 3, add)); // --> Call it like a reference,not like a function!
console.log(cb(3, "hh", add));

//---== 3) ==---
var cb = function (n1, n2, callback) {
    if (callback.name == "mul") {
        return "Multiplied: " + n1 + " * " + n2 + " = " + callback(n1, n2);
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
}


//---== 4) ==---
//Multiply two numbers
function mul(n1, n2) {
    return n1 * n2;
}
//Use it as a callback for the cb function
try {
    console.log(cb(3, 3, mul));
} catch (e) {
    console.log(e.name);
}

//---== 5) ==---
try {
    console.log(cb(3, 3, function (n1, n2) {
        return n1 / n2;
    }));
} catch (e) {
    console.log(e.name);
}


//----===**# CALLBACKS #**===----

//---== 1) ==---

var arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var filterCallBack = function (name) {
    return name.length <= 3;
}

var forEachCallBack = function (value) {
    console.log(value);
}

var filteredArr = arr.filter(filterCallBack);
console.log("Filtered Array:");
console.log(filteredArr);
console.log("--------");

console.log("\"Old Array:\"");
arr.forEach(forEachCallBack);
console.log("==========");
console.log("Filtered Array:");
filteredArr.forEach(forEachCallBack);
console.log("END of 1)");

//---== 2) ==---

var uppercased = arr.map(function (x) {
    return x.toUpperCase();
});
console.log("UPPERcased: ")
console.log(uppercased);
console.log("END of 2)");

//---== 3) ==---
var ul = ["Lars", "Peter", "Jan", "Ian"];

var lines = ul.map(function (num) {
    return "<li>" + num + "<li>";
});

var toHTML = "<ul>" + lines.join("") + "</ul>";
console.log(toHTML);
console.log("END of 3)");

//---== 4) ==---
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//--# a) filter #--
console.log(cars.filter(function (data) {
    return data.year > 1999;
}))
console.log("************************************");
console.log(cars.filter(function (data) {
    return data.make === "Volvo";
}))
console.log("************************************");
console.log(cars.filter(function (data) {
    return data.price < 5000;
}))
console.log("************************************");
console.log(cars.filter(function (data) {
    return data.price < 5000;
}))

//--# 4a) #--
var mapped = cars.map(function (data) {
    return "INSERT INTO cars (id,year,make,model,price) VALUES (" + data.id + ", " + data.year + ", '" + data.make + "', '" + data.model + "', " + data.price + ");";
})

//--# 4b) #--
mapped.forEach(function (element) {
    console.log(element);
})


//----===**# Asynchronous CALLBACKS #**===----

//---== this and constructor functions ==---
//--# 1) #--
function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this
    }, 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Explain this

//--# 2) #--
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: " + name);  //What’s different ?

//--# 3) #--
//Using the bind(..) function
function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }.bind(this), 2000);
}

//--# 4) #--
var greeter = function () {
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);




