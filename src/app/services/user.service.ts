import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: { fullName: string } | null = { fullName: 'John Doe' };

  constructor() { }


  getCurrentUser() {
    return this.currentUser;
  }

  getTotalUsers() {
    return 100; // Valor simulado, en una aplicación real sería dinámico
  }

  logout() {
    this.currentUser = null;
  }
}
