import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './navbar/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, MenuComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  exports: [NavbarComponent],
})
export class LayoutModule {}
