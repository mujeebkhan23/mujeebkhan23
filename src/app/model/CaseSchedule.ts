export class CaseSchedule
{
id!:number;
fixedFor:string;
court:string;
dateTime: Date;
assingedTo:string;
constructor()
{
    this.id=0;
    this.fixedFor="";
    this.court="";
    this.dateTime= new Date();
    this.assingedTo="";

}
}