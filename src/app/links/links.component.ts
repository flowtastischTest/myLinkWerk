import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface UserModel {
  name:     string,
  img:      string,
  mainLink: string
};
interface LinksCard {
  txt:  string,
  icon: string,
  link: string,
};
interface LinksCards extends Array<LinksCard> {};

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

  userModel: UserModel = {
    name:     'myName',
    img:      'profileImg.webp',
    mainLink: 'https://myLinkHere.com'
  };

  cards: LinksCards = [
    {
      txt:  'My Twitch Streams',
      icon: 'bi bi-twitch',
      link: 'https://myLinkHere.com'
    }
  ];
}
