/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  title: string;
  imagePath: string;
  beerStyle: string;
  brewery: string;
  description: string;
}

export const BeerCard = (props: Props) => {
  const { title, imagePath, beerStyle, brewery, description } = props;


  const cardStyle = css({
    border: "solid",
    borderRadius: "10px",
    width: "170px",
    height: "226px",
    textAlign: "center"
  })

  const listWrapper = css({
    paddingLeft: "0",
    "& li": {
      listStyle: "none"
    }

  })

  return (
    <div css={cardStyle}>
      <ul css={listWrapper}>
        <li> {title} </li>
        <li>
          <Image src={imagePath} alt={`${title}の画像`} height={85} width={70} />
        </li>
        <li> {beerStyle} </li>
        <li> {brewery} </li>
        <li> {description} </li>
      </ul>
    </div>
  )
}
