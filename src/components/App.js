function App() {
  return (
    <>
      <div className="pane top-pane"></div>
      <div className="pane">
        <iframe
          title="Output"
          sandbox="allow-scripts"
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
