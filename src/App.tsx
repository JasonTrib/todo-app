import Container from './components/Container';

function App() {
  return (
    <div className="text-gray-700 selection:bg-yellow-200 selection:bg-opacity-50">
      <Container>
        <Container.Toolbar />
        <Container.Content />
      </Container>
    </div>
  );
}

export default App;
