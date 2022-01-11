let num = [-3,5,1,3,2,10];
let max = num[0];
let index = 0;

for(let i=1;i < num.length;i++){
    if (num[i]>max){
        max = num[i];
        index = i;
    }
}
alert("max: " + max + " at position " + index);