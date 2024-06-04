import { HomeComponent } from "../pages/home/home.component";
import { PricingComponent } from "../pages/pricing/pricing.component";

export interface Aerosports {
    location:     string;
    desc:         string;
    headerimage:  string;
    smallimage: string;
    isactive:     boolean;
    meta:         string;
    title:        string;
    data:         Data;
    section1:     string;
    section2:     string;
    path: string;
    children?:    Aerosports[];
    ruleyes:string;
    ruleno:string;
    warnings:string;
    smalltext: string;
    icon: string;
    open: boolean;
    metatitle: string;
    metadescription:string;
}

export interface BirthDayPackages {
    plantitle:     string;
    category:         string;
    price:  string;
    period: string;
    includes:     string;
    
}
export interface Blogs {
    id:string;	title:string;	category:string;	tags:string;
    shortdesc:string;	format:string;	image:string;	video:string;
    postdate:string;	views:string;	author:string;
    	htmldesc:string;
  
}


export interface Config {
    location:     string;
    key:         string;
    value:  string;
    
}

export interface Data {
    path: string;
    type: string;
}

export const PageTypes = {
    PartiesEvents: 'partiesevents',
    Attractions: 'attractions',
    Programs: 'programs',
    PricingPromos: 'pricingpromos',
    GroupEvents: 'groups-events',
    Aboutus: 'aboutus',
    Blogs: 'blogs',
    Attractionsub: 'attractionssub',
    Aboutussub: 'aboutussub',
    Partieseventssub: 'partieseventssub',
    Campprograms: 'campprograms',
    Programssub: 'programssub',
    BirthdayParties: 'kids-birthday-parties',
    Groupseventssub: 'groupseventssub',
    Faq:'faq',
    contactus:"contactus",
    PricingComponent:"pricing-promos",
    Unsubscribe:"unsubscribe",
    HomeComponent:"home"
};