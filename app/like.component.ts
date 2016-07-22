import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart"
         [class.liked]="iLike"
         (click)="onClick()"></i>
        {{likes}}
    `,
    styles: [`
        .glyphicon-heart:hover {
            cursor: pointer;
        }
        
        .glyphicon-heart {
            color: #ccc;
        }
        
        .glyphicon-heart.liked {
            color: deeppink;
        }
    `]
})

export class LikeComponent {

    @Input() iLike = false;
    @Input() likes = 10;

    onClick() {
        this.iLike = !this.iLike;

        this.likes += this.iLike ? 1 : -1;

    }
}
