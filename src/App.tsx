import "./App.css";

import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import ReviewForm from "./components/ReviewForm";
import Steps from "./components/Steps";
import Thanks from "./components/Thanks";
import UserForm from "./components/UserForm";
import { useForm } from "./hooks/useForm";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formtemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formtemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm />,
    <Thanks />,
  ];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
