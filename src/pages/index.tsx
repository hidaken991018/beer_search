import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { GetTodoDocument } from "../../graphql/dist/client";
import { GetTodoQuery } from "../../graphql/dist/client";


const Home: NextPage = () => {

  const { data } = useQuery<GetTodoQuery>(GetTodoDocument)
  console.log(data)
  return (
    <>
    </>
  )
}

export default Home
