import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="text-gray-700">
      <Container>
        <Container.Toolbar />
        <Container.Content />
      </Container>
    </div>
  );
}

export default App;
