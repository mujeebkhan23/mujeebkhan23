export class User {
  id: string;
  username: string;
  password: string;
  fullname: string;
  confirmpassword:string;
  profilePicture:string;
  email: string;
  token: string;
  Data: any;
  data: any;
  constructor()
  {

    this.fullname="";
    this.username="";
    this.password="";
    this.confirmpassword="";
    this.id="";
    this.email="";
    this.token="";
    this.profilePicture="";
  }
}
