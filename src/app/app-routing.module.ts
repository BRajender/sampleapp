import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
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
import { UserdashbordComponent } from './userdashbord/userdashbord.component';


const routes: Routes = [
 
{path:'child', component:ChildComponent,children:[
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'contactus',component:ContactusComponent},
{path:'aboutus',component:AboutusComponent },


]},
{path:'',redirectTo:"child/home",pathMatch:"full"},
{path:'user',component:UserComponent,children:[{path:'profile',component:ProfileComponent},{path:'exams',component:ExamsComponent},{path:'userdashbord',component: UserdashbordComponent },{path:'changepassword',component:ChangepasswordComponent},{path:'',redirectTo:"userdashbord",pathMatch:"full"}]},




{path:'basic',component:BasicComponent},
{path:'javaintermediate',component:JavaintermediateComponent},
{path:'javaexpert',component:JavaexpertComponent},
{path:'cbasic',component:CbasicComponent},
{path:'cexpert',component:CexpertComponent},
{path:'cintermediate',component:CintermediateComponent},
{path:'angularbasic',component:AngularbasicComponent},
{path:'angularintermediate',component:AngularintermediateComponent},
{path:'angularexpert',component:AngularexpertComponent},
{path:'admin',component:AdminComponent,children:[{path:'uploads',component:UploadsComponent},{path:'userinformation',component:UserinformationComponent},{path:'userperformance',component:UserperformanceComponent},{path:'',redirectTo:"uploads",pathMatch:"full"}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
