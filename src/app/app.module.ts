import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamsComponent } from './exams/exams.component';
import { BasicComponent } from './basic/basic.component';
import { JavaintermediateComponent } from './javaintermediate/javaintermediate.component';
import { JavaexpertComponent } from './javaexpert/javaexpert.component';
import { CbasicComponent } from './cbasic/cbasic.component';
import { CintermediateComponent } from './cintermediate/cintermediate.component';
import { CexpertComponent } from './cexpert/cexpert.component';
import { AngularbasicComponent } from './angularbasic/angularbasic.component';
import { AngularintermediateComponent } from './angularintermediate/angularintermediate.component';
import { AngularexpertComponent } from './angularexpert/angularexpert.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UserinformationComponent } from './userinformation/userinformation.component';
import { UserperformanceComponent } from './userperformance/userperformance.component';
import { AuthService } from './auth.service';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    UserComponent,
    AdminComponent,
    ProfileComponent,
    ExamsComponent,
    BasicComponent,
    JavaintermediateComponent,
    JavaexpertComponent,
    CbasicComponent,
    CintermediateComponent,
    CexpertComponent,
    AngularbasicComponent,
    AngularintermediateComponent,
    AngularexpertComponent,
    ChangepasswordComponent,
    UploadsComponent,
    UserinformationComponent,
    UserperformanceComponent,
    UserdashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
              useClass:AuthService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
