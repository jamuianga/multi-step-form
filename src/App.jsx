function App() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-item active">
          <div className="step-nr">1</div>
          <div>
            <div className="step">Step 1</div>
            <div className="step-title">Your info</div>
          </div>
        </div>

        <div className="sidebar-item">
          <div className="step-nr">2</div>
          <div>
            <div className="step">Step 2</div>
            <div className="step-title">Select plan</div>
          </div>
        </div>

        <div className="sidebar-item">
          <div className="step-nr">3</div>
          <div>
            <div className="step">Step 3</div>
            <div className="step-title">Add-ons</div>
          </div>
        </div>

        <div className="sidebar-item">
          <div className="step-nr">3</div>
          <div>
            <div className="step">Step 4</div>
            <div className="step-title">Summary</div>
          </div>
        </div>
      </div>
      <div>form aqui</div>
    </>
  );
}

export default App;
