import { Component, signal } from '@angular/core';
import { projects, FilterBy, ProjectDto } from '../../core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'andy-portfolio',
  templateUrl: './portfolio.html',
  styles: `.portfolio-image {
  width: 100%;
  height: 20rem;
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.btn-container{
width: 100%;
height: fit-content;
display: flex;
align-items: center;
 justify-content: center;
 margin: 0 auto;
}

 .btn-get-started {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 30px 9px 30px;
  border-radius: 50px;
  transition: 0.5s;
  border: 2px solid #fff;
  color: #fff;
  background: #e43c5c;
  cursor: pointer;
}

.btn-get-started:hover {
  border: 2px solid #e43c5c;
}

`,
  standalone: true,
  imports: [RouterLink],
})
export class Portfolio {
  filterBy = FilterBy;
  projectLength = projects.length;
  projects = signal<ProjectDto[]>(projects);
  numberOrProjects = signal<boolean | null>(true);

  constructor() {
    this.updateProjects(0, 9);
  }

  updateProjects(
    sliceFrom: number,
    numberOfItemsToReturn: number,
    filterBy: FilterBy = FilterBy.ALL
  ) {
    if (filterBy != FilterBy.ALL) {
      this.projects.update(() => {
        return projects.filter((p) => p.filterBy == filterBy);
      });
      this.numberOrProjects.set(null);
    } else {
      this.projects.update(() => {
        return projects.slice(sliceFrom, numberOfItemsToReturn);
      });
      this.numberOrProjects.update(() => {
        return projects.length > this.projects().length;
      });
    }
    // GLightbox({
    //   selector: '.portfolio-lightbox',
    // });
  }
}
