import Head from 'next/head';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Layout, Link } from 'components/index'


export default function Home() {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Cavid_Malikli</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Paper>
          <main>
            <h1 className="title">
              Bloguma xoş gəlmisiniz
        </h1>
            <div className='image_container'>
              <img src="/images/worktable.jpg" alt='' />
            </div>

          </main>

          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example
        </Typography>
            <Button variant="contained" component={Link} href='/about' color="primary" >
              Go to the main page
        </Button>
          </Box>
        </Paper>

      </Container>
    </Layout>

  )
}

const Container = styled.div`
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

main {
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
}

.image_container{
  display:flex;
  justify-content:center;
  width:100%;
  padding:5rem 0;
  img{
    width:80%;
    height:auto;
    border-radius:10px;
  }
}
`
