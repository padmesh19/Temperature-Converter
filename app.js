/*...
Accessing html elements
...*/

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");



/* ... 
This section defines the type of conversion
...*/

function converttype1(){
    let iniVal = Number(input1.value);
    let type = 1;
    if (select1.value == select2.value) {
        input2.value = input1.value;
    } else if (select1.value == 'celsius') {
        if (select2.value == 'fahrenheit') {
            ctoF(iniVal,type);
        } else  {
            ctoK(iniVal,type);
        }
    }else if (select1.value == 'fahrenheit') {
        if (select2.value == 'celsius') {
            ftoC(iniVal,type);
        } else  {
            ftoK(iniVal,type);
        }
    } else {
        if (select2.value == 'celsius') {
            ktoC(iniVal,type);  
        } else  {
            ktoF(iniVal,type);
        }
}
}

function converttype2(){
    let iniVal = Number(input2.value);
    let type = 2;
    if (select2.value == select1.value) {
        input1.value = input2.value;
    } else if (select2.value == 'celsius') {
        if (select1.value == 'fahrenheit') {
            ctoF(iniVal,type);
        } else  {
            ctoK(iniVal,type);
        }
    }else if (select2.value == 'fahrenheit') {
        if (select1.value == 'celsius') {
            ftoC(iniVal,type);
        } else  {
            ftoK(iniVal,type);
        }
    } else {
        if (select1.value == 'celsius') {
            ktoC(iniVal,type);  
        } else  {
            ktoF(iniVal,type);
        }
}
}



/* ... 
This section has the formula for the conversion
...*/

function ctoF(iniVal,type) {
    let resVal = (iniVal * 9/5) + 32;
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}

function ctoK(iniVal,type){
    let resVal = iniVal + 273.15;
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}

function ftoC(iniVal,type){
    let resVal = 5/9 * (iniVal-32);
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}

function ftoK(iniVal,type){
    let resVal = (iniVal +459.67) * 5/9;
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}

function ktoC(iniVal,type){
    let resVal = iniVal - 273.15;
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}

function ktoF(iniVal,type){
    let resVal = (iniVal - 273.15) * 9/5 +32;
    if (type == 1){
        convert1(resVal);
    }else{
        convert2(resVal);
    }
}



/* ... 
This section changes the html content after the result value
...*/

function convert1(resVal) {
    if (input1.value == "") {
      input2.value = "";
    } else {
      let result = resVal - Math.floor(resVal) !== 0;
      if (result == true) {
        input2.value = resVal.toFixed(1);
      } else {
        input2.value = resVal;
      }
    }
  }
  
  function convert2(resVal) {
    if (input2.value == "") {
      input1.value = "";
    } else {
      let result = resVal - Math.floor(resVal) !== 0;
      if (result == true) {
        input1.value = resVal.toFixed(1);
      } else {
        input1.value = resVal;
      }
    }
  }