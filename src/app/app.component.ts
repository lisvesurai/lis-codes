import { HostListener, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'Lis Vesurai';
  isResizing: boolean = false;
  menuOpened: boolean = false;
  resizeTimer;

  constructor(private router:Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isResizing = true;
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.isResizing = false;
    }, 400);
  }

  getRoute(){
    if (this.router.url === '/home'){
      return 'home';
    } else {
      return 'others';
    }
  }

  toggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

  closeMenu(){
    this.menuOpened = false;
  }
}
