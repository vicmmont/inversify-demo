import { Vehicle } from "./Vehicle";
import { Engine } from "../engine/Engine";
import { Wheel } from "../wheel/Wheel";
import TYPES from "../../types";

export class Sedan implements Vehicle {
  private wheel: Wheel;
  private engine: Engine;

  constructor(engine: Engine, wheel: Wheel) {
    this.engine = engine;
    this.wheel = wheel;
  }

  public start: () => string = () => {
    return this.engine.start();
  };

  public drive: () => string = () => {
    const energy = this.engine.run();
    return this.wheel.move(energy);
  };

  public stop: () => string = () => {
    return this.wheel.stop();
  };

  public shutDown: () => string = () => {
    return this.engine.shutDown();
  };
}
