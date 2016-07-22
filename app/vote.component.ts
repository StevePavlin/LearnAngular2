import {Component, Input} from "angular2/core";

@Component({
    selector: 'vote',

    template: `
        <div class="vote-container">
            <i class="glyphicon glyphicon-menu-up" (click)="voteUp()" [class.active]="myVote == 1"></i>
            <span>{{ votes + myVote }} </span>
            <i class="glyphicon glyphicon-menu-down" (click)="voteDown()" [class.active]="myVote == -1"></i>
        </div>
    `,

    styles: [`
        .glyphicon, span {
            cursor: pointer;
            display: block;
            margin: 10px 0;
        }
        
        .glyphicon.active {
            color: yellow;
        }
        
        .vote-container {
            margin-left: 10px;
            margin-top: 10px;
        }
    `]
})

export class VoteComponent {
    @Input() votes;
    @Input() myVote;


    initialVotes;

    ngOnInit() {
        this.initialVotes = this.votes;
    }

    outOfBounds() {
        return Math.abs(this.initialVotes - (this.votes + this.myVote)) > 1;
    }

    voteUp() {
        if (this.outOfBounds()) return;

        this.myVote += 1;
    }

    voteDown() {
        if (this.outOfBounds()) return;

        this.myVote += -1;
    }
}