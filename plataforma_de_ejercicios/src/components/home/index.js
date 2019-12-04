import React, { useState } from "react";
import {
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  HomeInput,
  HomeButton
} from "./homeStyles";

const Home = () => {
  const [inputs, setInputs] = useState({ email: "", name: "", phone: "" });

  const handleChange = e => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <HomeContainer>
      <HomeTitle>Mesa de estudio</HomeTitle>
      <HomeSubtitle>
        Completá los siguientes datos para medir tus habilidades de JavaScript
      </HomeSubtitle>
      <HomeInput
        type="name"
        placeholder="Nombre"
        name="name"
        onChange={handleChange}
      />
      <HomeInput
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <HomeInput
        type="tel"
        placeholder="Telefono"
        name="phone"
        onChange={handleChange}
      />
      <HomeButton onClick={handleSubmit}>Continuar</HomeButton>
    </HomeContainer>
  );
};

export default Home;
