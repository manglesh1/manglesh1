import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports } from '../../models/aerosports';
import { CommonService } from '../../services/common.service';
import { HelperService } from '../../services/helper.service';
 
@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  public pages!: Aerosports[];
  @Input()
  public pagetype:string='';
  public currentPage!: Aerosports;

  // Footer Style
 footerStyle = "tertiary-bg"
 //public pagetype: string | any;
 location: string | any;
 title: string = '';
 childrens: any[] = [];
 path: string = '';
  
  ngOnInit() {
    this.buildInitial();
    
  }

  buildInitial(){
    var pType = this.router.url.split('/').pop();
    console.log(this.router.url);

    if(this.pagetype === "")
      this.pagetype = pType === undefined ? '' : pType;
    
      console.log("attractions" + this.pagetype);

      this.route.params.subscribe(routeParams => {
        this.location = routeParams.location;        
      });

      this.currentPage = this.commonService.aerosports.filter(s =>{
      return s.path == this.pagetype;
    })[0];

    console.log("console attraction",this.currentPage);

  }
  
  constructor(public helperService: HelperService,private route: ActivatedRoute, 
    private router: Router, public commonService: CommonService) {
    
    //console.log('Services constructor...');

  }

}
