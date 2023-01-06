import { Header } from 'src/components/layout/common/Header'
import { Footer } from 'src/components/layout/common/Footer'
import '../styles/globals.css'
import type { AppProps } from "next/app"
import 'sanitize.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {

  const link = createHttpLink({
    uri: "http://localhost:8080/query",
    credentials: "include",
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div style={{ marginTop: "70px" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ApolloProvider>
    </>
  )
}

export default MyApp
