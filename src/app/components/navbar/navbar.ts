import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'andy-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [RouterLink],
})
export class Navbar {
  public document = inject(DOCUMENT);
  public window = this.document.defaultView;

  ngOnInit(): void {
    this.window?.addEventListener('scroll', () => {
      const header: HTMLElement | null = this.document.querySelector('#header');
      if (this.window?.scrollY! > 700 && header) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
      } else {
        header!.style.removeProperty('background');
      }
    });
  }
}
