#!/usr/bin/env node

'use strict';

let input = process.argv;
let output; 
let [,,...b] = input; 


const total = (a,b)=>{
   return +a + +b;
};
   
const getTotal = ()=>{
    output = b.reduce(total);
    return output;
};
        
const write=()=>{ 
    process.stdout.write(output + "\n");
} 

getTotal(input);
write(output);