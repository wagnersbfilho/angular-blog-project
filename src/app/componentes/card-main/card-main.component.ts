import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit{
  @Input() imageSrc: string = "";
  @Input() titulo: string = "";
  @Input() descricao: string = "";

  ngOnInit(): void {
    //this.imageSrc = "../../../assets/img/card-main.png";
    //this.titulo = "Titulo da Notícia Dinâmico";
    //this.descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }

}
