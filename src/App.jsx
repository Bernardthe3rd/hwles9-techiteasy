import './App.css';
import {countSoldTv} from "./helpers/soldtvs.js";
import {countBoughtTv} from "./helpers/boughttvs.js";
import {toBeSold} from './helpers/tobesold.js';

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
          </main>

      </>
  )
}

export default App
