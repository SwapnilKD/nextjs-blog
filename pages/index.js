import Head from 'next/head';
import { useRouter } from 'next/router';

let tokenId = 47;

export default function Home({ latestNFTData }) {
  const router = useRouter();
  console.log('latestNFTData=', latestNFTData);
  return (
    <div className="container">
      <Head>
        <title>SSR POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          SSR Home Page
        </h1>
        <button onClick={() => {
          console.log('detals page btn clicked');
          router.push(`/details/${tokenId}`);
        }}>Go to Details Page</button>

        <div>
          {latestNFTData && latestNFTData.map((nft) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', margin: 20, padding: 5, border: '2px solid #000000' }}>
                <div style={{ margin: 10, width: 100 }}>{nft.creatorName}</div>
                <div style={{ margin: 10, width: 300 }}>{nft.description}</div>
                <div style={{ margin: 10, width: 100 }}>{nft.name}</div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )

}

// // This function gets called at build time
//   export async function getStaticProps({ req, res }) {
//     // debugger;
//     console.log(
//       'Home getStaticProps is called req=',req, ' res=', res);
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
// export async function getServerSideProps({ req, res }) {
//   // debugger;
//   const Parse = require('parse/node');
//   console.log(
//     'Home getStaticProps is called req=', req, ' res=', res);
//   Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
//   Parse.serverURL = process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL;
//   const params = {
//     limit: 3,
//     skip: 0,
//   };
//   // Call an external API endpoint to get posts
//   const result = await Parse.Cloud.run('getTrendingNfts', params);
//   console.log('result = ', result);
//   // const result = await res.json();
//   let latestNFTData = [];
//   if (result?.data?.nftList?.length > 0) {
//     // latestNFTData = result.data.nftList;
//     latestNFTData = result.data.nftList.map((rowObject) => {
//       console.log('rowObject=', rowObject);
//       return {
//         ...rowObject,
//         createdAt: rowObject?.createdAt?.toString() || '',
//       };
//     });
//     // }
//     console.log('Home final finalData = ', result.data);
//   }
//   console.log('Home latestNFTData = ', latestNFTData);

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       latestNFTData,
//     },
//   };
// }
