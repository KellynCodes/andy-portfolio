import { Component } from '@angular/core';
import { Cta } from '../components/cta';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Faq } from '../components/faq/faq';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'andy-home',
  standalone: true,
  imports: [Services, Contact, About, Portfolio, Cta, Faq, RouterOutlet],
  template: `
    <router-outlet />
    <section id="hero">
      <div class="hero-container">
        <h3>Welcome, <strong>You're with Andy</strong></h3>
        <h1>I Create what you imagine.</h1>
        <h2>I bring your ideas in to reality.</h2>
        <a href="#about" class="btn-get-started scrollto">Contact Me</a>
      </div>
    </section>
    <!-- End Hero -->
    <main id="main">
      <andy-about />
      <andy-services />
      <andy-cta />
      <andy-portfolio />
      <andy-faq />
      <andy-contact />
    </main>
    <!-- End #main -->
  `,
})
export class Home {}
