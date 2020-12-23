import './App.css';

function App() {

  const title = 'This is Page';
  const likes = 50;
  const person = {
    name :'rasdi',
    age : 25

  };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className = "content">
        <h1>Hello , Rasdi</h1>
        <h1>{title}</h1>
        <p>My Likes {likes} Times</p>
        {/* <p> { person }</p> */}
        <p> { 10 }</p>
        <p> {"Hello Rasdi"}</p>
        <p> {[1,2,3,4,5]}</p>
        <p> { Math.random()* 10}</p>
        <a href ={link} >Google Site</a>
      </div>

    </div>
  );
}


export default App;
