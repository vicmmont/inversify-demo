import { Wheel } from "./Wheel";

export class AllSeasonTire implements Wheel {
  public move: (energy: string) => string = (energy) => {
    return `${energy} and moving the all season tire!`;
  };

  public stop: () => string = () => {
    return "Stopping the all season tire!";
  };
}
