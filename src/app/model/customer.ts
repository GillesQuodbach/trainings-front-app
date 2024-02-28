export class Customer {
  name: string;
  firstName: string;
  address: string;
  phoneNumber: string;
  email: string;
  constructor(
    name: string,
    firstName: string,
    address: string,
    phoneNumber: string,
    email: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
