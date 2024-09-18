import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  user = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  
  currentPassword: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;

  constructor() {}

  saveData() {
    // Aqui você pode adicionar a lógica para salvar os dados
    console.log('Dados salvos:', this.user);
    alert('Dados atualizados com sucesso!');
  }

  changePassword() {
    // Verifica se as novas senhas correspondem
    if (this.newPassword !== this.confirmPassword) {
      alert('As novas senhas não correspondem.');
      return;
    }

    console.log('Senha trocada:', { currentPassword: this.currentPassword, newPassword: this.newPassword });
    alert('Senha alterada com sucesso!');
  }

  togglePasswordVisibility(input: IonInput) {
    input.getInputElement().then((el: HTMLInputElement) => {
      el.type = el.type === 'password' ? 'text' : 'password';
    });
  }
}
