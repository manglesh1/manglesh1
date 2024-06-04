import { Component } from '@angular/core';
import { BlogHelperService } from '../../../services/blog-helper.service';
import { CommonService } from 'src/app/components/services/common.service';
import { Aerosports } from 'src/app/components/models/aerosports';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent  {
  public blogs!:Aerosports[];
  constructor(public commonService: CommonService) {
    this.blogs = this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="blogs".toUpperCase()})[0].children as Aerosports[];
  }

}
