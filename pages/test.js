
export default function Deatils({ latestNFTData }) {
    // const router = useRouter();
    console.log('Deatils=', latestNFTData);

    return (
        <div className="container">
            {/* <Head>
          <title>Deatail Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

            <main>
                <h1 className="title">
                    Test Server Side Page with cookies
                </h1>
                <div>

                </div>
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

// this will be called on refreshing page and check cookies in application section of browser
export async function getServerSideProps(context) {
    // console.log('getServerSideProps allCookies=', context);
    const { req, res } = context;
    const cookies = require('next-cookies');
    const allCookies = cookies(context);
    console.log('getServerSideProps allCookies=', allCookies, allCookies['parse.session']?.sessionToken);
    // var val = JSON.stringify({sessionToken: user.getSessionToken()});
    // var opts = {path: '/', httpOnly: true};
    // res.cookie('parse.session', val, opts);
    const Parse = require('parse/node');

    // console.log('user session = ', sessionToken); // Pacman or undefined if not set yet
    // Parse.User.become(cookies.get('user_session')).then(function (user) {
    //   // The current user is now set to user.
    //   console.log('current user set for server side apis', user);
    // }, function (error) {
    //   // The token could not be validated.
    //   console.log('user session error =', error, error.toString())
    // });
    // console.log('parse user current =', Parse.User.current());
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // console.log('Parse env details app id ==', process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID, ' server url =', process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL)
    Parse.initialize(process.env.NEXT_PUBLIC_REACT_PARSE_APPLICATION_ID);
    // Parse.Session. = cookies.get('user_session');
    Parse.serverURL = process.env.NEXT_PUBLIC_REACT_APP_PARSE_SERVER_URL;

    // const params = {
    //   limit: 10,
    //   skip: 0,
    // };
    // // Call an external API endpoint to get posts
    // const result = await Parse.Cloud.run('getTrendingNfts', params);
    // console.log('result = ', result);
    // // const result = await res.json();
    // let latestNFTData = [];
    // if (result?.data?.nftList?.length > 0) {
    //   // latestNFTData = result.data.nftList;
    //   latestNFTData = result.data.nftList.map((rowObject) => {
    //     console.log('rowObject=', rowObject);
    //     return {
    //       ...rowObject,
    //       createdAt: rowObject.createdAt.toString(),
    //     };
    //   });
    //   // }
    //   console.log('Home final finalData = ', result.data);
    // }
    try {
        const params = {
            limit: 10,
            skip: 0,
        };
        const result = await Parse.Cloud.run('getTrendingNfts', params);
        console.log('getServerSideProps result = ', result);
        // const result = await res.json();

    } catch (error) {
        console.log('error = ', error, error.toString());

    }
    return {
        props: {

        },
    };
}