import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PlataformView } from "./Views/PlataformView";
import { PlataformProvider } from "./Contexts/PlataformContext";
import { PlanProvider } from "./Contexts/PlanContext";
import { UserProvider } from "./Contexts/UserContext";
import { Background } from "./Style";
import { HeaderComponent } from "./Components/Header/Index";
import { FooterComponent } from "./Components/Footer/Index";
import { PlanView } from "./Views/PlanView";
import { UserView } from "./Views/UserView";
import { ConcludedView } from "./Views/ConcludedView";

function App() {
  return (
    <Router>
      <Background>
        <UserProvider>
          <PlataformProvider>
            <PlanProvider>
              <HeaderComponent />
              <Switch>
                <Route path="/plataformas" children={<PlataformView />} />
                <Route path="/planos" children={<PlanView />} />
                <Route path="/usuario" children={<UserView />} />
                <Route path="/concluido" children={<ConcludedView />} />
                <Route path="/" children={<Redirect to="/plataformas" />} />
              </Switch>
              <FooterComponent />
            </PlanProvider>
          </PlataformProvider>
        </UserProvider>
      </Background>
    </Router>
  );
}

export default App;
