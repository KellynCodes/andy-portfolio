import { Component } from '@angular/core';

@Component({
  selector: 'andy-cta',
  standalone: true,
  template: `
    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">
        <div class="text-center">
          <h3>Let's Do The Magic</h3>
          <p>
            Do you have a design in mind. Click on this contact button below
            let's bring you Idea to life, to help you get more audience.
          </p>
          <a class="cta-btn" href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
    <!-- End Cta Section -->
  `,
})
export class Cta {}
