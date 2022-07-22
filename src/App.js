import { AppProvider } from "./contexts";
import IcoPage from "./page/ico";

console.log("feature/users")

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
