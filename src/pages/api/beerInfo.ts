// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { BeerItem } from 'src/models/common';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeerItem[]>
) {
  res.status(200).json([
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
    {
      name: 'ねこにひき',
      imagePath: '/assets/dummy/dummyBeer.png',
      beerStyle: 'ペールエール',
      brewery: '伊勢角谷麦酒',
      description: '優しい香りが特徴',
    },
  ]);
}
