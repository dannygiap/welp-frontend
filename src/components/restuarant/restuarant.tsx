import { Input } from 'semantic-ui-react'
import {useState} from 'react'
import './restuarant.css'
//import Timer from '../timer/timer';
const Restuarant: React.FC = () => {
    const[restuarant,setRestuarant] = useState('');
    const[restuarants,setRestuarants] = useState< string[]>([]);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setRestuarant(e.currentTarget.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      const newRestuarants = [...restuarants, restuarant];
      setRestuarants(newRestuarants);
      setRestuarant('');
      e.preventDefault();
    }
    
    return (
  
    
        <div className = "flex1">
          <div className = "item1">
            <h1>Restuarants</h1>
            <div className = "restuarant-choices">
            {restuarants.map(item => 
              <p>{item} </p>
            )}
            </div>
          </div>
        
          <div className = "item2">
            <form onSubmit={handleSubmit}>
              <Input id ="restuarant-input" type ="text" value={restuarant} onChange={handleChange} size ='small' focus placeholder='Enter a restuarant name'/>
            </form>
            <p>:29</p>
          </div>
      
      </div>
      
    
   
    );
  };

export default Restuarant;
  