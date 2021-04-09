export class Groups{
   public  name:string;
   public type:string;
   public groupId:number;
   public id:number=0;
   public createdByName:string='';
    //get this from usertoken via getuserid
   userId:string
    constructor(){
        this.name='';
        this.type='';
        this.userId='';
        this.groupId=0;
        this. createdByName='';
    }
}