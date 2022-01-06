import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  @Input() onIndex!: Post[]
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput') titleInput!: ElementRef
  title = ''
  description = ''
  index = 0

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.titleInput.nativeElement.focus()
  }

  onAddPost () {
    console.log()
    if (this.title.trim() && this.description.trim()){
      const post: Post = {
        title: this.title,
        description: this.description,
        id: uuidv4(),
        date: new Date()
      }
      this.onAdd.emit(post)
      this.title = ''
      this.description = ''
    }
  }
}
