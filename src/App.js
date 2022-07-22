import { AppProvider } from "./contexts";
import IcoPage from "./page/ico";

console.log("users/assign-contract")

function App() {
  return (
    <div className="App">
      <AppProvider>
        <IcoPage />
      </AppProvider>
    </div>
  );
}

export default App;
