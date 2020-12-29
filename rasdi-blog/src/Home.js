const Home = () => {

    const handleClick = (e) => {
        alert("Hello, Ngoding Bareng.id",e);
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);

    }


    return (
        <div className = "home">
            <h2> This is Home</h2>
            <h2> Hello World</h2>
            <button onClick= {handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain('rasdi')
            } > Click Me Again</button>
        </div>
      );
}
 
export default Home;
