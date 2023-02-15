import CreateForm from "../CreateForm/CreateForm";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Header />
      <main>
        <CreateForm />
      </main>
    </AppStyled>
  );
};

export default App;
