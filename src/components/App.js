
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data , setData] = useState([]);
  const [store,setStore] = useState([]);
 const  fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const hadelChange = (e)=>{
             setData(e.target.value);
             console.log(data);

}
const filteredfruits= fruits.filter((item)=>(
     item.includes(data)
));

  return (
    <div>
      <h1>Search items</h1>
<input type="text" onChange={hadelChange}  />
   <div>
     <ul>
             {filteredfruits.map((item)=>(
                   <li key={item}>{item}</li>
             ))}
             
                     
            
        
     </ul>
   </div>
    </div>
  )
}

export default App; 
