import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'andy-portfolio-detail',
  templateUrl: './portfolio-detail.html',
  standalone: true,
  imports: [RouterLink],
})
export class PortfolioDetail {
  public document = inject(DOCUMENT);
  style: string =
    'background-color: white; position: fixed; width: 90vw; height: 85vh; inset: 0; margin: auto; z-index: 1000; border-radius: 10px';
  transparentBgStyle: string =
    'position: fixed; inset: 0; background-color: rgba(0,0,0,0.5); width: 100vw; height: 100vh; z-index: 999';
  closeBtnStyle: string =
    'font-size: 2rem;position: absolute;right: 0;top: 0;background-color: #e43c5c;color: white;height: 2.5rem;width: 2.5rem;border-radius: 50%; display: flex; align-items: center; justify-content: center;';

  ngAfterViewInit(): void {
    this.document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = 'scroll';
  }
}
