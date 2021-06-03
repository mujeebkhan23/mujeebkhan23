import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Subscription } from 'rxjs';
import { MessageService } from './service/intermsgsrv';
import { SignalRService } from './service/notificataion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private signalRSubscription: Subscription = new Subscription;
  
  data:any;
  public customLayout!: boolean;
  public subscription: Subscription = new Subscription;
  constructor(private layoutService: LayoutService,public signalRService: SignalRService,  private messageService: MessageService) {}
//   PublishMsg():void{
//     this.messageService.sendMessage('Hello I am Publisher');
//    // this.messageService.clearMessage();
//   }

//   publishDataMsg():void{
// let record={name:'Ali',age:'5th'}
// this.messageService.sendMessageWithData("Student: ",record);
//   }

//   ClearMsg():void{
//     this.messageService.clearMessage();
//   }
  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.getServerMessageListener();
    // this.signalRService.sendMessage();
    //this.signalRService.stopConnection();
    
    // this.subscription = this.signalRService.getServerMessageListener().subscribe(data => 
    //   { this.data = data
    //   console.log(data)
    // });

  
   // this.signalRService.addTransferChartDataListener();   
    this.layoutService.isCustomLayout.subscribe((value) => {
      this.customLayout = value;
      
    });
  }
}
