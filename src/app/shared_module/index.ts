import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PikachuComponent } from './components/pikachu/pikachu.component';

@NgModule({
  imports: [ CommonModule, HttpModule ],
  declarations: [ PikachuComponent ],
  exports: [ PikachuComponent ]
})
export class SharedModule { }