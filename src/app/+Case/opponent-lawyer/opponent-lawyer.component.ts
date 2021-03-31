import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';

@Component({
  selector: 'app-opponent-lawyer',
  templateUrl: './opponent-lawyer.component.html',
  styleUrls: ['./opponent-lawyer.component.css']
})
export class OpponentLawyerComponent implements OnInit {
  @Input()
  objUserCase: UserCase = new UserCase;
  constructor() { }

  ngOnInit(): void {
  }

  
}
