import { ChatService } from './../service/chat.service';
import { Component, OnInit } from '@angular/core';
import { Chat } from '../model/chat';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Groups } from '../model/groups';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent implements OnInit {

  //object of class
  public listchat: Chat[]=[];
 
	public objchat:any= Chat;

    public listgroup: Groups[]=[];
  
  subscription: any=Subscription;

  //for hiding controll
public mode:string="List";//Form 
       
  constructor(
    private route: ActivatedRoute,
    private router: Router,
   
    private chatService: ChatService, private toastr: ToastrService,
   
    
    ) {
    }
    ngOnInit() {
     
this.getData();
    }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

  //get all records
getData():void {
    this.chatService.getAll().subscribe(res => {
        this.listchat= res;
console.log(res)
    }, error => console.log(error));

    this.objchat=new  Chat();		
}
onCreate(objchat: Chat): void {
    if(this.objchat.Id == "undefined" || this.objchat.Id == 0) {
        this.chatService.create(objchat).subscribe(res => {
                this.getData();
                this.toastr.success("Message send successfully","Message");
                 console.log('User Profile Data Saved'); },
            error => {console.log('User Profile Data could not be saved');
            this.toastr.error("Error", "User Profile Data Couldn't Save");
            console.log(error);});        
    }
    this.mode="List";
}




onSelect(objchat: Chat): void {

    this.objchat = objchat;	
    	
}
// onSelectGroup(listgroup:Groups):void{
//     this.listgroup=listgroup;
//     console.log(this.listgroup);
    
// }


onDelete(objchat: Chat): void {
    
this.chatService.Delete(objchat.id)
 .subscribe(response => {
            this.getData();
            this.toastr.success("Success","Record [ID:"+objchat.id+"] deleted successfully");
    //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
            console.log("data delete success");
        },
        error => {
            this.getData();
    this.toastr.error("Error", "Error deleting record [ID:"+objchat.id+"]");
            console.log("data delete error");
        });  
}
newData(): void {
    this.objchat = new Chat();
}
onCancel():void{
    this.newData();
    this.mode="List";
}

}
