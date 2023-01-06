import Image from "next/image";

type Props = {
  beerImage: string;
  beerName: string;
  description: string;
}

const PCBeerCard = (props: Props) => {
  const { beerImage, beerName, description } = props;
  return (
    <>
      <div>
        <p>{beerName}</p>
        <Image src={beerImage} alt={"beer"} layout="fill"></Image>
        <p>{description}</p>
      </div>
    </>
  )
}

export default PCBeerCard