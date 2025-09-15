import { Component, EventEmitter, Input, Output, signal } from "@angular/core";

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class SidebarComponent {
    @Input() items: string[] = [];
    @Input() isOpen: boolean = true;
}
