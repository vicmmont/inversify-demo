import { injectable, inject } from "inversify";
import { Engine } from "./Engine";
import { Fuel } from "../fuel/Fuel";
import { TYPES } from "../../types";

@injectable()
export class SixCylinderEngine implements Engine {
  private name = "6CL Engine";
  private fuel: Fuel;

  constructor(@inject(TYPES.Fuel) fuel: Fuel) {
    this.fuel = fuel;
  }

  public start: () => string = () => {
    return `${this.name} is ${this.fuel.combust()}`;
  };

  public run: () => string = () => {
    return `${this.name} is ${this.fuel.combust()}`;
  };

  public shutDown: () => string = () => {
    return `Shutting down the ${this.name}`;
  };
}
