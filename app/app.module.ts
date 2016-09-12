import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { DashboardComponent }        from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent }   from './heroes.component';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        AppComponent,
        DashboardComponent
    ],
    bootstrap:    [
        AppComponent
    ],
    providers: [
        HeroService
    ]
})
export class AppModule { }