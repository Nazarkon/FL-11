import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { CreateinfoComponent } from './createinfo/createinfo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './homepage/search.pipe';
import { NewsService } from './homepage/news.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoreinfoComponent,
    CreateinfoComponent,
    SearchPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
