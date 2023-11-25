const radius =5;
const PI = 3.1415;
const area = PI * radius * radius;
let spaceRequire = 0.8;
let initialPlants = 20;
let maxCapacity = area/spaceRequire;

function calculatePlantGrowth(numWeek) {
let numPlantAfterNumWeek = initialPlants * Math.pow(2, numWeek);

if (numPlantAfterNumWeek > maxCapacity) {
    numPlantAfterNumWeek = maxCapacity;
}
console.log(numPlantAfterNumWeek);

if (numPlantAfterNumWeek > .8 * maxCapacity) {
    console.log('Pruned');
} else if (numPlantAfterNumWeek > 0.5 * maxCapacity && numPlantAfterNumWeek < 0.8 * maxCapacity) {
    console.log('Monitor');
} else if (numPlantAfterNumWeek < 50) {
    console.log('Planted');
}

}

calculatePlantGrowth(1);
calculatePlantGrowth(2);
calculatePlantGrowth(3);