import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared_module';
import { YourIPService } from './services/yourIP.service';
import { YourIPComponent } from './components/yourIP/yourIP.component';

@NgModule({
  imports: [ CommonModule, HttpModule, SharedModule ],
  declarations: [ YourIPComponent ],
  exports: [ YourIPComponent ],
  providers: [ YourIPService ]
})
export class YourIPModule { }