import { Container } from "inversify";
import { TYPES } from "./types";

import { AllSeasonTire, Wheel } from "./entities/wheel";
import { Fuel, RegularGasoline, PremiumGasoline } from "./entities/fuel";
import { Vehicle, Sedan } from "./entities/vehicle";
import {
  Engine,
  FourCylinderEngine,
  SixCylinderEngine
} from "./entities/engine";

const myContainer = new Container();
myContainer.bind<Fuel>(TYPES.Fuel).to(RegularGasoline);
myContainer.bind<Wheel>(TYPES.Wheel).to(AllSeasonTire);
myContainer.bind<Engine>(TYPES.Engine).to(FourCylinderEngine);
myContainer.bind<Vehicle>(TYPES.Vehicle).to(Sedan);

// const getRandomInt = () => Math.floor(Math.random() * 2);

export { myContainer };
