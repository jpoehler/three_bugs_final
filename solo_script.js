// ! ! !
// Three Bugs
var peopleArray = [];

$(document).ready(function(){
  for(var i = 0; i < peopleArray.length; i++){
    var employee = peopleArray[i];
    employee = calculateSTI(employee);
    appendDom(peopleArray[i]);
  }
});

var arrayAtticus = new Person('Atticus', '2405', '47000', 3);
var arrayJem = new Person('Jem', '62347', '63500', 4);
var arrayBoo = new Person('Boo', '11435', '54000', 3);
var arrayScout = new Person('Scout', '6243', '74750', 5);

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

function Person(name, employeeNumber, salary, reviewScore) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.reviewScore = reviewScore;
  peopleArray.push(this);
}

console.log(peopleArray);

//Create variables used to write to the DOM
var newEl, newText, position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
//
/*	bugArray[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(bugArray[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}*/

function calculateSTI(peopleArray){

  var employeeNumber = peopleArray.employeeNumber;
  var baseSalary = parseInt(peopleArray.salary);
  var reviewScore = peopleArray.reviewScore;

console.log (baseSalary);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  //peopleArray.name = name;
  peopleArray.bonusPercent = bonus;
  peopleArray.totalSalary = Math.round(baseSalary * (1.0 + bonus)); //added Math.round
  peopleArray.totalBonus = baseSalary * bonus;
  console.log(peopleArray.name + " " + peopleArray.bonusPercent + " " + peopleArray.totalSalary + " " + peopleArray.totalBonus);
  return peopleArray;
}


function getBaseSTI(reviewScore){
  var basePercent = 0;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
    case 0:
       basePercent = 0;
       break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

function appendDom(object){
  $('.container').append('<div class="bonus"></div>');

  var $el = $('.container').children().last();

  $el.append('<h3>Hello, ' + object.name + '. Congratulations on a job well done!' + '</h3>');
  $el.append('<p>Your base salary: $' + object.salary + '</p>');
  $el.append('<p>Your total salary, including your bonus: $' + object.totalSalary + '</p>');
  $el.append('<p>Your total bonus: $' + object.totalBonus + '</p>');

}
