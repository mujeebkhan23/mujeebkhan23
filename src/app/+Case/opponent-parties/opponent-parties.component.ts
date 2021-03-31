import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';

@Component({
  selector: 'app-opponent-parties',
  templateUrl: './opponent-parties.component.html',
  styleUrls: ['./opponent-parties.component.css']
})
export class OpponentPartiesComponent implements OnInit {
  @Input()
  objUserCase: UserCase = new UserCase;
  constructor() { }

  ngOnInit(): void {
  }

}
