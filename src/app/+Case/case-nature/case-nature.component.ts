import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CaseNature } from 'src/app/model/CaseNature';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'form-case-nature',
  templateUrl: './case-nature.component.html',
  styleUrls: ['./case-nature.component.css']
})
export class CaseNatureComponent implements OnInit {
  @Input() casenature: CaseNature = new CaseNature();
  public objcasenature:any=CaseNature;
  constructor() { }

  ngOnInit(): void {
console.log(this.casenature)
  }
  onSelect(casenature:  CaseNature): void {

    this.casenature = casenature;
  }
  }
