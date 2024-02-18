import { Component } from '@angular/core';
import { projects, FilterBy } from '../../core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'andy-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  standalone: true,
  imports: [RouterLink],
})
export class Portfolio {
  projects = projects();
  filterBy = FilterBy;
}
