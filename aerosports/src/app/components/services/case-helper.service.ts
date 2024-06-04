aimport { AfterViewInit, AfterContentInit, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cases from '../data/case/case.json';
import authors from '../data/team.json';
import category from '../data/case/category.json';
import { Category } from './filter/category';
import { Item } from './filter/item';

@Injectable({
  providedIn: 'root'
})
export class CaseHelperService implements AfterContentInit, AfterViewInit,OnInit {

 // pagination
 page: number = 1;
 public caseblock = cases;
 public category = category;
 public casedetails = cases;

 public activeItem: number;
 constructor(private router: ActivatedRoute) {
   this.activeItem = 1;
 }
 // category
 public getCategories(items: string | any[]) {
   var elems = category.filter((item: { id: string; }) => {
     return items.includes(item.id)
   });
   return elems;
 }
 // Author
 public getAuthor(items: string | any[]) {
   var elems = authors.filter((item: { id: string; }) => {
     return items.includes(item.id)
   });
   return elems;
 }
 public setPost(id: any) {
   this.casedetails = cases.filter((item: { id: any; }) => { return item.id == id });
 }
 ngAfterContentInit(): void {
   this.setPost(this.router.snapshot.params.id);
 }
 ngAfterViewInit(): void {
   
 }
 ngOnInit(): void{
   
 }
 // Filter
 items: Item[] = cases;
 categories: Category[] = category;
 filteredItems: Item[] | Item[] = [] = [...this.items];
 filterItemsByCategory(category: Category, id: number) {
   this.filteredItems = this.items.filter((item: Item) => {
     return item.category.includes(parseInt(category.id));
   });
   this.activeItem = id
 }
 reset(id: number) {
   this.filteredItems = [...this.items];
   this.activeItem = id
 }
}
