import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;
  toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
closeMenu(): void {
  this.menuOpen = false; // Cierra el menú después de la navegación
}
}
