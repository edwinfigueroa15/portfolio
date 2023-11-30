import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  positionScrollDown: boolean = false;
  check: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll: HTMLElement = document.documentElement;
    this.positionScrollDown = scroll.scrollTop > (scroll.clientHeight-100);

  }

  handleClick(event: Event, id: string) {
    event.preventDefault();
    this.check = false;
    const reference: HTMLElement | null = document.querySelector(`#${id}`);
    reference?.scrollIntoView();
  }

}
