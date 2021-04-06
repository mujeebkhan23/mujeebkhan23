export class Groups{
     name:string;
     type:string;
     groupId:number;
    //get this from usertoken via getuserid
   userId:string
    constructor(){
        this.name='',
        this.type=''
        this.userId=''
        this.groupId=0
    }
}