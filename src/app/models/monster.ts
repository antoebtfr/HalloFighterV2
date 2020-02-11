export class Monster {

  public id: number;
  public name: string;
  public image: string;
  public description: string;
  public attack: number;
  public life: number;
  public energy: number;
  public defense: number;

  constructor(input?: Monster) {

    if (input) {
      Object.assign(this, input);
    }
  }
}
