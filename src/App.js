import './App.css';
import Card from './assets/herocard';
import data from './superheroes.json';



let heroesArr = data.superheroes;
console.log(heroesArr);
console.log(typeof(heroesArr));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main_header">Superheroes gallery</h1>
        <Card heroes={heroesArr}></Card>
      </header>

    </div>
  );
}

function putIntoLocalStorage(){
  localStorage.setItem(document.querySelector('.information_header').textContent, document.querySelector('input[name=information_score]:checked').value);
}

export default App;
