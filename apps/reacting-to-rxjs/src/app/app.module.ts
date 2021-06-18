import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonGroupModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StarkComponent } from './stark/stark.component';
import { LannisterComponent } from './lannister/lannister.component';
import { WriterComponent } from './writer/writer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, StarkComponent, LannisterComponent, WriterComponent],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    NbThemeModule.forRoot({ name: 'dark' }),
     NbLayoutModule, 
     NbEvaIconsModule, 
     AppRoutingModule,
     NbCardModule,
     NbButtonModule,
     NbButtonGroupModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
