import { Component, OnInit } from '@angular/core';
import { BlogHelperService } from '../../services/blog-helper.service';
import instagram from '../../data/instagram.json';
import { HelperService } from '../../services/helper.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit  {
  ngOnInit(): void {
    
  }
  public instapost = instagram;
  blogs :any[];
  constructor(public commonService: CommonService) {
       console.log(commonService.location);
       this.blogs = this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="blogs".toUpperCase()})[0].children;
    }
}
