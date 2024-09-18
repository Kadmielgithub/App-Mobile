import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class tab3 {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {
    // Aqui você pode adicionar a lógica para autenticação
    console.log('Login realizado com:', { email: this.email, password: this.password });
    
    // Navegar para a página principal após o login bem-sucedido
    this.router.navigate(['/tabs']);
  }
}

