
///2----
// let largest = 0;
// function findLargest(a,b,c) {
//   if(arr > largest )  {
//         arr.sort((a, b) => a - b);
//     return arr[arr.length - 1];
//   }
    // arr.sort((a, b) => a - b);
    // return arr[arr.length - 1]; 
    //Yoki bu bilan ishlasa yaxshi ekan
// }

// findLargest(12,9,15)
// console.log("the largest element is:" + findLargest(arr));

//5----
let butun = -12;

function find(butun) {
    if(butun > 0 ) {
        console.log("son musbat" );
        
    }else if(butun < 0) {
    console.log("son manfiy");
    
    }else {
        console.log("Nothing");
        
    }
}
find(butun);

//6----

let n = 12;
let sum = 0;
function toq_yigindi(n) {
for(let i = 0; i <= n;i++) {
  sum+= i;
}console.log("yig'indi is =" + sum);

}

toq_yigindi(n);

//10----

let temp = 39;


// ----------------------

//1----
 function ishora(a,b,c) {
    if(a > 0) {
        console.log("Musbat");
        
    } else if(a < 0){
  console.log("Manfiy");
  
    }else {
        console.log("bilmadimee");
        
    }
 }
 ishora(1,1);
 
 //2----
function findRoots(A,B,C) {
    return A * x ^ 2 + B * x + C;
}

function myResult(A,B,C) {
    const d = findRoots(A,B,C);

    if (d > 0) {
        const root1 = (-B + Math.sqrt(d)) / (2 * A);
        const root2 = (-B - Math.sqrt(d)) / (2 * A);
        return [root1, root2];
    } else if (d === B) {
        const root = -B / (2 * A);
        return [root];
    } else {
        return [];
    }
    
}

 myResult(3,2,5);

 //3----
 //Pi = 3.1415
 let R = 5;
 function disc(S) {

 }