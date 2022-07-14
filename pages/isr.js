import Head from 'next/head';
import { useRouter } from 'next/router';

let tokenId = 47;

export default function ISR({ latestNFTData }) {
  const router = useRouter();
  console.log('ISR=', latestNFTData);
  return (
    <div className="container">
      <Head>
        <title>ISR POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        ISR Home Page
        </h1>
        <button onClick={() => {
          console.log('detals page btn clicked');
          router.push(`/details/${tokenId}`);
        }}>Go to Details Page</button>

        {/* <div>
          {latestNFTData.map((nft) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <div style={{ margin: 10, width: 100 }}>{nft.creatorName}</div>
                <div style={{ margin: 10, width: 300 }}>{nft.description}</div>
                <div style={{ margin: 10, width: 100 }}>{nft.name}</div>
              </div>
            )
          })}
        </div> */}
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
    return {
        props : {
            id: params.id,
            title: `Product id : ${params.id}`
        }
    }
}

export async function getStaticPaths() {
    const paths = [...new Array[5]].map((i, index) => {
        return {
            params: {
                id: `${index+1}`
            }
        }
    });
}

// // This function gets called at build time
//   export async function getStaticProps({ req, res }) {
//     // debugger;
//     console.log(
//       'Home getStaticProps is called req=',req, ' res=', res);
//       Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
//   Parse.serverURL = process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL;
//     const params = {
//       limit: 10,
//       skip: 0,
//     };
//     // Call an external API endpoint to get posts
//     const result = await Parse.Cloud.run('getTrendingNfts', params);
//     console.log('result = ', result);
//     // const result = await res.json();
//     let latestNFTData = [];
//     if (result?.data?.nftList?.length > 0) {
//       // latestNFTData = result.data.nftList;
//       latestNFTData = result.data.nftList.map((rowObject) => {
//         console.log('rowObject=', rowObject);
//         return {
//           ...rowObject,
//           createdAt: rowObject.createdAt.toString(),
//         };
//       });
//       // }
//       console.log('Home final finalData = ', result.data);
//     }
//     console.log('Home latestNFTData = ', latestNFTData);

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         latestNFTData,
//       },
//     };
//   }

// This function gets called at build time
export async function getServerSideProps({ req, res }) {
  // debugger;
  console.log(
    'Home getStaticProps is called req=', req, ' res=', res);
    Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
    Parse.serverURL = process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL;
  const params = {
    limit: 3,
    skip: 0,
  };
  // Call an external API endpoint to get posts
  const result = await Parse.Cloud.run('getTrendingNfts', params);
  console.log('result = ', result);
  // const result = await res.json();
  let latestNFTData = [];
  if (result?.data?.nftList?.length > 0) {
    // latestNFTData = result.data.nftList;
    latestNFTData = result.data.nftList.map((rowObject) => {
      console.log('rowObject=', rowObject);
      return {
        ...rowObject,
        createdAt: rowObject.createdAt.toString(),
      };
    });
    // }
    console.log('Home final finalData = ', result.data);
  }
  console.log('Home latestNFTData = ', latestNFTData);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      latestNFTData,
    },
  };
}
