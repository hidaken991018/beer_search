import { NavLink } from 'src/models/common';

export const API_URL = {};

export const NAVI_LINKS: NavLink[] = [
  { name: 'ホーム', link: '/' },
  { name: 'おすすめ', link: '/recommend' },
  { name: '店舗を探す', link: '/search/shop' },
  { name: 'ビールを探す', link: '/search/beer' },
  { name: '商品情報登録', link: '/register/beer' },
  { name: '店舗情報登録', link: '/register/shop' },
];
