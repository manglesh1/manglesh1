import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports, BirthDayPackages, Config } from 'src/app/components/models/aerosports';

@Component({
  selector: 'app-birthday-parties',
  templateUrl: './birthday-parties.component.html',
  styleUrls: ['./birthday-parties.component.css']
})
export class BirthdayPartiesComponent implements OnInit {
  pagetype: string | any;
  location: string | any;
  bps!: [] | any;
  addons!: Config[];
  rules!: Config[];
  constructor(private route: ActivatedRoute, 
     private router: Router,
      public commonService: CommonService) { 
       this.buildInitial();
   }

   buildInitial(){
    console.log(this.route.params);
    console.log('routeParams.location0');   
    this.route.params.subscribe(routeParams => {  
      console.log('routeParams.location');   
    this.bps= this.commonService.BirthDayPackages;

     this.addons = this.commonService.config.filter(t=>{
        return t.key=="birthday-addon"
      } ) as Config[];
      this.rules= this.commonService.config.filter(t=>{
        return t.key=="birthday-rules"
      } ) as Config[];
    });
   }

  ngOnInit(): void {
  }
  getconfig(key:string): string {
    var s = this.commonService.config.filter(t=>{
      return t.key==key;
    }) [0].value;
    return s;
    
  }
}
