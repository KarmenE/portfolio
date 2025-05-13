import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  
  hoveredSide: 'left' | 'right' | null = null;
  isRightActive = false;
  private activeTimeout: any = null;

  onMouseMove(event: MouseEvent, container: HTMLElement) {
    const bounds = container.getBoundingClientRect();
    const x = event.clientX - bounds.left;

    const side = x < bounds.width / 2 ? 'left' : 'right';
    this.hoveredSide = side;

    if (side === 'right') {
      this.isRightActive = true;

      // Evita che il timer venga eseguito se il mouse rientra subito
      if (this.activeTimeout) {
        clearTimeout(this.activeTimeout);
        this.activeTimeout = null;
      }
    }
  }

  onMouseLeave() {
    this.hoveredSide = null;

    // Ritarda la rimozione del z-index alto per lato destro
    this.activeTimeout = setTimeout(() => {
      this.isRightActive = false;
    }, 1200); // deve corrispondere al tempo della transizione CSS
  }
}
