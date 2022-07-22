import { AppProvider } from "./contexts";
import IcoPage from "./page/ico";

console.log("feature1/subfeature1");
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
