import { NgModule, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, UserDashboardComponent, MessagesComponent, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  recentMessages: any[] = [];
  totalUsers: number = 0;
  totalMessages: number = 0;
  currentUser: { fullName: string } | null = null;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Obtener los últimos mensajes
    this.recentMessages = this.messageService.getMessages();

    // Obtener estadísticas generales
    this.totalUsers = this.userService.getTotalUsers();
    

    // Obtener el usuario actual si está logueado
    this.currentUser = this.userService.getCurrentUser();
  }

  logout() {
    this.userService.logout();
    this.currentUser = null; // Eliminar la información del usuario al cerrar sesión
  }
}
