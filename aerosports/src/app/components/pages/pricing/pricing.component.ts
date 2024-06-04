import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../services/common.service";
import { Aerosports, Config } from 'src/app/components/models/aerosports';
@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})


export class PricingComponent implements OnInit {
  configPrices!: Config[];
  headerStyle = "tertiary-bg";
  page!:Aerosports;
  pricingHeader!:Config;
  // Footer Style
  footerStyle = "tertiary-bg"
  constructor(private route: ActivatedRoute,public commonService:CommonService) {
   
   }
   
  ngOnInit() {
    this.pricingHeader= this.commonService.config.filter(t=>{
      return t.key=="pricingheader"
    } )[0] as Config;

    this.configPrices= this.commonService.config.filter(t=>{
      return t.key=="pricing"
    } ) as Config[];
    console.log("pricing constructor")
    console.log(this.configPrices);

    console.log('inside console');
    this.page =this.commonService.allPages.filter(m=>{
          return m.path== "pricing-promos"; 
          })[0] as Aerosports;
    console.log(this.page);
    if(!this.page)
    this.page =this.commonService.currentPage;
   
    console.log("pricing page");
    console.log(this.page);
    

    
  }
}
