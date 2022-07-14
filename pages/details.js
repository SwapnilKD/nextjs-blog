import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Deatils({ latestNFTData }) {
  const router = useRouter();
  console.log('Deatils=', latestNFTData);

    const temp = () => {
        fetch('http://localhost:1337/login', {
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      // credentials: 'same-origin',
      credentials: 'include',
      // method: 'POST',
      // body: JSON.stringify(auth),
    //   mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
    })
    .then( response => response.json() )
      .then((response1) => {
        // debugger;
        console.log('conect meta response = ', response1);
        // if (response1) {
        //   console.log('called fetch response = ', response1);
         
        //   Parse.User.become(response1?.sessionToken).then(function (user) {
        //   // The current user is now set to user.
        //   console.log('inside current user set for server side apis', user);
        //   router.replace(router.asPath);
        // }, function (error) {
        //   // The token could not be validated.
        //   console.log('user session error =', error, error.toString())
        // });
        // } else {
        //   console.log('failed to upload file = ', response1);
        // }
      })
      .catch((error3) => {
        // debugger;
        // setSelectedFile(null);
        // setLoading(false);
        // message.error(error3.toString());
        console.log('meta login error = ', error3, error3.toString());
      });
    }

  return (
    <div className="container">
      <Head>
        <title>Deatail Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Details Page
        </h1>
        <button onClick={()=>{
          console.log('back btn clicked');
          temp();
        //   router.back();
        }}>Call Middleware Login</button>
       
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

// // This function gets called at build time
//   export async function getStaticProps({ req, res }) {
//     // debugger;
//     console.log(
//       'Home getStaticProps is called req=',req, ' res=', res);
//      Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
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
// export async function getServerSideProps(context) {
//     // debugger;
//     console.log('getServerSideProps context - ', context)
//     const { query } = context
//   const { nftId } = query
//     console.log(
//       'NFT details getStaticProps is called req=',req, ' res=', res);
//       const Parse = require('parse/node');
//       Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
//   Parse.serverURL = process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL;
//     const params = {
//       limit: 10,
//       skip: 0,
//     };
//     // Call an external API endpoint to get posts
//     const result = await Parse.Cloud.run('getNftDetails', params);
//     console.log('result = ', result);
//     // const result = await res.json();
//     let nftDetails = defaultData;
//     if (result?.status && result?.data) {
//       nftDetails = result.data;
//       console.log('NFT details final finalData = ', result.data);
//     }
//     console.log('NFT details nftDetails = ', nftDetails);
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         nftDetails,
//       },
//     };
//   }
