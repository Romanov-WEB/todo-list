import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input('myPost') post!: Post;
  @Output() onDelete:EventEmitter<number> = new EventEmitter()
  @ContentChild('info', {static: true}) infoEl!: ElementRef


  constructor() {
  }
  ngOnInit(){
    console.log(this.infoEl.nativeElement)
  }
  delete(id: number | undefined){
    this.onDelete.emit(id)
  }
}
