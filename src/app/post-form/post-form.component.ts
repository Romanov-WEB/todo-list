import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  @Input() onIndex!: Post[]
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  title = ''
  description = ''

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost () {
    const arrId: number[] = []
    let index: number = Math.floor(Math.random()* arrId.length+1)

    function randomIndex (arr: number[], i: number){
      let max: number =  Math.max.apply(null, arrId)
      const lengthArr: number = arrId.length + 1
      max = (max === lengthArr)? max = max + 1: max = lengthArr
      arrId.forEach(item => {
        if (item === i) {
          index = Math.floor(Math.random() * max)
          return  randomIndex(arrId, index)
        }
        return index
      })
    }

    if (this.title.trim() && this.description.trim()){
      this.onIndex.forEach(item => arrId.push(item.id))
      randomIndex(arrId, index)
      console.log(index)
      const post: Post = {
        title: this.title,
        description: this.description,
        id: index
      }
      console.log(this.onIndex)
      this.onAdd.emit(post)
      this.title = ''
      this.description = ''
    }
  }
}
