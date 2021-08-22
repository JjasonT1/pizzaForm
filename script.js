/*Alert box for empty username.
value == "" indicate if user have left this blank, an alert box
will warn the user to enter username.
*/
function validateInfo() {
  if (document.getElementById('name').value == "") {
    alert ('Please provide username!');
    document.getElementById('name').style.borderColor = "red";
    return false;
  }
  
  // Alert box for password not being 7 digit.
  // value < 7 = value is less than 7 will trigger the alert box.
  else if (document.getElementById('password').value < 7) {
    alert ('Password is too short! Please enter 7 digit password.');
    document.getElementById('password').style.borderColor = "red";
    return false;
  }

  /* Alert box to warn user that quantity must be in numeric*/ 
  var letters = /^[A-Za-z]+$/; //declare letter is alphabet.
  if (document.getElementById('quantity').value.match(letters || 0)) {
  alert ('Must be numeric!');
  document.getElementById('quantity').style.borderColor = "red";
  return false;
}

/* Prompt box to ask user to enter the dicount code*/ 
  if (document.getElementById('discount').value !="extracheese") {
    prompt ('Enter extracheese for whopping 10% discount!');
    document.getElementById('discount').style.borderColor = "red";
    return true;
  }
  else {
    alert('Incorrect Code');
  }return false;
}

function calTotal(){
  var purchase = document.getElementById('result').value;
  
  var multiply1 = 5;
  var multiply2 = 7;
  var multiply3 = 17;
  var dicountCode = 0.1;

  r1 = multiply1 * dicountCode;
  r1 = multiply2 * dicountCode;
  r1 = multiply3 * dicountCode;

  if (r1) {
    alert('Large pizza is €5 with dicount code of 10% that will be a total of €4.50.-----------' + 'Extra-large pizza is €7 with dicount code of 10% that will be a total of €6.30.----------' + 'Supersize pizza is €17 with dicount code of 10% that will be a total of €15.30.');
  }
}

/*---Attempt 5 for Calculating Total---
function calTotal() {
    var calculator = 
    {
    multiply1: document.getElementById('multi1');
    multiply2: document.getElementById('multi2');
    f_result: document.getElementById('result');
    }

  calculator.clear.onclick = function() 
  {
    calculator.multiply1.value = "";
    calculator.multiply2.value = "";
    calculator.result.value = "";
    console.log(result=0);
  }

  calculator.calculate.onclick = function() {
    var finalResult = calculator.multiply1.value * calculator.multiply2.value;
    console.log(finalResult);
  }
}*/


  /* ---Attempt 4 for Calculating total---
  function calTotal(){
    a = Number (document.calculator.num1.value);
    b = Number (document.calculator.num2.value);
    c = a * b;
    document.calculator.total.value = c;
  }*/
  /* ---Attempt 3 for Calculating Total---
  function totalPrice() {
  
    let large = document.getElementById('largePizza').value == 5;
    let extraLarge = document.getElementById('extraLargePizza').value == 7;
    let supersize = document.getElementById('supersizePizza'). == 17;
    
    result1 = large * 0.1;
  
      console.log('resul1');
  }*/
  /* ---Attempt 2 for Calculating Total---
  function totalPrice('large', 'extralarge','supersize', 'discountCode') {
  
    let large = 5;
    let extralarge = 7;
    let supersize = 15;
    let discountCode = 0.1;
  
    result1 = large * discountCode;
    result2 = extralarge * discountCode;
    result3 = supersize * discountCode;
  
  if ( confirm(document.getElementById('large').value == 5)) {
    console.log('result1');
  } else if (confirm(document.getElementById('extra-large').value == 7)) {
    console.log('result2');
  } else if (confirm(document.getElementById('supersize').value == 15)) {
    console.log('result3');
  } else {
    alert('Please select a pizza size');
  } */
  /* ---Attempt 1 for Calculating Total---
  function totalPrice() {
    var discountCode = 0.1;
    var totalForLarge = 5;
  
    if (document.getElementById('largePizza').checked) {
    if (confirm(totalForLarge = totalForLarge * discountCode));
    }
    else if (document.getElementById('extraLargePizza').checked) {
      total = total + 7;
    }
    else if (document.getElementById('supersizePizza').checked) {
      total = total + 17;
    }
    else {
      alert ("You have not selected a size, please choose one");
      document.getElementById('sizes').style.borderColor = "red";
      return false;
    }
  }*/
  /*---Attempt 1---:Trying to figure how how to alert user if input is not numeric*/
  /*function checkInputIsNumber() {
    var value=document.forms["checkingInput"]["quantity"].value;
    if (isNaN(value)){
      alert("Please Provide the input as a number");
      return false;
    }
  }
  
  
  ---Attempt 2---
  if (document.getElementById('quantity').value === !/^[0-9]+$/) {
    alert ('Must be numeric!');
    document.getElementById('quantity').style.borderColor = "red";
    return false;
  }
}*/ 

/* ---Attempt 4 for Calculating total---
function calTotal(){
  a = Number (document.calculator.num1.value);
  b = Number (document.calculator.num2.value);
  c = a * b;
  document.calculator.total.value = c;
}*/


/* ---Attempt 3 for Calculating Total---
function totalPrice() {

  let large = document.getElementById('largePizza').value == 5;
  let extraLarge = document.getElementById('extraLargePizza').value == 7;
  let supersize = document.getElementById('supersizePizza'). == 17;
  
  result1 = large * 0.1;

    console.log('resul1');
}*/


/* ---Attempt 2 for Calculating Total---
function totalPrice('large', 'extralarge','supersize', 'discountCode') {

  let large = 5;
  let extralarge = 7;
  let supersize = 15;
  let discountCode = 0.1;

  result1 = large * discountCode;
  result2 = extralarge * discountCode;
  result3 = supersize * discountCode;

if ( confirm(document.getElementById('large').value == 5)) {
  console.log('result1');
} else if (confirm(document.getElementById('extra-large').value == 7)) {
  console.log('result2');
} else if (confirm(document.getElementById('supersize').value == 15)) {
  console.log('result3');
} else {
  alert('Please select a pizza size');
} */


/* ---Attempt 1 for Calculating Total---
function totalPrice() {
  var discountCode = 0.1;
  var totalForLarge = 5;

  if (document.getElementById('largePizza').checked) {
  if (confirm(totalForLarge = totalForLarge * discountCode));
  } 
  else if (document.getElementById('extraLargePizza').checked) {
    total = total + 7;
  }
  else if (document.getElementById('supersizePizza').checked) {
    total = total + 17;
  }
  else {
    alert ("You have not selected a size, please choose one");
    document.getElementById('sizes').style.borderColor = "red";
    return false;
  }
}*/


/*---Attempt 1---:Trying to figure how how to alert user if input is not numeric*/
/*function checkInputIsNumber() {
  var value=document.forms["checkingInput"]["quantity"].value;
  if (isNaN(value)){
    alert("Please Provide the input as a number");
    return false;
  }
}


---Attempt 2--- 
if (document.getElementById('quantity').value === !/^[0-9]+$/) {
  alert ('Must be numeric!');
  document.getElementById('quantity').style.borderColor = "red";
  return false;
}*/