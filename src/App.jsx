import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/Loading";
import Grid from "./components/Grid";
import Winner from "./components/Winner";
import Menu from "./components/Menu";

function App() {
  const [grid, setGrid] = useState([
    { id: 0, text: "" },
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [winner, setWinner] = useState(null);
  const [wincombo, setWincombo] = useState(null);
  const [mode, setMode] = useState(false);
  const [menushowing, setMenushowing] = useState(true);


  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text && !winner) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });


    checkwin()
    setUser(!user);
    setGrid(newGrid);
  }

  function checkwin(){

    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (grid[a].text && grid[a].text === grid[b].text && grid[a].text === grid[c].text) {
        // console.log(grid[a].text);
        setWinner(grid[a].text)
        lineThrough(a,b,c)
        break;
      }
    }
    return null;
  
  }

function lineThrough(a,b,c){
  setWincombo(a,b,c)
}

function changeMode(){
  setMode(!mode)
}
  return (
    <MainLayout mode={mode}>
    {/* {menushowing? <Menu menushowing={menushowing} setMenushowing={setMenushowing}/> :  */}
    <>
      <button onClick={changeMode}>{mode? 'change to light': 'change to dark'}</button>
      <Grid grid={grid} handlePlay={handlePlay} />
    {winner? <Winner winner={winner}/> : ''} </>
{/* }  */}
    </MainLayout>
  );
}

export default App;
