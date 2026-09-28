/* for(let i = 0; i <= 10; i ++){
    console.log(i);
} */


/* for(let i = 0; i <= 10; i ++){
    console.log(`5 x ${i} = ${5*i}`);
} */
/* let total = 0;
for(let i = 0; i <= 100; i ++){
    total += i;
} 
console.log(total);
 */


/*  for(let i = 0; i <= 50; i ++)
    if(i % 2 == 0)
console.log(i); */

/* for(let i = 10; i > 0; i--){
    console.log(i);   
} */
/*  let res = 1;

 for(let i = 5; i > 1; i--){
    res *= i;
    console.log(res);
 }
 */
let voltas = 20
for(let i = 1; i <= voltas; i++){
    if(i % 2 != 0){ 
        console.log(" ".repeat(voltas - i/2) + "*".repeat
    (i));
    }
}