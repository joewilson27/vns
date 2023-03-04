export class Shape {

  // private _x: number;
  // private _y: number;

  constructor(private _x: number, private _y: number){

  }

  public get_x(): number {
      return this._x;
  }

  public set_x(value: number): void {
      this._x = value;
  }

  public get_y(): number {
      return this._y;
  }

  public set_y(value: number): void {
      this._y = value;
  }

  getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

}