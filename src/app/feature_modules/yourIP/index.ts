import { NgModule } from '@angular/core';
import { YourIPService } from './services/yourIP.service';
import { YourIPComponent } from './components/yourIP/yourIP.component';

@NgModule({
  declarations: [ YourIPComponent ],
  exports: [ YourIPComponent ],
  providers: [ YourIPService ]
})
export class YourIPModule { }