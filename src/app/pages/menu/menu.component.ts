import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Output() menuClosed = new EventEmitter<void>();  // emetto quando il menu deve essere chiuso

  closeMenu() {
    this.menuClosed.emit();  // emette evento per chiudere il menu
    document.body.classList.remove('no-scroll'); //per non far scrollare la pagina in "sottofondo" quando il menu viene aperto (rimuove la classe no-scroll dal body)
  }

}
