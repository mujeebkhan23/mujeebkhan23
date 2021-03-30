
export class UserCase {
  id?:number;
 title : string;
 status:string;
 fee:number;
 advance:number;
  balance:number;
 note:string;
 lawyerFor:string;
 constructor()
 {
 this.id=0;
  this.title="" ;
  this.status="";
  this.fee=0;
  this.advance=0;
  this.balance=0;
  this.note="";
  this.lawyerFor="";
 }
}
