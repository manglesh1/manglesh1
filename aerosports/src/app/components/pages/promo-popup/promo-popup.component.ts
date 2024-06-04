import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/components/services/common.service';
@Component({
  selector: 'app-promo-popup',
  templateUrl: './promo-popup.component.html',
  styleUrls: ['./promo-popup.component.css']
})
export class PromoPopupComponent implements OnInit {

 
  error: {} | undefined;
  
  constructor(public activeModal: NgbActiveModal,private route: ActivatedRoute, 
    private router: Router,
     private commonService: CommonService,private sanitizer: DomSanitizer,
     private el: ElementRef,
     private renderer: Renderer2) { 
      this.buildInitial();
  }
 
  content: string | any;
  buildInitial(){
     
      
    let data = this.commonService.getconfig('promotion-popup').replace("{location.url}", this.commonService.location==='oakville'?'oakvillemississauga':this.commonService.location);
    console.log(data);
    this.content =this.commonService.getHtmlAndSetCss(data,this.sanitizer,this.el,this.renderer)

    this.commonService.isPromoPopupDisplayed = true;
  }

  ngOnInit(): void {
  }
}