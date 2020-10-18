import { Component } from '@angular/core';

interface Menu {
  title: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menus: Menu[] = [{ title: 'Todo', route: 'todo' }];
}
