import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DemoComponent } from './demo/demo.component';

import { FormsModule } from '@angular/forms';//added by ajay
import { MyDirectiveDirective } from './my-directive.directive';//added by ajay
import { NsService } from './ns.service';//added by ajay
import { RouterModule,Route, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { TdfComponent } from './tdf/tdf.component';//added by ajay for 1
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EmpployeeComponent } from './empployee/empployee.component';

const  appRoutes:Routes =[
  {path :'demo',component:DemoComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MyDirectiveDirective,
    TdfComponent,
    EmpployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // ,
    // 
    // RouterModule.forRoot(
    //   [
    //     {path:'demo',component:DemoComponent}
    //   ]
    // )
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    NsService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
