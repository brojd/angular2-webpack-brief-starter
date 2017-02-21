import { Component } from '@angular/core';
import { YourIPService } from '../../services/yourIP.service';

@Component({
  selector: 'yourIP',
  templateUrl: 'yourIP.template.html',
  styleUrls: ['yourIP.stylesheet.pcss' ]
})
export class YourIPComponent {

  ip: string;

  constructor(private yourIPService: YourIPService) {}

  ngOnInit() {
    this.yourIPService.getIP().subscribe(
      res => this.ip = res.ip,
      err => console.log(err)
    );
  }

}