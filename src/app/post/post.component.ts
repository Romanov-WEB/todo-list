import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('myPost') post!: Post;
  @Output() onDelete:EventEmitter<number> = new EventEmitter()

  constructor() {
  }
  ngOnInit(){
  }
  delete(id: number | undefined){
    this.onDelete.emit(id)
  }
}
