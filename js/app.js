'use strict';

alert('Welcome to my page');

let name=prompt('What is your name ?');
alert('Nice to meet you ' + name );
console.log('Nice to meet you', name);

let age =prompt('Are you 30 years old?');
age = age.toLowerCase();
if(age === 'yes' || age === 'y'){
 alert('you are welcom'); 
console.log(age);
}else{
    alert(' Sorry, you\'r young person'); 
    console.log(age);
}

let car= prompt('Do you have a car ?');
car=car.toLowerCase();
if(car === 'yes' || car === 'y'){
  alert('congratulation  ' );
  console.log(car);
}else{
    alert('I hope to own one ' );
  console.log(car);
}


let feelings=prompt('Are you good ?');
feelings=feelings.toLocaleLowerCase();
if(feelings === 'yes' || feelings === 'y' ){
alert('glad you are good' );
console.log(feelings);
}else{
    lert(' I am sad for you');
    console.log(feelings);  
}

alert('I honor to know you');
