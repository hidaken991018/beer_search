import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PCBeerCategory from 'src/components/templates/beer-category/PCBeerCategory'

import { useQuery } from '@apollo/client'
import { GetTodoDocument } from "../../graphql/dist/client";
import { GetTodoQuery } from "../../graphql/dist/client";


const Home: NextPage = () => {

  const { data } = useQuery<GetTodoQuery>(GetTodoDocument)
  console.log(data)
  return (
    // <PCBeerCategory/>
    <>
      {/* {data} */}

    </>
  )
}

export default Home
