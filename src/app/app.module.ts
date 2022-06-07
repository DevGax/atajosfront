import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
//import { ButtonsComponent } from './components/buttons/buttons.component';
import { AnimatedbackgroundComponent } from './components/animatedbackground/animatedbackground.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { ToggleComponent } from './components/elements/toggle/toggle.component';
import { ButtonsComponent } from './components/elements/buttons/buttons.component';
import {UIComponent} from './components/ui/ui.component';
import { CardsComponent } from './components/elements/cards/cards.component';
import { InputsComponent } from './components/elements/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UIComponent,
    ButtonsComponent,
    AnimatedbackgroundComponent,
    CheckboxComponent,
    ToggleComponent,
    CardsComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
