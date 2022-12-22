// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BeerItem } from 'src/models/beer'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeerItem[]>
) {
  res.status(200).json([{ beerImage: "/image", beerName: "IPA", description: "美味しいよ" }])
}
