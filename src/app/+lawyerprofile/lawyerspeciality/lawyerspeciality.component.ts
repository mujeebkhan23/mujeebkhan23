import { Speciality } from './../../model/speciality.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lawyerspeciality',
  templateUrl: './lawyerspeciality.component.html',
  styleUrls: ['./lawyerspeciality.component.css']
})
export class LawyerspecialityComponent implements OnInit {

  @Input() objSpc:Speciality=new Speciality();

  constructor() { }

  ngOnInit(): void {
  }

}
