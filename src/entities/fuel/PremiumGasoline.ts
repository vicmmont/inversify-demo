import { injectable } from "inversify";
import { Fuel } from "./Fuel";

@injectable()
export class PremiumGasoline implements Fuel {
  private name = "Premium Gasoline";

  public combust: () => string = () => {
    return `creating energy with ${this.name}`;
  };
}
