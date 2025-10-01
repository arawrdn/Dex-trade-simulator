import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");

  const handleSwap = () => {
    alert(`Simulating swap of ${amount} tokens!`);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📊 DEX Trade Simulator</h1>
      <input 
        type="number" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}

export default App;
