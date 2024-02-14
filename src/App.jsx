import './App.css';
import {inventory} from './constants/inventory.js';
import {titleProduct} from "./helperspt2/titlestring.js";
import {priceProduct} from "./helperspt2/pricingtv.js";
import {size} from "./helperspt2/sizes.js";
import {options} from "./helperspt2/optionstv.js";
import {mostSold} from "./helperspt2/eventlistbutton.js";
import {cheapest} from "./helperspt2/eventlistbutton.js";
import {sport} from "./helperspt2/eventlistbutton.js";


function App() {
  return (
      <>
        <header>
          <h1>Alle tvs</h1>
            <div className={'container-button'}>
                <button type={'submit'} onClick={mostSold}>Meest verkocht eerst</button>
                <button type={'submit'} onClick={cheapest}>Goedkoopste eerst</button>
                <button type={'submit'} onClick={sport}>Meest geschikt voor sport eerst</button>
            </div>
        </header>
          <main>
              <ul>
                {inventory.map((tv) => {
                    return <li key={tv.type}>
                          <article className={'container-variaty'}>
                            <span className={'img-wrapper'}>
                            <img src={tv.sourceImg} alt="mooie bestseller tv"/>
                            </span>
                            <div className={'inner-container-info'}>
                                <h2>{titleProduct(tv)}</h2>
                                <h2>{priceProduct(tv)}</h2>
                                <p>{size(tv)}</p>
                                <ul>
                                    <li key={1}>{options(tv)}</li>
                                </ul>
                            </div>
                          </article>
                    </li>
                })}
              </ul>
          </main>
      </>
)
}

export default App
