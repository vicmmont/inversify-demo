import "reflect-metadata";

import { myContainer } from "./inversify.config";
import { Vehicle } from "./entities/vehicle/Vehicle";
import { TYPES } from "./types";

const myCar: Vehicle = myContainer.get<Vehicle>(TYPES.Vehicle);

// The car is going for a ride!
console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.stop());
console.log(myCar.shutDown());
