export default function Grid(props) {
    let squareclass =  "relative w-24 h-24 transition duration-100 bg-slate-500 hover:bg-slate-800 text-white " 
    let wincomboclass =  "relative w-24 h-24 transition duration-100 bg-green-300 hover:bg-green-600 text-white " 



    return (
      <div className="grid grid-cols-3 m-auto w-fit">
        {props.grid.map((element) => (
          <div key={element.id} className="relative group">
            <div className="absolute transition duration-500 opacity-75 -inset-1 group-hover:opacity-100"></div>


            <button
              onClick={() => props.handlePlay(element.id)}
              className={(element.id == props.wincombo)? wincomboclass : squareclass}
            >
              {element.text}
            </button>
          </div>
        ))}
      </div>
    );
  }
