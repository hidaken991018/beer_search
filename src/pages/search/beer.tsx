/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { BeerCard } from "src/components/ui/BeerCard";
import { getBeerInfo } from "src/libs/api/getBeerInfo";
import { BeerItem } from "src/models/common";
import { BeerFilter } from "src/components/ui/BeerFilter";
import { supabase } from "src/utils/supabaseClient";



const Beer = () => {

  const [beerItems, setBeerItems] = useState<any[]>([])
  const [isReady, setIsReady] = useState<boolean>(false)

  const body = css({
    width: "1080px",
    margin: "0px auto 16px auto",
    paddingTop: "16px",
    // display: "flex",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    "> div": {
      // margin: "0 auto",
    }
  });

  const beerItemsWrapper = css({
    margin: "16px auto",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  })

  /**
   * ビール情報取得
   * @returns 
   */
  // const getBeerItems = async () => {
  //   return await (await getBeerInfo()).data
  // }

  /**
   * ビール情報セット
   * @returns 
   */
  // const concatGetDate = async () => {
  //   let beerItems = await getBeerItems()
  //   if (!beerItems) {
  //     setIsReady(true)
  //     return
  //   }
  //   setBeerItems(beerItems);
  //   setIsReady(true)
  // };

  const getBeerInfo = async () => {
    try {
      const { data, error } = await supabase.from("beer").select("*");
      if (data) setBeerItems(data)
      if (error) throw error;
      console.log(error)
    } catch (error: any) {
      console.log(error)
    }
  }

  /**
   * 初回レンダリング時
   */
  useEffect(() => {
    // concatGetDate()
    getBeerInfo()
  }, [])

  useEffect(() => {
    console.log(beerItems)
  }, [beerItems])

  if (isReady) {
    if (beerItems) {

      return (
        <>
          <div css={body}>
            <BeerFilter />
            <div css={beerItemsWrapper}>
              {beerItems.map((item, index) => (
                <BeerCard
                  title={item.name}
                  imagePath={item.image_url}
                  beerStyle={item.style}
                  brewery={item.brewery}
                  description={item.description}
                  key={index} />
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