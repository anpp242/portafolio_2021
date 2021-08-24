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
        title: 'Gabrica Media',
        team: 'Single',
        tools: 'Angular, HTML, CSS3, DynamoDB, S3, SQL, REST API',
        content: 'Gabrica media is a project for principal customers of the company where the users can download digital resources for their e-commerce, social media and digital portals',
        likes: 10,
        iLike: false
      },
      {
        id: 1,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Web Induction Gabrica',
        team: 'Single',
        tools: 'PHP, MySQL, jQuery, HTML, CSS3, JS',
        content: 'This project is the first step that the aploys doing when arrive to Gabrica, there the users can learn about the company and their rules. They have one for each country.',
        likes: 2,
        iLike: false
      },
      {
        id: 2,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Cuponera | Farmatodo',
        team: 'Develop Team',
        tools: 'Angular, HTML, CSS3, SSAS, REST API',
        content: 'This is a specific function when the user can redeem your coupons, delete or change one coupon. The user can also generate a QR code for redeem in a physical point.',
        likes: 5,
        iLike: false
      },
      {
        id: 3,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Gabrica`s Web Site (Co, Cl, Pe)',
        team: 'Single',
        tools: 'Wordpress, PHP, SQL, HTML, CSS3, jQuery, JS',
        content: 'This web site was created in the CMS wordpress and the template was developed for the company, this web site has a unique CMS for the three countries and for each has your self front',
        likes: 22,
        iLike: false
      },
      {
        id: 4,
        preview: 'https://th.bing.com/th/id/OIP.V6x2fFZV_xDBm-YiprNXjAHaEh?pid=ImgDet&rs=1',
        title: 'Neon',
        team: 'Develop Team',
        tools: 'Wordpress, PHP, SQL, HTML, CSS3, jQuery, JS',
        content: 'Neon`s web is a little shop of a book for childrens that want to learn english, there the users can learn about the book and know more about his history',
        likes: 14,
        iLike: false
      }
    ];
  }

  getSkills(){
    return this.works;
  }
}
