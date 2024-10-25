import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  fullName: string = '';
  newUsername: string = '';
  newPassword: string = '';

  loginForm: FormGroup;
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])/)]]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    const user = this.messageService.login(username, password);
    if (user) {
      // Redirigir a la pantalla de mensajes
      this.router.navigate(['/messages']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectas';
    }
  }

  signup() {
    const { fullName, username, password } = this.signupForm.value;
    const success = this.messageService.signup(fullName, username, password);
    if (!success) {
      this.errorMessage = 'El usuario ya existe o la contraseña no cumple los requisitos';
    }
  }

  onLogin() {
    if (this.username === '' || this.password === '') {
      console.log('Usuario o contraseña no pueden estar vacíos');
      return;
    }

    
    console.log('Iniciando sesión con', this.username, this.password);

    
    const user = this.messageService.login(this.username, this.password);
    if (user) {
      // Redirigir al usuario al componente de mensajes
      this.router.navigate(['/messages']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  // Método para manejar el registro de un nuevo usuario
  onRegister() {
    if (this.fullName === '' || this.newUsername === '' || this.newPassword === '') {
      console.log('Todos los campos son obligatorios');
      return;
    }

    if (this.newPassword.length < 8 || !/[A-Z]/.test(this.newPassword) || !/[a-z]/.test(this.newPassword)) {
      console.log('La contraseña debe tener al menos 8 caracteres y contener mayúsculas y minúsculas');
      return;
    }

    //registro de nuevo usuario
    console.log('Registrando nuevo usuario con', this.fullName, this.newUsername, this.newPassword);
  }
}
