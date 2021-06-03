export class CaseHistory
{
id!:number;
date:number= Date.now();
result:string;
decision:string;
constructor()
{
    this.id=0;
    this.date=Date.now();
    this.result="";
    this.decision="";

}
}
