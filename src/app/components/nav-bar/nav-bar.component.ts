import { Component } from '@angular/core';
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

  check: any = false;

  handleClick(event: Event, id: string) {
    event.preventDefault();
    this.check = false;
    const reference: HTMLElement | null = document.querySelector(`#${id}`);
    reference?.scrollIntoView();
  }

}
