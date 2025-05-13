import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  screenshots: string[];
}
//sto dichiarando una variabile globale che punta al Bootstrap effettivo
declare var bootstrap: any;


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'E-commerce',
      description: 'Questo progetto Angular rappresenta un\'applicazione web di e-commerce, progettata per mostrare prodotti, gestire un carrello acquisti e simulare il processo di acquisto.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server', 'RxJS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/KarmenE/E-commerce.git',
      screenshots: [
        '/screenshot projects/Ecomm.png',
        '/screenshot projects/Ecomm2.png'
      ]
    },
    {
      title: 'Gestionale stanze di albergo',
      description: 'Questo progetto Angular è un\'applicazione web per la gestione di stanze. Utilizza un backend simulato fornito da JSON Server per la persistenza dei dati relativi alle stanze.',
      technologies: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server', 'RxJS'],
      githubUrl: 'https://github.com/KarmenE/Gestionale-Stanze.git',
      screenshots: [
        '/screenshot projects/gest stanze.png',
        '/screenshot projects/gest stanze2.png'
      ]
    },
    {
      title: 'Gestionale task',
      description: 'Questo progetto Angular è un\'applicazione web semplice per la gestione di task. Utilizza un backend simulato fornito da JSON Server per la persistenza dei dati.',
      technologies: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server', 'RxJS'],
      githubUrl: 'https://github.com/KarmenE/Gestionale-Task.git',
      screenshots: [
        '/screenshot projects/gest task.png'
      ]
    },
    {
      title: 'Login e chat',
      description: 'Questo progetto è un\'applicazione web realizzata con Angular che implementa un sistema di autenticazione e una chat tra utenti. Utilizza JSON Server per simulare un database e gestire gli utenti registrati e i messaggi della chat.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server', 'RxJS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/KarmenE/Login-Chat.git',
      screenshots: [
        '/screenshot projects/login +chat.png',
        '/screenshot projects/login +chat2.png'
      ]
    },
    {
      title: 'Login',
      description: 'Questo progetto Angular implementa un semplice sistema di autenticazione (login) per un\'applicazione web. Utilizza un backend simulato fornito da JSON Server per la gestione degli utenti e la verifica delle credenziali.',
      technologies: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server'],
      githubUrl: 'https://github.com/KarmenE/Login.git',
      screenshots: [
        '/screenshot projects/login.png'
      ]
    },
    {
      title: 'Gestionale prenotazioni visite mediche',
      description: 'Questo progetto è un\'applicazione Angular per la gestione delle prenotazioni di visite mediche. Permette agli utenti di registrarsi, fare il login, prenotare visite con specialisti in base alla disponibilità, aggiungere prenotazioni al Calendario Google. Il backend è simulato con JSON Server per gestire i dati delle prenotazioni e degli utenti.',
      technologies: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Bootstrap', 'Angular Material', 'Json-server', 'RxJS'],
      githubUrl: 'https://github.com/KarmenE/Gestionale-Prenotazioni-Visite-Mediche.git',
      screenshots: [
        '/screenshot projects/prenot.png',
        '/screenshot projects/prenot2.png',
        '/screenshot projects/prenot3.png',
        '/screenshot projects/prenot4.png',
        '/screenshot projects/prenot5.png',
        '/screenshot projects/prenot6.png',
      ]
    }
  ];


  selectedImage: string = '';

  openImageModal(imgUrl: string): void {
    this.selectedImage = imgUrl;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }


}
