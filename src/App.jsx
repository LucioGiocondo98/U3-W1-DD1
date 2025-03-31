import { useState } from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageComponent
        foto="https://media.cnn.com/api/v1/images/stellar/prod/200824175931-kobe-bryant-file.jpg?q=x_5,y_112,h_1403,w_2494,c_crop/h_833,w_1480"
        alt="Kooobe"
        className="imagee"
      ></ImageComponent>

      <ButtonComponent text="PUSH ME"></ButtonComponent>

      <ImageComponent
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2LYn-nGShxzdXqFAX9wuiG1GVunHvGJN-g&s"
        alt="Luka e LeBron"
      ></ImageComponent>

      <ButtonComponent text="CLICK ME"></ButtonComponent>
    </>
  );
};

export default App;
