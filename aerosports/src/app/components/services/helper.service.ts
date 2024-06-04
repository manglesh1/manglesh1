import { AfterViewInit, OnInit, Injectable,  ElementRef, Renderer2, SecurityContext } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnInit, AfterViewInit {
  
  constructor( ) {
    console.log('basehelper');    
  }
  
  // Sticky Nav
  /* 
  @HostListener('window:scroll', ['$event'])
   onWindowScroll(_e: any) {
     if (window.pageYOffset > 100) {
       let element = <HTMLElement>document.getElementById('can-sticky');
     element.classList.add('sticky');
     } else {
       let element = <HTMLElement>document.getElementById('can-sticky');
       element.classList.remove('sticky');
     }
   }*/
  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Sidebar
  canvasmethod: boolean = true;
  canvasToggle() {
    this.canvasmethod = !this.canvasmethod;
  }
  // Search
  searchmethod: boolean = true;
  searchToggle() {
    this.searchmethod = !this.searchmethod;
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    /*
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });*/
  }
  
}
