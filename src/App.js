import { AppProvider } from "./contexts";
import IcoPage from "./page/ico";

console.log("feature/feature1");
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
