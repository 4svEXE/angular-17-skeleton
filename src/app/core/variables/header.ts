export interface LinkInterface {
  title: string; // "Блог"
  path: string; // "/blog"
}

export const HeaderLinks: LinkInterface[] = [
  { title: 'Акції', path: '/sales' },
  { title: 'Доставка та оплата', path: '/prices' },
  { title: 'Обмін та повернення', path: '/help' },
  { title: 'Про нас', path: '/help' },
];
