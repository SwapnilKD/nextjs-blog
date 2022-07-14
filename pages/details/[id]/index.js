import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DetailsPage({ id, title }) {
  const router = useRouter();
//   debugger;
  const { nftId } = router.query;
  console.log('DetailsPage id, title=', id, title, ' nftId=', nftId);
  return (
    <div className="container">
      <Head>
        <title>Deatail Page {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Details Page {title}
        </h1>
        <button onClick={()=>{
          console.log('back btn clicked');
          router.back();
        }}>Go to Details Page</button>
        <p className="description">
          Product id: {id}
        </p>

        {/* {latestNFTData ? <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: 10, width: 100 }}>{latestNFTData.creatorName}</div>
            <div style={{ margin: 10, width: 300 }}>{latestNFTData.description}</div>
            <div style={{ margin: 10, width: 100 }}>{latestNFTData.name}</div>
            <div style={{ margin: 10, width: 100 }}>{latestNFTData.country}</div>
        </div> : 'No NFt Data'} */}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
  
}

export async function getStaticProps({ params = {} } = {}) {
    console.log('details page getStaticProps params=', params)
    return {
        props : {
            id: params.id,
            title: `Product id : ${params.id}`
        }
    }
}

export async function getStaticPaths() {
    console.log('details page getStaticPaths called')
    let temp =  ['1', '2', '3', '4']
    const paths = temp.map((i, index) => {
        return {
            params: {
                id: `${index+1}`
            }
        }
    });
}
