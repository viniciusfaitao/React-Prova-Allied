import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PlataformView } from "./Views/Plataform";
import { PlataformProvider } from "./Contexts/Plataform";
import { PlanProvider } from "./Contexts/Plan";
import { UserProvider } from "./Contexts/User";
import { Background } from "./Style";
import { HeaderComponent } from "./Components/Header/Index";
import { FooterComponent } from "./Components/Footer/Index";
import { PlanView } from "./Views/Plan";
import { UserView } from "./Views/User";
import { ConcludedView } from "./Views/Concluded";

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
