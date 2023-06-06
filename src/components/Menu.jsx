function Menu(props) {
    console.log("user: ", props);
  

    function startGame(){
        setMenushowing(false)
    }
    return (
      <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <h1>menu</h1>
      <div>
        x wins:
        </div> 
       <div>o wins:
        </div>
       <div onClick={startGame}>start game</div> 
      </div>
      </div>
    );
  }
  
  export default Menu;
