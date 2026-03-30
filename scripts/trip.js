//variables for the trip
const driver_name = "Connor Kopp";
const mpg = 20;
const fuel_capacity = 15;
const posible_miles = fuel_capacity * mpg;
let gas_price = 3.5;
let distance_miles = 500;
let total_distance;
let is_round_trip = true;

//is it a round trip?
if (is_round_trip) {
  total_distance = distance_miles * 2;
  console.log(`The total distance of the trip is ${total_distance} miles.`);
} else {
  total_distance = distance_miles;
  console.log(`The total distance of the trip is ${total_distance} miles.`);
}

//functions
function calculateGallonsNeeded(distance, miles_per_gallon) {
  return distance / miles_per_gallon;
}

function calculateFuelCost(gallons_needed, price_per_gallon) {
  return gallons_needed * price_per_gallon;
}

//Create a loop that outputs to the console when you'll have to stop for gas while traveling toward the destination
//Each stop includes:
//The stop number
//The miles traveled so far
//A running total estimate of how much you've spent on gas
if (total_distance > posible_miles) {
  let stop_number = 1;
  let miles_traveled = 0;
  let total_gas_cost = 0;

  while (miles_traveled < total_distance) {
    miles_traveled += posible_miles;
    if (miles_traveled > total_distance) {
      miles_traveled = total_distance; // Adjust for the last leg of the trip
      break;
    }
    total_gas_cost += calculateFuelCost(fuel_capacity, gas_price);
    console.log(
      `Stop ${stop_number}: Miles traveled so far: ${miles_traveled} miles, Total gas cost: $${total_gas_cost.toFixed(2)}`,
    );
    stop_number++;
  }
} else {
  console.log("You can make it to your destination without stopping for gas!");
}

//Using console.log(), print a short final summary that includes:
//Driver name
//Total distance
//Estimated gallons needed
//Estimated total cost
console.log("Final Summary:");
console.log(`Driver Name: ${driver_name}`);
console.log(`Total Distance: ${total_distance} miles`);
console.log(
  `Estimated Gallons Needed: ${calculateGallonsNeeded(total_distance, mpg).toFixed(2)}`,
);
console.log(
  `Estimated Total Cost: $${calculateFuelCost(calculateGallonsNeeded(total_distance, mpg), gas_price).toFixed(2)}`,
);
