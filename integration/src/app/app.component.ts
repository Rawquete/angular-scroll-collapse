import { Component } from '@angular/core';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highlight = true;

  onScrollCollapseChange(scrollCollapse: boolean) {
    this.highlight = scrollCollapse;
  }
}
