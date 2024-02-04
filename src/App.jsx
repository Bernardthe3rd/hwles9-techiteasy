import './App.css';
import {inventory} from './constants/inventory.js';
import {titleProduct} from "./helperspt2/titlestring.js";
import {priceProduct} from "./helperspt2/pricingtv.js";
import {size} from "./helperspt2/sizes.js";
import {options} from "./helperspt2/optionstv.js";

function App() {
  return (
      <>
        <header>
          <h1>Alle tvs</h1>
          <button type={'submit'}>Meest verkocht eerst</button>
          <button type={'submit'}>Goedkoopste eerst</button>
          <button type={'submit'}>Meest geschikt voor sport eerst</button>
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
                                    <li key={tv.type}>{options(tv)}</li>
                                    <li key={tv.type}>{options(tv)}</li>
                                    <li key={tv.type}>{options(tv)}</li>
                                    <li key={tv.type}>{options(tv)}</li>
                                    <li key={tv.type}>{options(tv)}</li>
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
