// import { Students } from "./propComponents/Students";
// import { ChildrenComp } from "./propComponents/ChildrenComp";0
// import { ArraySample } from "./propComponents/ArraySample";
// import { OneOfSample } from "./propComponents/OneOfSample";
// import { MultiTypeComp } from "./propComponents/MultiTypeComp";
// import { FunctionSample } from "./propComponents/FunctionSample";

// They are from Another Files
import { UserCard } from "./CardComponent/UserCard";
// import {UseState} from "./ExtrasComponent/UseState";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const arr = [
  //   { id: 1, name: "item 1" },
  //   { id: 2, name: "item 2" },
  //   { id: 3, name: "item 3" },
  // ];
  // const handleClick = ()=> {
  //   alert("Button Clicked!")
  // }
  return (
    <>
      {/* <div>
        <Students name="Bharath" age={28} martialStatus={true} />
        <Students />
        <ChildrenComp>
          <p>Para 1</p>
          <p>Para 2</p>
          <p>Para 3</p>
        </ChildrenComp>
        <ArraySample items={arr} />
        <OneOfSample color="orange" />
        <MultiTypeComp value="Bharath" />
        <MultiTypeComp value={46} />
        <MultiTypeComp value={true} />
        <FunctionSample handleClick={handleClick} />
      </div> */}
      {/* <UseState /> */}
      <UserCard />
    </>
  );
}

export default App;
