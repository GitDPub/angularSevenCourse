export interface IUser {
  name: string;
  code: number;
  role: string;
  ready: boolean;
  incomes: Array<any>;
  exits: any[];
  general: {};
  getData(): string;
  toString();
}
