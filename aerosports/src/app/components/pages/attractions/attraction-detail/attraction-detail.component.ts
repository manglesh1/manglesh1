import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonService } from '../../../services/common.service';
import { Aerosports } from 'src/app/components/models/aerosports';

import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-attraction-detail',
  templateUrl: './attraction-detail.component.html',
  styleUrls: ['./attraction-detail.component.css']
})
export class AttractionDetailComponent implements OnInit {
  footerStyle = "tertiary-bg";
  pagetype: string | any;
  location: string | any;
  page!: Aerosports;
  
  urlSafe: SafeResourceUrl | undefined;
  style!: string;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private commonService: CommonService,
    private httpClient: HttpClient,private sanitizer: DomSanitizer,
    private el: ElementRef,
    private renderer: Renderer2
   
  ) { }

  ngOnInit(): void {
    this.buildInitial();
    
  }

  buildInitial() {
    this.route.params.subscribe(params => {
      this.location = params.location;
      this.pagetype = params.type || this.router.url.split('/').pop();
      
      this.page = this.commonService.allPages.find(p => p.path == this.pagetype) || this.commonService.currentPage;

      if (this.location === "oakville") {
     //   this.location = "oakvillemississauga";
      }

      if (this.page) {
        let x = this.page.section1.replace("{location.url}", this.location);
        this.page.section1 =this.commonService.getHtmlAndSetCss(x,this.sanitizer,this.el,this.renderer)
        if (this.page.section1.startsWith('http')) {
       //   this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.page.section1);
       //   this.style="display: block;   overflow: hidden scroll;display: flex;   height:calc(900vh);   width: 100%";
          this.getdata();
        }
      }
    });
  }

  getdata() {
    var start = (new Date()).getTime();
    console.log('before dom');
  //  const apiUrl = 'https://camps.aerosportsparks.ca/oakville';  // Adjust the URL to your actual API
    this.getScriptFromBackend()
      .subscribe(data => 
        {
          var s2 = (new Date()).getTime();
          console.log(s2-start)
          this.page.section1 = this.commonService.getHtmlAndSetCss(data,this.sanitizer,this.el,this.renderer);
        }        
        );
      
  }
  getScriptFromBackend(): Observable<any> {
    console.log('gh');
    

    return this.httpClient.get("https://apis-351216.nn.r.appspot.com/api/getCamps?url=" +this.page.section1, { responseType: 'text' })

  }
  /*
  processData(data: any) {
    // Insert HTML safely
    console.log('ghhhhh');
    console.log(data);
    parseHTML(data);
    this.page.section1 = this.sanitizer.bypassSecurityTrustHtml(data.html) as any;

    // Inject CSS into the head of the document
    const style = this.renderer.createElement('style');
    this.renderer.setProperty(style, 'textContent', data.css);
    this.renderer.appendChild(this.el.nativeElement.ownerDocument.head, style);
  }*/
}