import { CaseClause } from "./CaseClause";
import { CaseHistory } from "./CaseHistory";
import { CaseNature } from "./CaseNature";
import { CaseSchedule } from "./CaseSchedule";
import { OpponentLawyer } from "./OpponentLawyer";
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
 listSchedule:Array<CaseSchedule>=[];
 listCaseNature:Array<CaseNature>=[];
 listClauses:Array<CaseClause>=[];
 listHistory:Array<CaseHistory>=[];
 listOpponentLawyer:Array<OpponentLawyer>=[];

 
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
