import { useEffect, useState } from "react"
import PCBeerCard from "src/components/molecules/beer-card/PCBeerCard"
import PCHeader from "src/components/molecules/header/PCHeader"
import { getBeerInfo } from "src/libs/api/getBeerInfo"
import { BeerItem } from "src/models/beer"

const PCBeerCategory = () => {

  const [beerItems, setBeerItems] = useState<BeerItem[]>([]);
  const getInfo = async () => {
    const beerInfo: BeerItem[] = await (await getBeerInfo()).data
    setBeerItems(beerInfo)
    console.log(beerInfo)
  }

  useEffect(() => {
    getInfo()
  }, [])
  return (
    <>
      <PCHeader />
      {beerItems.map((item: BeerItem, index) => {
        return (
          <div key={index}>
            <PCBeerCard
              beerImage={item.beerImage}
              beerName={item.beerName}
              description={item.description}
            />
          </div>
        )
      })}
    </>
  )
}

export default PCBeerCategory