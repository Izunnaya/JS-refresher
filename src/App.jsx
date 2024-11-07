import Player from "./component/Player";

function App() {
  return (
    <div id="game-container">
      <Player name="Player 1" symbol="X" />
      <Player name="Player 2" symbol="0" />
    </div>
  );
}

export default App;
