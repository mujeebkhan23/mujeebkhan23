import { CaseParties } from "./Parties";

export class UserCase {
 id!:number;
 caseTitle : string;
 caseCode:string;
 lawyerFor:string;
 fee:number;
 advance:number;
 balance:number;

 parties:Array<CaseParties>=[];
 
 constructor()
 {
 this.id=0;
 this.caseTitle="";
 this.caseCode="";
 this.lawyerFor="";
 this.fee=0;
 this.advance=0;
 this.balance=0;
 
 }
}
