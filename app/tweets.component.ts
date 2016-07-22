import {Component} from 'angular2/core';
import {TweetService} from "./tweet.service";

@Component({
    selector: 'tweets',
    styles: [`
    
        .media-heading {
            display: inline-block;
        }
        
        .tweet-tweet {
            display: block;
        }

    `],

    template: `

        <ul *ngFor="#tweet of tweets">
        
            <li class="media">
            <div class="media-left">
            <a href="#">
              <img class="media-object" [src]="tweet.avatar">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{tweet.username}}</h4>
            <span class="tweet-handle">{{tweet.handle}}</span>
            <span class="tweet-tweet">
                {{tweet.tweet}}
            </span>
            </div>
          </li>
    </ul>
    `,

    providers: [TweetService]
})

export class TweetsComponent {

    tweets;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}