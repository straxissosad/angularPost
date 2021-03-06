import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { InputComponent } from './components/UI/input/input.component';
import {FormsModule} from "@angular/forms";
import { SwitcherComponent } from './components/switcher/switcher.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponent,
    ButtonComponent,
    InputComponent,
    SwitcherComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
