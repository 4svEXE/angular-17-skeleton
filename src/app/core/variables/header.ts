export interface LinkInterface {
  title: string; // "Блог"
  path: string; // "/blog"
}

export const HeaderLinks: LinkInterface[] = [
  { title: 'Акції', path: '/catalog/promotions' },
  { title: 'Доставка та оплата', path: '/info/delivery-and-payments' },
  { title: 'Обмін та повернення', path: '/info/exchange-and-returns' },
  { title: 'Про нас', path: '/info/about-us' },
];
