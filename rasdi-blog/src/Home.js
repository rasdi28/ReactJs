import { useState } from 'react';

const Home = () => {
    const [name,SetName] = useState('rasdi');
    const [age, setAge] = useState (20);

    const handleClick = (e) => {
        alert("Hello, Ngoding Bareng.id",e);
    }

    const handleClickAgain = () => {
       SetName ('rohman');
       setAge (25);

    }



    return (
        <div className = "home">
            <h2> This is Home</h2>
            <h2> Hello World</h2>
            <p>{ name } {age} Years</p>
            <button onClick= {handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain('rasdi')
            } > Click Me Again</button>
        </div>
        
      );
}
 
export default Home;
