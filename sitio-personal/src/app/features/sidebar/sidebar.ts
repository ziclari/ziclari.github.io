import { Component, Input, signal } from "@angular/core";

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class SidebarComponent {
    @Input() items: string[] = [];
    isOpen = signal(true);
    toggleSidebar() {
        this.isOpen.update(state => !state);
    }
}
