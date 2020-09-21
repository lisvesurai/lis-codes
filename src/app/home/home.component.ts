import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements AfterViewChecked {

  isLoaded: boolean = false;

  ngAfterViewChecked() {
    setTimeout (() => {
      this.isLoaded = true;
    }, 1000);
  }
}
