import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { CreateinfoComponent } from './createinfo/createinfo.component';

import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoreinfoComponent,
    CreateinfoComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'moreinfo',
        component:MoreinfoComponent
      },
      {
        path:'createinfo',
        component:CreateinfoComponent
      },
    ]),
    FormsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
