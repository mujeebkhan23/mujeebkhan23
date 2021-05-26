import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { OpponentLawyer } from 'src/app/model/OpponentLawyer';

@Component({
  selector: 'app-opponent-lawyer',
  templateUrl: './opponent-lawyer.component.html',
  styleUrls: ['./opponent-lawyer.component.css']
})
export class OpponentLawyerComponent implements OnInit {
  @Input()
opponentlawyer: OpponentLawyer = new OpponentLawyer();
  constructor() { }

  ngOnInit(): void {
  }

  
}
