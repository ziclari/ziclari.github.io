import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './features/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sitio-personal');
  sidebarItems: string[] = ['Home', 'About', 'Services', 'Contact'];
     
  isOpen = signal(false);
  toggleSidebar() {
      this.isOpen.update(state => !state);
  }
}
