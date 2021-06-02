import { Speciality } from './speciality.model';
import { License } from './license.model';
import { Affiliation } from "./affiliation.model";

 
export class Lawyer {
  id!: number;
  imageFileId:number;
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
  listLawyerAffiliation: Array<Affiliation>=[];
  listLawyerLicense:Array<License>=[];
  listLawyerSpeciality:Array<Speciality>=[];
  constructor()
  {
    this.id=0;
    this.imageFileId=0;
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
    // this.listLawyerAffiliation =[] ;
  }
}


       


