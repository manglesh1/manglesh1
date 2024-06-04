import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { CommonService } from './components/services/common.service';
import { ServicesComponent } from './components/pages/services/services.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ContactFormComponent } from './components/pages/contact/contact-form/contact-form.component';
import { UnsubscribeComponent } from './components/pages/unsubscribe/unsubscribe.component';
import { PromoPopupComponent } from './components/pages/promo-popup/promo-popup.component';
import { SummercampComponent } from './components/pages/summercamp/summercamp.component';



@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
        BlogComponent,
        ContactComponent,
        ContactFormComponent,
        UnsubscribeComponent,
        PromoPopupComponent,
        SummercampComponent
      
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        NgbModule,
        HttpClientModule,
        SlickCarouselModule
    ],
    providers: [CommonService, {
            provide: APP_INITIALIZER,
            useFactory: (commonService: CommonService) => () => commonService.load(),
            deps: [CommonService],
            multi: true
        }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
