console.log("Welcome to  Unocarrer")

// document.body.innerHTML=" Hello Good Morning javascript"

let a=300;
let b=400;
console.log("Before swaping of a and b");
console.log("a="+a +"and"+"b="+b);
let t;
t=a;
a=b;
b=t;
console.log("Afer swaping of a and b");
console.log("a="+a +"and"+"b="+b);

//Find max and min

let x=500, y=600,z=700;
let max,min;

if(x>y){
max=x;
min=y;
}
else{
    max=y;
    min=x
}
if(z>max) max=z;
if(z<min) min=z;
console.log("max="+max);
console.log("min="+min);
