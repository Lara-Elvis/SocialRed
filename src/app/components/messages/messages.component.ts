import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messageForm: FormGroup;
  successMessage: string = '';
  newMessage: string = '';  // Variable para el contenido del nuevo mensaje
  messages: any[] = []; 

  

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.messageForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  saveMessage() {
    const { content } = this.messageForm.value;
    if (content.trim()) {
      this.messageService.addMessage(content);
      this.successMessage = 'Mensaje creado correctamente';
    }
  }

  onPostMessage() {
    if (this.newMessage.trim()) {
      const newMsg = {
        content: this.newMessage,
        timestamp: new Date()
    };
    // Agregar el nuevo mensaje a la lista de mensajes
    this.messages.push(newMsg);
      
    // Limpiar el campo de texto
    this.newMessage = '';
    
    // Aquí puedes agregar la lógica para enviar el mensaje al backend si lo necesitas
    console.log('Mensaje publicado:', newMsg);

  }}
}
