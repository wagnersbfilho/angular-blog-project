import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent implements OnInit {
  @Input() data:string = "";
  @Input() descricao:string = "";
  @Input() imagem:string = "";
  @Input() id: string = "0";
  @Input() url: string = "";

  ngOnInit(): void {
    let url:string = "../../../assets/img/";
    if (this.imagem == null || this.imagem === "") {
      this.imagem = url + "default.png";
    } else {
      this.imagem = url + this.imagem;
    }
  }

}
