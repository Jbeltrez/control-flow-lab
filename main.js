//  Part 1 
// contained area radius 5meters 
// Formula for calculating area of a circle 
// is PI multiplied by the radius squared
// const PI = 3.1415; 
// const area = PI * radius * radius; 
// min space required by each plant is .8m
// Were starting with 20 plants 
// plants double in number ever other week

// objectives:
// predict plant growth after a specific # 
// of weeks 

// const pi = 3.1415;
// const areaOfGarden = pi * 5 * 5;
// const minSpaceTakenByPlant = .8;
// let startingPlantAmount = 20;
// let startingSpaceTakenUp = 20 * .8;
// let maxCapacity = Math.round(areaOfGarden/ minSpaceTakenByPlant)
// // console.log(maxCapacity);
// // maxCapacity of garden is 98 meters 
// let weekPlants1 = 20; 
// //
// let weekPlants2 = weekPlants1 * 2;
// let weekPlants3 = weekPlants2 * 2;

// function gardenStatus(numofweeks) { 
//     if ( numofweeks > maxCapacity*80) {
//         return "prune the plants"
//     }
//     // if plant count is greater than 80% of max capacity prune plants 
//     // if area * .8 

// }
const PI= 3.1415; //pie radius
let r = 5;   //radius of plants
let A = PI * ((r) **2)  //Area formula
const MiniSpaceArea = 0.8
let WeekPlants1 = 20;
//Part 1 Growing Pains
console.log(A) //total area 78.5375
let maximumCapacity = Math.round(A/ MiniSpaceArea)
console.log(maximumCapacity) // maximum capacity is 98
let weekPlants2 = WeekPlants1 * 2  //40
let weekPlants3 = weekPlants2 * 2 //80
console.log(weekPlants3)
let Pruned = .80 * maximumCapacity //78.4
console.log(Pruned)
let Monitored = .50 * maximumCapacity //49
console.log(Monitored)
//Conditionals
if (weekPlants3 > Pruned) {
    console.log('Prune the garden');
}
else if ( Monitored < weekPlants2  && weekPlants2 < Pruned) {
    console.log('Garden is monitored');
}
else if (weekPlants2 < Monitored) {
    console.log ('Plant more');
}
//Part 2:Thinking Bigger
let str = 100;
let weekPlants10 = str * 2 **10 //102,400 of plants after week 10
console.log(weekPlants10)
let currentSpace = str * MiniSpaceArea //curent space 80
console.log(currentSpace)
let additionalSpace = weekPlants10 * MiniSpaceArea //additional space 81920
console.log(additionalSpace)
 //calculate the radius
// areaOfSqr = pi * r**2
let radiusNeededforWeekPlants10 = Math.sqrt(additionalSpace/PI)
let spaceNeededFor100Plants = 100 * .8 
console.log(spaceNeededFor100Plants); 




// part 2 
// if theres a 100 plants and they dont prune 10 weeks 

// part 3 
// The scientists decided not to listen to your recommendations
// , and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block.
//  If the amount of space required to hold the originally provided number
//   of plants exceeds the amount of space available, throw a new error and log
//    an appropriate message.

try {
    throw (console.log("these plants all dont fit"))
    // Code that might throw an error
  } catch {
    console.log("this is a catch ")
    // Code to handle the error
  } 
