import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  contentCreated = false;
  content = "secret paragraph";
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(event: 'click'){
    this.contentCreated = !this.contentCreated;
    this.log.push(new Date);
  }



}
