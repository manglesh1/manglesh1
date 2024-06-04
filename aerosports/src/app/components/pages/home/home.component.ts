import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

    console.log(' inside HomeComponent i nint')
  }
  // Header style
  headerStyle = "tertiary-bg";
  // Footer Style
  footerStyle = "tertiary-bg"
  attractionCompType="attractions";

  ngOnInit(): void {
    console.log(' inside HomeComponent')
  }

}
