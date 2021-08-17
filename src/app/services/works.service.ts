import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works : object;

  constructor() {
    this.works = [
      {
        id: 0,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Test Job',
        team: 'Single',
        tools: 'Angular, Node',
        content: 'Este es un contenido de prueba',
        likes: 12,
        iLike: false
      },
      {
        id: 1,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Test Job 2',
        team: 'Single',
        tools: 'Angular, Node',
        content: 'Este es un contenido de prueba',
        likes: 120,
        iLike: false
      },
      {
        id: 2,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Test Job 3',
        team: 'Single',
        tools: 'Angular, Node',
        content: 'Este es un contenido de prueba',
        likes: 5,
        iLike: false
      },
      {
        id: 3,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Test Job 4',
        team: 'Single',
        tools: 'Angular, Node',
        content: 'Este es un contenido de prueba',
        likes: 355,
        iLike: false
      },
      {
        id: 4,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Test Job 5',
        team: 'Single',
        tools: 'Angular, Node',
        content: 'Este es un contenido de prueba',
        likes: 2,
        iLike: false
      }
    ];
  }

  getSkills(){
    return this.works;
  }
}
