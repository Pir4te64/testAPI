import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent {
  users: any[] = []; // Array para almacenar los usuarios
  expandedUserId: number | null = null;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // Usar el servicio para obtener los usuarios
    this.userService.getUsers().subscribe((data) => {
      this.users = data.slice(0, 10); // Cargar solo los primeros 10 usuarios
    });
  }
  toggleInfo(userId: number): void {
    // Si el usuario ya está expandido, colapsa; si no, expande
    this.expandedUserId = this.expandedUserId === userId ? null : userId;
  }
}
