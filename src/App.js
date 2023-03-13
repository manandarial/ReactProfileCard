import './App.css';
import Nft from './components/Nft'

function App() {
  return (
    <>
      <Nft
        img="image-equilibrium.jpg"
        name="Equilibrium #3479"
        price="0.041ETH"
        time="3 days left"
        authorname="Abdul Manan"
        authorimg="image-avatar.png"
      />
      <Nft
        img="image-square.jpeg"
        name="SquarETH #2077"
        price="0.011ETH"
        time="7 days left"
        authorname="Adam Slater"
        authorimg="image-avatar2.png"
      />
    </>
  );
}

export default App;
