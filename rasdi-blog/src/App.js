import './App.css';

function App() {

  const title = 'This is Page';
  const likes = 50;

  return (
    <div className="App">
      <div className = "content">
        <h1>Hello , Rasdi</h1>
        <h1>{title}</h1>
        <p>My Likes {likes} Times</p>
      </div>

    </div>
  );
}


export default App;
