import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements AfterViewChecked {
  isLoaded: boolean = false;

  ngAfterViewChecked() {
    setTimeout (() => {
      this.isLoaded = true;
    }, 1000);
  }
}
