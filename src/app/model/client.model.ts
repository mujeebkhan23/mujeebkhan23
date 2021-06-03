export class Client {
  id!: number;
  name: string;
  fatherName: string;
  address:string;
  city:string;
  postalCode:string;
  country:string;
  ntn:string;
  email: string;
  cnic:string;
  contactNumber:string;
  
  constructor()
  {
    this.id=0;
    this.name="";
    this.fatherName="";
    this.address="";
    this.city="";
    this.postalCode="";
    this.country="";
    this.ntn="";
    this.email="";
    this.cnic="";
    this.contactNumber=""; 
  }
}
