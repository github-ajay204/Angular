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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

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
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule
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
    provideHttpClient(withFetch()),
    {provide: 'NODE_TLS_REJECT_UNAUTHORIZED', useValue: '0' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
