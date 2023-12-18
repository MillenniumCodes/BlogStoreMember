import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isScrolled: boolean = false;

  constructor(
    private el: ElementRef,
    private router: Router,
    private renderer: Renderer2,
   
  ) {}
}
