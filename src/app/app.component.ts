import { PackagePaymentsPage } from './../pages/package-payments/package-payments';
import { BookingsPage } from './../pages/bookings/bookings';
import { PaymentsPage } from './../pages/payments/payments';
import { ServiceProvidersPage } from './../pages/service-providers/service-providers';
import { ClientsPage } from './../pages/clients/clients';
import { AddNewAgentPage } from './../pages/add-new-agent/add-new-agent';

import { EditClientPage } from './../pages/edit-client/edit-client';
import { AddNewClientPage } from './../pages/add-new-client/add-new-client';
import { ViewItenararyPage } from '../pages/view-itenarary/view-itenarary';


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { TravelAgentsPage } from './../pages/travel-agents/travel-agents';
import { EditTravelAgentPage } from './../pages/edit-travel-agent/edit-travel-agent';
import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';
import { TravelAgentProfilePage } from './../pages/travel-agent-profile/travel-agent-profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Edit Profile', component: EditProfilePage },
      { title: 'Travel Agents', component: TravelAgentsPage },
      { title: 'Clients', component: ClientsPage },
      { title: 'Service Providers', component: ServiceProvidersPage },
      { title: 'Itenararies', component: ViewItenararyPage },
      { title: 'Itinerary Payments', component: PaymentsPage },
      { title: 'Package Payments', component: PackagePaymentsPage },
      { title: 'Bookings', component: BookingsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
