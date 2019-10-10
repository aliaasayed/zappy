import { Component, OnInit } from '@angular/core';
import { TweetsService } from "../../services/tweets.service";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets = []
  constructor(/*private tweetsService: TweetsService*/) {
    // this.tweetsService.getTweets().subscribe(res => {
    //   this.tweets = res.tweets;
    // });
  }

  ngOnInit() {
  }

}
