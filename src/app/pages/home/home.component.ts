import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Project } from '../../interfaces/home.interface';
import { PdfService } from '../../services/pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  experienceList: Experience[] = [
    {
      date: 'Marzo. 2023 - Diciembre. 2023',
      title: 'Desarrollador Full Stack',
      company: {
        url: 'https://www.fundacioncapital.org',
        text: 'Fundación Capital'
      },
      technologies: [
        'Angular | RxJS | Jasmine y Karma',
        'Css | Sass | Material',
        'Node | Fatify',
        'C# | .Net 6',
        'MongoDB | PostgreSQL'
      ]
    },
    {
      date: 'Junio. 2022 - Enero. 2023',
      title: 'Desarrollador Frontend',
      company: {
        url: 'https://www.i4digital.com.co',
        text: 'i4Digital Soluciones Web'
      },
      technologies: [
        'Angular | RxJS | Jasmine y Karma',
        'Css | Sass | PrimeNG | PrimeFlex',
        'React | Redux | Jest',
        'Vue | Vuex | Vuetify',
        'PHP | Laravel'
      ]
    },
    {
      date: 'Agosto. 2021 - Mayo. 2022',
      title: 'Desarrollador Full Stack',
      company: {
        url: 'https://woombatcg.com',
        text: 'Woombat Consulting Group S.A.S'
      },
      technologies: [
        'Node | TypeScript | Express',
        'Angular | RxJS | Material | Jest',
        'React | Redux | Webpack | Jest',
        'AWS'
      ]
    },
    {
      date: 'Mayo. 2020 - Junio. 2021',
      title: 'Desarrollador Full Stack',
      company: {
        url: 'https://www.intuitionstudio.co',
        text: 'Intuition Business'
      },
      technologies: [
        'Node | TypeScript | Express Nest',
        'React | TypeScript | NextJs | Jest',
        'Vue | TypeScript | NuxtJs | Jest',
        'PHP | Laravel',
        'AWS | Graphql',
        'MongoDB | MySql'
      ]
    }
  ]

  projectList: Project[] = [
    {
      img: 'imc-app.png',
      title: 'IMC',
      description: 'Desarrollado para tener en una aplicacion con varias funcionalidades que calculen el estado de salud.',
      link: 'https://imc-ionic.web.app'
    }
  ]

  private _pdfService = inject(PdfService);

  async downloadCV(event: any) {
    event.preventDefault();
    try {
      const response = await this._pdfService.downloadCV();
      const file = new Blob([response], { type: 'application/pdf' });
      saveAs(file, 'CV_Edwin_Alberto_Figueroa.pdf');
    } catch (error) {
      alert("Error al descargar el CV");
    }
  }

}
