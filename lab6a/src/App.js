import Product from "./product";
import "./App.css";
function App() {
  return (
    <div className="Container">
      <h1>Cricket Bats</h1>
      <div className="Prod">
        <Product
          img="https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/2402dd5b619382dc4aa18cf120f2b3ca/d/s/dsc-cricket-blak-english-willow-player-edition-2_1.jpg"
          name="DSC"
          desc="BLAK Players Edition English Willow Bat"
          price="₹94,999"
        />
        <Product
          img="https://www.mrfsports.com/sites/default/files/styles/homepage_bat_listing/public/mrf-genius-run-machine_0_1.png?itok=MOJcBiZl"
          name="MRF-RUN MACHINE"
          desc="MRF English Willow Genius Run Machine"
          price="₹55,555"
        />

        <Product
          img="https://cdn-5c84bc36-b681cbc1.mysagestore.com/b522fd52e101edc926c3308c230445d5/contents/2A14273SNR/thumbnail/big_2A14273SNR.jpg"
          name="KOOKABURRA"
          desc="
SHADOW PRO 2.0 SENIOR CRICKET BAT"
          price="₹88,888"
        />

        <Product
          img="https://www.gray-nicolls.co.uk/cdn/shop/files/Shockwave2.4Back_b0b57b10-7e67-43a8-98da-ff37332b5efd.jpg?v=1710930096&width=1500"
          name="GRAY-NICOLLS"
          desc="Shockwave 2.4 Players Adult Cricket Bat"
          price="₹77,777"
        />
      </div>
    </div>
  );
}
export default App;
            