// console.log(
//  "Hello Javascript"
// )
// age =24;
// isFollow=true;
// console.log(isFollow);
var a=1;
let b=2;
const c =3;
{
    var a=10;
        b=20;
    const c=30;
    console.log(a)
    console.log(b)
    console.log(c)
}
function greet(){
    var a=1000;
       b=30;
    const c=3;
    console.log(a);
    console.log(b);
    console.log(c);
}
greet()
console.log(`Outside function ${a}`)
console.log(`Outside function ${b}`)
console.log(`Outside function ${c}`)