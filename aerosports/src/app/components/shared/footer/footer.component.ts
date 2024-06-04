import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports } from '../../models/aerosports';
import { CommonService } from '../../services/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  @Input() layout: number | string | undefined = "tertiary-bg";
  @Input() logo: number | string | undefined;
  public navigation!: Aerosports[];
  public location: string | any;
  public aboutUsLinks!:Aerosports[];
  public programsLinks!:Aerosports[];
  public groups!:Aerosports[];
  public blogs!:Aerosports[];
  commonService:CommonService;
  public reviews:any;
  rating: number = 4;

//  recentPost!:blog;
  constructor (public commonService1: CommonService,private router: Router,private http: HttpClient)
  {
    this.commonService=commonService1;
}
ngOnInit(): void {
  console.log("attactions");
  console.log(this.commonService.aerosports);
   
    console.log(this.commonService.aerosports.filter(t=>{return t.path.toUpperCase() =="aboutus".toUpperCase()}));
    
    this.navigation= this.commonService.aerosports.filter(t=>{return t.path.toUpperCase() =="attractions".toUpperCase()})[0].children;
    this.aboutUsLinks=this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="aboutus".toUpperCase()})[0].children;
    this.programsLinks = this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="programs".toUpperCase()})[0].children;
    this.groups = this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="groups-events".toUpperCase()})[0].children;
this.blogs = this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="blogs".toUpperCase()})[0].children;
  //  this.recentPost=bloghelpr.recentPost();
  var url:string="https://apis-351216.nn.r.appspot.com/api/getreviews?locationid=" +this.commonService.locations[0].locationid;
  console.log(url);
    this.http.get(url).subscribe(data => 
    {
      this.reviews=data as any;
      console.log(this.reviews);
      this.rating= this.reviews.rating;
      this.reviews.forEach((r: { showMore: boolean; }) => r.showMore = false);
     // console.log(reviews[0].rating);
    }        
    );
  
}
truncateText(text: string, limit: number): string {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}
convertRatingToStars(rating: number): string {
  console.log(rating);
  let stars = '';
  for (let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆';
  }
  return stars;
}

 
}
