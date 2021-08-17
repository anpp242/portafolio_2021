import { Injectable } from '@angular/core';

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
        role: 'Frontend Web Developer SemiSenior',
        date: '2018 - 2021',
        responsabilities: 'Vestibulum gravida rutrum magna sed ultricies. Nulla dictum volutpat porttitor. Suspendisse porttitor vulputate lacinia. Nam convallis convallis fringilla.',
        goals: 'Ut in felis vel risus porttitor volutpat et sit amet arcu. Aliquam at tincidunt libero, porttitor varius metus'
      },
      {
        id: 2,
        logo: 'https://agroexpo2013asocebu-com.webnode.com.co/_files/system_preview_detail_200000144-43d5f44ce1-public/Logo-Asocebu-01.png',
        name: 'Asocebú',
        role: 'Frontend Web Developer SemiSenior',
        date: '2017 - 2018',
        responsabilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue urna id nibh eleifend congue. Etiam faucibus vehicula metus, ac volutpat arcu tincidunt et. ',
        goals: 'Pellentesque sollicitudin libero sit amet urna tempus, sed tristique nulla fringilla'
      }
    ];
  }

  getExperiences(){
    return this.experiences;
  }
}
