import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PCBeerCategory from 'src/components/templates/beer-category/PCBeerCategory'

const Home: NextPage = () => {
  return (
    <PCBeerCategory/>
  )
}

export default Home
