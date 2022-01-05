import { Component } from '@angular/core';

export interface Post {
  title: string,
  description: string,
  id: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list Angular!';
  post: Post[] = [
    {title: 'Выучить Angular', description: 'За 2 недели пройти курс.', id: 1},
    {title: 'Что лучше аргуляр или реакт?', description: 'Жираф большой ему видней', id: 2}
  ]
  updatePost(post: Post){
    this.post.unshift(post)
  }

  deletePost(idPost: number) {
    this.post = this.post.filter(item => item.id !== idPost)
    console.log(this.post)
  }
}
