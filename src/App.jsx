import './App.css';
import {countSoldTv} from "./helpers/soldtvs.js";
import {countBoughtTv} from "./helpers/boughttvs.js";
import {toBeSold} from './helpers/tobesold.js';
import {titleProduct} from './helpers/titlestring.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {priceProduct} from "./helpers/pricing.js";
import {size} from "./helpers/screensizes.js";

function App() {

  return (
      <>
          <header>
            <h1>Tech it easy dashboard</h1>
          </header>
          <main>
              <h2>Verkoopoverzicht</h2>
              <article className={'container'}>
                  <div className={'boxes box1'}>
                      <p>Aantal verkochte producten</p>
                      <p>{countSoldTv()}</p>
                  </div>
                  <div className={'boxes box2'}>
                      <p>Aantal ingekochte producten</p>
                      <p>{countBoughtTv()}</p>
                  </div>
                  <div className={'boxes box3'}>
                      <p>Aantal te verkopen producten</p>
                      <p>{toBeSold()}</p>
                  </div>
              </article>
              <h2>Best verkochte tv</h2>
              <article className={'container container-variaty'}>
                  <span className={'img-wrapper'}>
                      <img src={bestSellingTv.sourceImg} alt="mooie bestseller tv"/>
                  </span>
                  <div className={'inner-container-info'}>
                    <p>{titleProduct(bestSellingTv)}</p>
                    <p>{priceProduct(bestSellingTv)}</p>
                    <p>{size(bestSellingTv)}</p>
                     <span className={'container-icon'}>
                         <span className={'wrapper-icon'}>
                             <img src="./src/assets/check.png" alt="icon check"/>
                         </span><p>wifi</p>
                         <span className={'wrapper-icon'}><img src="./src/assets/minus.png" alt="not icon"/></span><p>speech</p>
                         <span className={'wrapper-icon'}><img src="./src/assets/check.png" alt="icon check"/></span><p>hdr</p>
                         <span className={'wrapper-icon'}><img src="./src/assets/check.png" alt="icon check"/></span><p>bluetooth</p>
                         <span className={'wrapper-icon'}><img src="./src//assets/minus.png" alt="not icon"/></span><p>ambilight</p>
                     </span>
                  </div>
              </article>
              <div>
                  <button>Meest verkocht eerst</button>
                  <button>Goedkoopste eerst</button>
                  <button>Meest geschikt voor sport eerst</button>
              </div>
          </main>
      </>
  )
}

export default App
