import { Injectable } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private experiences : object;

  constructor() {
    this.experiences = [
      {
        id: 0,
        logo: 'https://th.bing.com/th/id/OIP.RmF0dFpt8H_An6Uf7I3LKwHaI-?pid=ImgDet&rs=1',
        name: 'Farmatodo',
        role: 'Frontend Web Developer SemiSenior',
        date: '2021 - Actual',
        responsabilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue urna id nibh eleifend congue. Etiam faucibus vehicula metus, ac volutpat arcu tincidunt et. ',
        goals: 'Pellentesque sollicitudin libero sit amet urna tempus, sed tristique nulla fringilla'
      },
      {
        id: 1,
        logo: 'https://th.bing.com/th/id/OIP.Z-KG4qR9jTNifU23ig73OwHaHa?pid=ImgDet&rs=1',
        name: 'Gabrica',
        role: 'Web Developer Engineer',
        date: '2018 - 2021',
        responsabilities: 'Vestibulum gravida rutrum magna sed ultricies. Nulla dictum volutpat porttitor. Suspendisse porttitor vulputate lacinia. Nam convallis convallis fringilla.',
        goals: 'Ut in felis vel risus porttitor volutpat et sit amet arcu. Aliquam at tincidunt libero, porttitor varius metus'
      },
      {
        id: 2,
        logo: 'https://agroexpo2013asocebu-com.webnode.com.co/_files/system_preview_detail_200000144-43d5f44ce1-public/Logo-Asocebu-01.png',
        name: 'Asocebú',
        role: 'Web Developer',
        date: '2017 - 2018',
        responsabilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue urna id nibh eleifend congue. Etiam faucibus vehicula metus, ac volutpat arcu tincidunt et. ',
        goals: 'Pellentesque sollicitudin libero sit amet urna tempus, sed tristique nulla fringilla'
      },
      {
        id: 3,
        logo: 'https://th.bing.com/th/id/OIP.CUqlv3cmsKP2ShfT7c_HQgAAAA?pid=ImgDet&rs=1',
        name: 'Manuela Beltrán University',
        role: 'Webmaster',
        date: '2014 - 2017',
        responsabilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue urna id nibh eleifend congue. Etiam faucibus vehicula metus, ac volutpat arcu tincidunt et. ',
        goals: 'Pellentesque sollicitudin libero sit amet urna tempus, sed tristique nulla fringilla'
      },
      {
        id: 4,
        logo: 'https://th.bing.com/th/id/OIP.3Eo4KmUBYzLZjlLP4NbLhQHaFa?pid=ImgDet&w=500&h=365&rs=1',
        name: 'Grupo A Estudio',
        role: 'Web Designer',
        date: '2013 - 2014',
        responsabilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue urna id nibh eleifend congue. Etiam faucibus vehicula metus, ac volutpat arcu tincidunt et. ',
        goals: 'Pellentesque sollicitudin libero sit amet urna tempus, sed tristique nulla fringilla'
      }
    ];
  }

  getExperiences(){
    return this.experiences;
  }
}
