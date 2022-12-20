import './App.css';
import Calculator from "./pages/calculator/Calculator";
import CalculatorSecond from "./pages/calculatorSecond/CalculatorSecond";

function App() {
    return (
        <div className="App">
            <h1>First Calculator</h1>
            <Calculator/>
            <h1>-----------------------------------</h1>
            <h1>Second Calculator</h1>
            <CalculatorSecond/>
        </div>
    );
}

export default App;
