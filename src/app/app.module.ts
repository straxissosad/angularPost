import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { InputComponent } from './components/UI/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
