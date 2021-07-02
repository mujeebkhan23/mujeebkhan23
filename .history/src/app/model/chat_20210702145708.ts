import { ChatSeen } from "./chatseen";

export class Chat {
     PlainMessage:string;
     htmlMessage:string;
     groupId:number=0;
     createdBy:string='';
     createdByName:string='';
     addedDate:Date = new Date();
  id: number;
    Id: number;
    listseen:ChatSeen[]=[];

    constructor() {
   this.PlainMessage=''
   this.htmlMessage=''
   this.id=0
   this.Id=0
   
   this.listseen=[];
    }
  }
  