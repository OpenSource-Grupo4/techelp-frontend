export class Client {
  id: number;
  user_id: number;
  name: string;
  lastname: string;
  phone: number;
  address: string;
  photo: string;
  email: string;
  password:  string;
  type: string;

  constructor() {
    this.id = 0;
    this.user_id = 0;
    this.name = '';
    this.lastname = '';
    this.phone = 0;
    this.address = '';
    this.photo = '';
    this.email = '';
    this.password = '';
    this.type = '';
  }
}
