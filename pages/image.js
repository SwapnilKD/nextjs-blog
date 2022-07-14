import Head from 'next/head';
import { useRouter } from 'next/router';

let tokenId = 47;

export default function Image() {
  const router = useRouter();
  function zoomin() {
    var myImg = document.getElementById("my-img");
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }
  }
  
  function zoomout() {
    var myImg = document.getElementById("my-img");
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Image POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Image Home Page
        </h1>
        <button onClick={() => {
          console.log('image back page btn clicked');
          router.push(`/`);
        }}>Go to Home Page</button>

        <div style={{ display: 'flex', width: 300, marginTop: 30}}>
        <button onClick={() => {
          console.log('zoomin btn clicked');
          zoomin();
        }}>Zoom In +</button>
         <button onClick={() => {
          console.log('zoomout btn clicked');
          zoomout();
        }}>Zoom out -</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
          <img 
          id='my-img'
          alt='nftimage'
          width={400}
          height={400}
          src='https://lh3.googleusercontent.com/OCtiESh6fuX2tupgliz-H9yZxd0Kt2bV-0IJKDUTcaAeOaKx0WtN6nk-nQwnKyKcu04_fFHgoOdgRaTJ7EZb2Kc4YCUGfjsVpzBVtRQ=w600'
          />
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}
    </div>
  )

}

function zoomin() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }
  }
  
  function zoomout() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }
  }