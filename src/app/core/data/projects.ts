import { signal } from '@angular/core';

export const projects = signal<ProjectDto[]>([
  {
    id: 1,
    title: 'web',
    desc: '',
    image: '../../../assets/img/projects/web-one.jpg',
    filterBy: 'web',
  },
  {
    id: 2,
    title: 'web',
    desc: '',
    image: '../../../assets/img/projects/web-two.jpg',
    filterBy: 'web',
  },
  {
    id: 3,
    title: 'web',
    desc: '',
    image: '../../../assets/img/projects/web-three.jpg',
    filterBy: 'web',
  },
  {
    id: 4,
    title: 'web',
    desc: '',
    image: '../../../assets/img/projects/web-four.jpg',
    filterBy: 'web',
  },
  {
    id: 5,
    title: 'web',
    desc: '',
    image: '../../../assets/img/projects/web-five.jpg',
    filterBy: 'web',
  },
  {
    id: 6,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-1.jpg',
    filterBy: 'flier',
  },
  {
    id: 7,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-2.jpg',
    filterBy: 'flier',
  },
  {
    id: 8,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-3.jpg',
    filterBy: 'flier',
  },
  {
    id: 9,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-4.jpg',
    filterBy: 'flier',
  },
  {
    id: 10,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-5.jpg',
    filterBy: 'flier',
  },
  {
    id: 11,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-6.jpg',
    filterBy: 'flier',
  },
  {
    id: 12,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-8.jpg',
    filterBy: 'flier',
  },
  {
    id: 13,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-9.jpg',
    filterBy: 'flier',
  },
  {
    id: 14,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-10.jpg',
    filterBy: 'flier',
  },
  {
    id: 15,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-11.jpg',
    filterBy: 'flier',
  },
  {
    id: 16,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-12.jpg',
    filterBy: 'flier',
  },
  {
    id: 17,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-13.jpg',
    filterBy: 'flier',
  },
  {
    id: 18,
    title: 'flier',
    desc: '',
    image: '../../../assets/img/projects/flier-14.jpg',
    filterBy: 'flier',
  },
]);

export interface ProjectDto {
  id: number;
  title: string;
  desc: string;
  image: string;
  filterBy: string;
}
