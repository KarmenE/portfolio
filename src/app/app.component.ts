import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  menuAperto = false;
  dots = Array(9); // 9 pallini


  toggleMenu() {
    this.menuAperto = !this.menuAperto;

    //per non far scrollare la pagina in "sottofondo" quando il menu viene aperto (aggiunge o rimuove la classe no-scroll dal body)
    // se il menu è aperto, aggiunge la classe no-scroll al body, altrimenti la rimuove
      if (this.menuAperto) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
  }
  }
  closeMenu() {
    this.menuAperto = false;  
  }

  // x tema
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

}
