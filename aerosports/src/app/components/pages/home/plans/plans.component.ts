import { Component,Input, OnInit } from '@angular/core';
import { Aerosports } from 'src/app/components/models/aerosports';
import { CommonService } from 'src/app/components/services/common.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  @Input()
  public pagetype:string='';
  
  
  public currentPage!: Aerosports;
  constructor(public commonService:CommonService) {console.log('inside appplan constru'); }

  ngOnInit(): void {
    this.currentPage = this.commonService.aerosports.filter(s =>{
      return s.pagetype == this.pagetype;
    })[0] as Aerosports;

    console.log('inside app plan');
  }

}
