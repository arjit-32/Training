import { useState } from "react";

const Assignment1 = () => {
    const colors = ["#b91c1c","#65a30d","#155e75"];
    const [bgColor,setBgColor] = useState("#ffffff");

    const changeBackground = (color) => {
      setBgColor(color);
    }

    return (
      <div style={{backgroundColor: bgColor}} className="min-h-screen"> 
      {
        colors.map((color, index) => (
          <Button key={index} backgroundColor={color} clickHandler={()=> changeBackground(color)} />
        )) 
      }    
     </div>
    )
}


const Button = ({backgroundColor, clickHandler}) => {

    return (
      <button
        onClick={clickHandler}
        className="text-white p-2 rounded m-2" 
        style={{backgroundColor: backgroundColor}}>
        Click Me
      </button>
    )
}

export default Assignment1