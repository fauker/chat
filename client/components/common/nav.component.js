'use strict'

import { Component, Input } from '@angular/core'
import { SearchComponent } from '../search/search.component'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navigation',
  template: `
    <nav>
      <a routerLink="/welcome">
        <h3>Chat</h3>
      </a>
      <div class="search-bar">
        <search></search>
      </div>
      <div class="controls">
        <notifications></notifications>
        <a routerLink="/profile/{{ currentUser.username }}" class="perfil">
          <img [src]="currentUser.avatar_url">
        </a>
        <a class="logout" href="/logout">
          <img src="http://fabounet03.free.fr/Cairo-Dock/themes2.2/Text-White/Text-White/icons/logout.svg"> 
        </a>
      </div>
    </nav>
  `
})
export class NavComponent {
  @Input() currentUser
}
