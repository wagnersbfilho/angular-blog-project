import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataNews} from '../../data/dataNews'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() titulo:string = "";
  @Input() descricao:string = "";
  @Input() imagem:string = "";
  private id:string|null = "0";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
    this.setImage();
  }

  setValuesToComponent(id_: string|null) {
    const result = dataNews.filter(
      article => article.id == id_)[0];

    console.log(result);
    if (result != null) {
      this.titulo = result.titulo+ " - " + result.id;
      this.descricao = result.desc;
      this.imagem = result.imagem;
    }
  }

  setImage(): void {
    let url:string = "../../../assets/img/";
    if (this.imagem == null || this.imagem === "") {
      this.imagem = url + "default.png";
    } else {
      this.imagem = url + this.imagem;
    }
  }

}
