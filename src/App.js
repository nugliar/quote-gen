import { Quote } from './features/quote/Quote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Quote Box</title>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
      </header>
      <div className='App'>
        <Quote />
      </div>
    </div>
  );
}

export default App;
