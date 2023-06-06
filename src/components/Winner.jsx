function Winner(props) {  
    return (
        <div className="flex flex-row justify-center">
      <div className="border border-green-300 w-52 h-20 rounded-2xl text-green-600 bg-green-100 text-center flex flex-col justify-center font-bold"
        // onClick={props.handleChangeUser}
      >
        winner is {props.winner}
      </div>
      </div>
    );
  }
  
  export default Winner;
