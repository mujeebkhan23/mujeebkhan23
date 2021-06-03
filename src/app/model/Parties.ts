 export class  CaseParties{
    id!:number;
    partyType:string;
    name:string;
    fatherName:string;
    address:string;
    contact:string;
    listParties: any;
     //listOpp:any;

    constructor()
    {
        this.id=0;
        this.partyType="";
        this.name="";
        this.fatherName="";
        this.address="";
        this.contact="";
    }
 }

