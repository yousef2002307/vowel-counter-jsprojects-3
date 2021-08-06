///define vowels
let vowels = ['a','i','e','o','u','A','E','I','O','U'];
/* 
check
if('u' === 'U'){
    console.log("matched");
}else{
    console.log("not matched");
}
*/
/// get input value when clicking button
let button = document.querySelector("button");
let input = document.querySelector("textarea");
button.onclick = function(){
    var count = 0;
   let inputvalue = input.value;
   /// create array from input value
   let inputvaluearray = inputvalue.split("");
   //console.log(inputvaluearray);
   inputvaluearray.forEach(ele => {
      //  console.log(ele);
      //create check  for loop to see if the letter is vowel or not
        for(var i =0; i < vowels.length; i++){
            if(ele == vowels[i]){
                count++;
            
            }
        }
   });
   console.log(count);
   alert(`there is ${count} vowels`);
   input.value = '';
}





