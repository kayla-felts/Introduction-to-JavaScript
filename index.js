/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
if(votingAge < 18){
    console.log(true);
}else{
    console.log(false);
}

//var votingAge = 18;
//console.log(age > 18);

//const votingAge = 18;
//var age = 25;
//console.log(age > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const aString = "1999";
const toInterger = parseInt(aString);
console.log(toInterger)



//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a*b;
}
console.log(multiply(2,3));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogAge(human,dog){
    return human*dog;
}
console.log(dogAge(25,7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(age,weight){
    if(weight <=5){
      return weight*0.05;
    }else if(weight >=6 && weight<=10){
      return weight*0.04;
    }else if(weight >=11 && weight<=15){
      return weight*0.03;
    }else{
      return weight*0.02;
    }
    
    if(age >=0.16 && age<0.33){
      return age*0.10;
    }else if(age>=0.33 && age<0.58){
      return age*0.05;
    }else if(age>=0.58 && age <1){
      return age*0.04;
    }else{
      return age*weight;
    }
  }
  
  console.log(dogFeeder(1,15))




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var myChoice = 'paper'
let randNum = Math.floor(Math.random() * 3);
function comChoices(){
  if(randNum === 1){
  return 'rock';
  }else if(randNum === 2){
    return 'paper';
  }else{
    return 'scissors';
  }
}
let comChoice = (comChoices());

if(myChoice === 'rock' && comChoice === 'scissors'){
    console.log('Rock v Scissors. You Win');
  }else if(myChoice === 'scissors' && comChoice === 'paper'){
   console.log('Scissors v Paper. You win!');
  }else if(myChoice === 'paper' && comChoice === 'rock'){
    console.log('Paper v Rock. You win!');
  }else if(myChoice === 'rock' && comChoice === 'paper'){
    console.log('Rock v Paper. You lose!');
  }else if(myChoice === 'paper' && comChoice === 'scissors'){
    console.log('Paper v Scissors. You Lose!');
  }else if(myChoice === 'scissors' && comChoice === 'rock'){
    console.log('Scissors v Rock. You Lose!');
  }else if(myChoice === 'rock' && comChoice === 'rock'){
    console.log('Rock v Rock. Tie!');
  }else if(myChoice === 'paper' && comChoice === 'paper'){
    console.log('Paper v Paper. Tie!');
  }else if(myChoice === 'scissors' && comChoice === 'scissors'){
    console.log('Scissors v Scissors. Tie!');
  }else{
    console.log('Oops, what happened?');
 }

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmtoMiles(km){
    return km/1.60934;
}
console.log(kmtoMiles(1))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feettoCM(feet){
    return feet*30.48;
}

console.log(feettoCM(1))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
for(let i = 99; i >= 0; i--){
     console.log(`${i}bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`);
     }


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradeCalc(grade){
    if(grade >= 90 && grade <=100){
      return 'A'
    }else if(grade >= 80 && grade <= 89){
      return 'B'
    }else if(grade >= 70 && grade <=79){
      return 'C'
    }else if(grade >= 60 && grade <= 69){
      return 'D'
    }else{
      return 'F'
    }
  }
  console.log(gradeCalc(63))

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





