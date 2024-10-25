import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUser: { fullName: string } | null = null;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  // Obtener el usuario actual si está logueado
  this.currentUser = this.userService.getCurrentUser();
  }

  logout() {
    this.userService.logout();
    this.currentUser = null; // Eliminar la información del usuario al cerrar sesión
  }
}
