export class Chat {
    id: string;
    username: string;
    password: string;
    fullname: string;
    confirmpassword: string;
    email: string;
    token: string;
    data: any;
    constructor() {
      this.fullname = '';
      this.username = '';
      this.password = '';
      this.confirmpassword = '';
      this.id = '';
      this.email = '';
      this.token = '';
    }
  }
  