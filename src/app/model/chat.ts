import { ChatSeen } from "./chatseen";

export class Chat {
     plainMessage:string;
     htmlMessage:string;
  id: number;
    Id: number;
    listseen:ChatSeen[]=[];

    constructor() {
   this.plainMessage=''
   this.htmlMessage=''
   this.id=0
   this.Id=0
   this.listseen=[];
    }
  }
  