export class CaseSchedule
{
id!:number;
fixedFor:string;
court:string;
date:number= Date.now();
assignedTo:string;
constructor()
{
    this.id=0;
    this.fixedFor="";
    this.court="";
    this.date=Date.now();
    this.assignedTo="";

}
}