import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { DeliveryAndPaymentsComponent } from './components/delivery-and-payments/delivery-and-payments.component';
import { CatalogInfoComponent } from './components/catalog-info/catalog-info.component';
import { ExchangeAndReturnsComponent } from './components/exchange-and-returns/exchange-and-returns.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserAgreementComponent } from './components/user-agreement/user-agreement.component';
import { FaqComponent } from './components/faq/faq.component';
import { StoreReviewsComponent } from './components/store-reviews/store-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: 'catalog-info',
        component: CatalogInfoComponent,
      },
      {
        path: 'delivery-and-payments',
        component: DeliveryAndPaymentsComponent,
      },
      {
        path: 'exchange-and-returns',
        component: ExchangeAndReturnsComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'user-agreement',
        component: UserAgreementComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'store-reviews',
        component: StoreReviewsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
