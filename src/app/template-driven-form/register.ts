export class Register {

  constructor(
    public name: string,
    public email: string,
    public course: string,
    public gender: string,
    public cellPhone?: number,
    public notification?: boolean
  ) {  }

}
