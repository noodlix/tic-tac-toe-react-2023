function MainLayout(props) {

    let darkmode = "grid w-screen h-screen bg-slate-600 text-lg"
    let lightmode = "grid w-screen h-screen bg-slate-100 text-lg"
    return (
      <div className={props.mode? darkmode : lightmode}>
        {props.children}
      </div>
    );
  }
  
  export default MainLayout;
