import { AppProvider } from "./contexts";
import IcoPage from "./page/ico";

console.log("sub -branch 2 of branch 1")
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
