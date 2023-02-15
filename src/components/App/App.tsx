import CreateForm from "../CreateForm/CreateForm";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <CreateForm />
      </main>
    </>
  );
};

export default App;
