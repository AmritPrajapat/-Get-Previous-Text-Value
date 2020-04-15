import { Component } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputOutDirproj';
  Messagesendbychild : string ="Hi I am Parent"; 
outputValue : string;


msg : string="enter New text";

  getoutput(value)
  {
    this.outputValue=value;
   console.log(value);
  }

}
