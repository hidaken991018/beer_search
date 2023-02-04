import { useEffect, useState } from "react";
import { BeerCard } from "src/components/ui/BeerCard";
import { BeerFilter } from "src/components/ui/BeerFilter";
import { FetchBeer } from "src/utils/api/fetchBeer";



const Beer = () => {

  const [beerItems, setBeerItems] = useState<any[]>([])
  const [isReady, setIsReady] = useState<boolean>(false)

  /**
   * ビール情報取得
   * @returns 
   */
  const setViewItem = async () => {
    const fetchBeer = new FetchBeer()
    const beerItems = await fetchBeer.getBeer()
    if (beerItems !== undefined) {
      setBeerItems(beerItems)
      setIsReady(true)
    }
  }

  /**
   * 初回レンダリング時
   */
  useEffect(() => {
    setViewItem()
  }, [])

  if (isReady) {
    if (beerItems) {
      return (
        <>
          <div className="max-w-5xl mx-auto pt-5">
            <BeerFilter />
            <div className="my-1 pt-5 flex justify-start flex-wrap">
              {beerItems.map((item, index) => (
                <div className="ml-5 mb-5" key={index} >
                  <BeerCard
                    title={item.name}
                    imagePath={item.image_url}
                    beerStyle={item.style}
                    brewery={item.brewery}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )
    } else {
      return (
        <p>お探しの商品はありません</p>
      )
    }
  } else {
    return null;
  }

}
export default Beer