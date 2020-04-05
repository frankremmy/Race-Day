let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 22;
if (registeredEarly && age > 18){
  raceNumber += 1000
};
if (registeredEarly && age > 18){
  console.log(`Participant no ${raceNumber}. Your race will begin at 9:30 am.`)
}else if(!registeredEarly && age > 18){
  console.log(`Participant no ${raceNumber}. Your race will begin at 11:00 am.`)
} else if(age < 18){
  console.log(`Participant no ${raceNumber}. Your race will begin at 12:30 pm.`)
}else{
  console.log("See the registeration desk")
}
