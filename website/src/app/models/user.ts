export class User
{
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;

  constructor(id, firstName, lastName, birthDate, gender)
  {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
  }
}
