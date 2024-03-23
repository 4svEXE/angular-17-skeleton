export interface SectionItem {
  title: string;
  items: FooterNavItem[];
}

export interface FooterNavItem {
  label: string;
  link?: string;
  icon?: string;
  value?: string;
}

export const Sections: SectionItem[] = [
  {
    title: 'Клієнтам',
    items: [
      { label: 'Про нас', link: '/info/about-us' },
      { label: 'Контакти', link: '/info/contacts' },
      { label: 'Угода користувача', link: '/info/user-agreement' },
      { label: 'Питання та відповіді', link: '/info/faq' },
      { label: 'Відгуки про магазин', link: '/info/store-reviews' },
    ],
  },
  {
    title: 'Каталог',
    items: [
      { label: 'Всі килими', link: '/' },
      { label: "Дитячі килими Україна м'які", link: '/' },
      { label: 'Дитячі килими Україна щільні', link: '/' },
      { label: 'Дитячі килими Україна круглі', link: '/' },
      { label: 'Килими бавовняні Туреччина', link: '/' },
    ],
  },
  {
    title: 'Контакти',
    items: [
      { label: '097 328 58 54', icon: 'phone', value: 'tel:+0973285854' },
      { label: 'м.Івано-Франковськ', icon: 'location', value: '/' },
      {
        label: '0973285854',
        icon: 'whatsApp',
        value: 'https://wa.me/0973285854',
      },
      {
        label: 'bontex.com.ua@gmail.com',
        icon: 'email',
        value: 'mailto:bontex.com.ua@gmail.com',
      },
    ],
  },
];
