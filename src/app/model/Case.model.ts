import { CaseSchedule } from "./CaseSchedule";
import { CaseParties } from "./Parties";

export class UserCase {
 id!:number;
 caseTitle : string;
 caseCode:string;
 lawyerFor:string;
 fee:number;
 advance:number;
 balance:number;

 listParties:Array<CaseParties>=[];
<<<<<<< HEAD
 caseschedule:Array<CaseSchedule>[]=[];
=======
>>>>>>> be38abbcb9dfdcf11374573846a855d2256549b3
 
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
