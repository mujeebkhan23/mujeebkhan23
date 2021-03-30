export class Groups{
     name:string;
     type:string;
    //get this from usertoken via getuserid
   userId:string
    constructor(){
        this.name='',
        this.type=''
        this.userId=''

    }
}