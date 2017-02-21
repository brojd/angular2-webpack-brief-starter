import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { YourIPService } from './services/yourIP.service';
import { YourIPComponent } from './components/yourIP/yourIP.component';

@NgModule({
  imports: [ RouterModule, CommonModule, HttpModule ],
  declarations: [ YourIPComponent ],
  exports: [ YourIPComponent ],
  providers: [ YourIPService ]
})
export class YourIPModule { }