import { Header } from 'src/components/layout/common/Header';
import { Footer } from 'src/components/layout/common/Footer';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'sanitize.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { Suspense } from 'react';
import { SideBar } from 'src/components/layout/common/SideBar';
import { Box } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  const link = createHttpLink({
    uri: 'http://localhost:8080/query',
    credentials: 'include',
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
          >
            <Header />
            <Suspense
              fallback={
                <>
                  <p>ローディング</p>
                </>
              }
            >
              <div style={{ marginTop: '70px' }}>
                <Component {...pageProps} />
              </div>
            </Suspense>
            <Footer />
          </Box>
        </Box>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
