import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-barfilter',
  templateUrl: './barfilter.component.html',
  styleUrl: './barfilter.component.scss'
})
export class BarfilterComponent {

  name: string = '';
  status: string = '';
  gender: string = '';


  @Output() filtriCambiati = new EventEmitter<{ name: string; status: string; gender: string }>();

  inviaFiltri() {
    const filtri = {
      name: this.name.trim(),
      status: this.status,
      gender: this.gender
    };

    this.filtriCambiati.emit(filtri);

  }


}
