import { injectable } from "inversify";
import { Fuel } from "./Fuel";

@injectable()
export class RegularGasoline implements Fuel {
  private name = "regular gasoline";

  public combust: () => string = () => `producing energy with ${this.name}`;
}
