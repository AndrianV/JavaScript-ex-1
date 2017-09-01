//a) Creating the two Arrays
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanne", "Sanne"];
console.log("---== Creating the arrays: ==---");

//b) Concatenation
var all = boys.concat(girls);
console.log("---== concat() : ==---");
console.log(all);

//c) Join with deliminator
var stringComma = all.join(', ');
var stringHyphen = all.join(' - ');
console.log("---== join() : ==---");
console.log(stringComma);
console.log(stringHyphen);

//d) Add elements to the end
all.push("Lone", "Gitte");
console.log("---== push() : ==---");
console.log(all);

//e) Add elements to the front
all.unshift("Hans", "Kurt");
console.log("---== unshift() : ==---");
console.log(all);

//f) Remove first name
console.log("---== Remove the First name : ==---");
all.shift();
console.log(all);

//g) Remove last name
all.pop();
console.log("---== Remove the Last name : ==---");
console.log(all);

//h) Remove Ole and Janne from the middle of the Array
all.splice(3, 2);
console.log("---== Splice : ==---");
console.log(all);

//i) Reverse the Array
all.reverse();
console.log("---== Reverse : ==---");
console.log(all);

//j)Sort the Array
all.sort();
console.log("---== Sort : ==---")
console.log(all);

//k)User-defined sort algorithm

var userSort = all.sort(function (a, b) {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})
console.log("---== User-defined Sort : ==---");
console.log(userSort);

//l)Convert to UPPERcase
var formattedUPPER = all.map(function (x) {
    return x.toUpperCase();
});
console.log("---== UPPERcase : ==---");
console.log(formattedUPPER);

//m)new Array containing names with l or L
function filterArrayWith(givenitem){
    return all.filter(function(elem){
        return elem.toLowerCase().indexOf(givenitem.toLowerCase()) == 0;
    })
}

console.log("---== Filtered with lowercase \"l\" : ==---");
console.log(filterArrayWith('l'));
console.log("---== Filtered with capital \"L\" : ==---");
console.log(filterArrayWith('L'));