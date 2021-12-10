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
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638848207/gabrica_media_bz5jff.jpg',
        title: 'Gabrica Media',
        team: 'Single',
        tools: 'Angular, HTML, CSS3, DynamoDB, S3, SQL, REST API',
        content: 'Gabrica media is a project for principal customers of the company where the users can download digital resources for their e-commerce, social media and digital portals',
        likes: 10,
        gallery: [
          {
            label: '',
            image: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638850015/gabrica_media/campanias_xssvvb.jpg'
          },
          {
            label: '',
            image: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638850015/gabrica_media/campanias_detalle_f7wcfw.jpg'
          },
          {
            label: '',
            image: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638850015/gabrica_media/catalogo_dedqas.jpg'
          },
          {
            label: '',
            image: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638850015/gabrica_media/videos_tezpxc.jpg'
          },
        ],
        iLike: false
      },
      {
        id: 1,
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638848207/induccion_gabrica_xe0slh.jpg',
        title: 'Web Induction Gabrica',
        team: 'Single',
        tools: 'PHP, MySQL, jQuery, HTML, CSS3, JS',
        content: 'This project is the first step that the aploys doing when arrive to Gabrica, there the users can learn about the company and their rules. They have one for each country.',
        likes: 2,
        iLike: false
      },
      {
        id: 2,
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638848207/cuponera_ja3mdp.jpg',
        title: 'Cuponera | Farmatodo',
        team: 'Develop Team',
        tools: 'Angular, HTML, CSS3, SSAS, REST API',
        content: 'This is a specific function when the user can redeem your coupons, delete or change one coupon. The user can also generate a QR code for redeem in a physical point.',
        likes: 5,
        iLike: false
      },
      {
        id: 3,
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638848207/gabrica_oqyoon.jpg',
        title: 'Gabrica`s Web Site (Co, Cl, Pe)',
        team: 'Single',
        tools: 'Wordpress, PHP, SQL, HTML, CSS3, jQuery, JS',
        content: 'This web site was created in the CMS wordpress and the template was developed for the company, this web site has a unique CMS for the three countries and for each has your self front',
        likes: 22,
        iLike: false
      },
      {
        id: 4,
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638848207/neon_sxumh5.jpg',
        title: 'Neon',
        team: 'Develop Team',
        tools: 'Wordpress, PHP, SQL, HTML, CSS3, jQuery, JS',
        content: 'Neon`s web is a little shop of a book for childrens that want to learn english, there the users can learn about the book and know more about his history',
        likes: 14,
        iLike: false
      },
      {
        id: 5,
        preview: 'https://res.cloudinary.com/dtaxfimxy/image/upload/v1638849180/happina_dbdefi.jpg',
        title: 'Happina',
        team: 'Develop Team',
        tools: 'Wordpress, PHP, SQL, HTML, CSS3, jQuery, JS',
        content: 'Happina`s web page when the user can book a room, read the blog articles about the city and your incredible scenery',
        likes: 13,
        iLike: false
      }
    ];
  }

  getSkills(){
    return this.works;
  }
}
