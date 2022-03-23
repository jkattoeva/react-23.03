import Paragraph from './components/Paragraph/Paragraph';

function App() {
  return (
    <div className="App">
      <h1>Hello wolrd</h1>

      <Paragraph size="17px" color="#000000">This is sample Paragraph</Paragraph>
      <Paragraph size="14px" color="pink">This is small paragraph</Paragraph>
      <Paragraph size=".5rem" color="blue">This is small paragraph</Paragraph>
    </div>
  );
}

export default App;
