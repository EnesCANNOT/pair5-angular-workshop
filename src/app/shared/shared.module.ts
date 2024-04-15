import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ListgroupComponent } from './components/listgroup/listgroup.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ButtonComponent, ListgroupComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, ButtonComponent, ListgroupComponent]
})
export class SharedModule {}
