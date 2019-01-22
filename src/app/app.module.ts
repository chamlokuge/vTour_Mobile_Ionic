import { AddNewPackagePage } from './../pages/add-new-package/add-new-package';
import { EditPackagePage } from './../pages/edit-package/edit-package';
import { PackagesPage } from './../pages/packages/packages';
import { AddNewServiceProviderPage } from './../pages/add-new-service-provider/add-new-service-provider';
import { ServiceProvidersPage } from './../pages/service-providers/service-providers';
import { ViewItenararyPage} from '../pages/view-itenarary/view-itenarary';
import { EditClientPage } from './../pages/edit-client/edit-client';
import { AddNewClientPage } from './../pages/add-new-client/add-new-client';
import { ClientsPage } from './../pages/clients/clients';
import { AddNewAgentPage } from './../pages/add-new-agent/add-new-agent';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 

import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { TravelAgentsPage } from './../pages/travel-agents/travel-agents';
import { EditTravelAgentPage } from './../pages/edit-travel-agent/edit-travel-agent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditServiceProvidersPage } from '../pages/edit-service-providers/edit-service-providers';
import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';
import { TravelAgentProfilePage } from './../pages/travel-agent-profile/travel-agent-profile';

import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditProfilePage,
    TravelAgentsPage,
    EditTravelAgentPage,
    AddNewAgentPage,
    ClientsPage,
    ServiceProvidersPage,
    AddNewServiceProviderPage,
    EditServiceProvidersPage,
    AddNewClientPage,
    EditClientPage,
    PackagesPage,
    EditPackagePage,
    AddNewPackagePage,
    EditClientPage,
    ViewItenararyPage,
    ForgotPasswordPage,
    TravelAgentProfilePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditProfilePage,
    TravelAgentsPage,
    EditTravelAgentPage,
    AddNewAgentPage,
    ClientsPage,
    ServiceProvidersPage,
    AddNewServiceProviderPage,
    EditServiceProvidersPage,
    AddNewClientPage,
    EditClientPage,
    PackagesPage,
    EditPackagePage,
    AddNewPackagePage,
    EditClientPage,
    ViewItenararyPage,
    ForgotPasswordPage,
    TravelAgentProfilePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertService,
    ToastService,
    CameraProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
