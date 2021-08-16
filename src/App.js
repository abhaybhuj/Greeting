import React from "react";
function App() {
  let curdate= new Date(2020,1,1,13);
curdate= curdate.getHours();
let greet="";
const cstyle={};

if(curdate>=1 && curdate<=12){
  greet="Good Morning!!";
  cstyle.color="green";
}
else if( curdate>=12 && curdate<19){
  greet="GoodAfternoon!!";
  cstyle.color="yellow";
}
else{
  greet="GoodNight!!";
  cstyle.color="darkblue";
}

  return (
    <>
  <div>
  <h1> Hello,<span style={cstyle}>{greet}</span></h1>
  </div>
  </>
    
  );
}

export default App;

