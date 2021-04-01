import { Affiliation } from "./affiliation.model";

 
export class Lawyer {
  id!: number;
  fileId:string;
 title: string;
 name:string;
 residentialAddress:string;
 courtAddress:string;
  officeAddress:string;
  contactNumber:string;
  mobileNumber:string;
  email: string;
  cnic:string;
  webSite:string;
  barcouncil:string;
  barNumber:string;
  shares:string;
  imagePath:string;
  affiliations: Array<Affiliation>=[];
  constructor()
  {
    this.id=0;
    this.fileId="";
    this.title="";
    this.name="";
    this.residentialAddress="";
    this.courtAddress="";
    this.mobileNumber="";
    this.officeAddress="";
    this.barcouncil="";
    this.email="";
    this.cnic="";
    this.contactNumber="";
    this.webSite="";
    this.barNumber="";
    this.shares=""; 
    this.imagePath="";
   // this.affiliations =[] ;
  }
}


       


