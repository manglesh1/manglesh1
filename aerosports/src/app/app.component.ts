import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DynamicRouterService } from './components/services/dynamic-router.service';
import { CommonService, slideInAnimation } from './components/services/common.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent implements OnInit {

  private titleFormat = "{{feature}} | Indoor Trampoline Park - {{location}} Aerosports" ;

  
  private metaDescFormat = "AeroSports Trampoline Park in {{location}}, Ontario offers exciting activities and attractions for kids of all ages. Perfect for family fun, birthday parties, and summer camps! Join us for unforgettable experiences and thrilling adventures."
  
  private metaTitleFormat = "{{location}} ON {{feature}} | Aerosports Trampoline Park+";
  private metaOgDesc = "Aerosports Offers a variety of exciting trampoline park attractions and programs in {{location}} ON, including {{feature}}.Best place for birthday parties";
  private locationFormat = '{{location}}';
  private featureFormat = '{{feature}}';

  constructor(private titleService: Title, 
    private metaService: Meta,
    private breadcrumbService: BreadcrumbService,
    dynamicService: DynamicRouterService,
    private commonService: CommonService, private router: Router, 
    private route:ActivatedRoute
    
    ) {
      this.router.events.subscribe(event => {
        
        if(event instanceof NavigationEnd){
            console.log("COMPONENTS TAGS");
            console.log(this.commonService.locations[0].tag);
            
                 gtag('config', this.commonService.locations[0].tag,
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
                gtag('config', 'UA-50747130-3', 
                  {
                    'page_path': event.urlAfterRedirects
                  }
                 );
         }
         console.log(event);
      }
   );
     
    //console.log('applog constructor');    
  }
  
  ngOnInit(): void {
    
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      //this.titleService.setTitle(this.createTitle(crumbs));
     // console.log('applog nginit'); 
     this.buildSEO();
    });
  }

  buildSEO(){
    
    var pType = this.router.url.split('/').pop();  
    //console.log(pType); 
  //  console.log("app");
 //   console.log(this.commonService.allPages);  
    var pagepath=((this.router.url.split('/').length ==2)?'home':pType);
    console.log(pagepath);
    console.log(this.commonService.allPages);
    var d = this.commonService.allPages.filter(s =>{
      return s.path == pagepath.toLowerCase();
    });
  //  console.log(this.commonService.allPages);  
  //  console.log(pType);
   //    console.log(this.router.url.split('/').length);
      console.log(d);

     
          this.titleService.setTitle(this.replaceValues((d[0].metatitle==''?this.titleFormat:d[0].metatitle),d[0].desc));

      
      this.createOrUpdateTag('robots','index,follow','');
      this.createOrUpdateTag('description',  this.replaceValues((d[0].metadescription==''?this.metaDescFormat:d[0].metadescription),d[0].desc),d[0].desc);
     
      this.createOrUpdateTag('og:title',this.metaTitleFormat,d?d[0].path:'');
      this.createOrUpdateTag('og:description',this.metaOgDesc,d?d[0].path:'');
      this.createOrUpdateTag('og:type',"website",d);
      if(d[0])
        this.createOrUpdateTag('og:image',d[0].headerimage,d?d[0].path:'');
      this.createOrUpdateTag('og:url',window.location.href,d?d[0].path:'');
      // this.metaService.addTags([
      //   {name: 'robots', content: 'index,follow'},
      //   {name: 'description', content: this.replaceValues(this.metaDescFormat,d)},
      //   {name:'og:title', content: this.replaceValues(this.metaTitleFormat,d)},
      //   {name:'og:description', content: this.replaceValues(this.metaOgDesc,d)},
      //   {name: 'og:type', content: 'website'},
      //   {name: 'robots', content: 'index, follow'},
      //   {name:'og:image',content:''},
      //   {name:'og:url', content: window.location.href}
      // ]);
}

createOrUpdateTag(nameValue: string, content: string, path:any){
  //console.log(this.metaService.getTag("name='" + nameValue + "'"));
  this.metaService.getTag("name='" + nameValue + "'") ? 
         this.metaService.updateTag({name: nameValue, content: this.replaceValues(content,path)},"name='"+ nameValue +"'") : 
          this.metaService.addTag({name: nameValue, content: this.replaceValues(content,path)});

}

replaceValues(val: String, path: any ){
  console.log(val);

  return val.replace(this.locationFormat,this.commonService.location).replace(this.featureFormat, path);
 
 // console.log(data);
 // return data;
  //console.log(title);
}

  onActivate(_event:any){
    window.scroll(0,0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Aerosports Teampoline Park|Best Fun and Birthday Party Place';

    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
   // console.log('routeTitle' + routeTitle); 
    return `${title}${routeTitle}`;
  }

  private titlesToString(titles: any[]) {
    return titles.reduce((prev, curr) => {
      return `${prev} | ${curr.displayName}`;
    }, '');
  }


}
