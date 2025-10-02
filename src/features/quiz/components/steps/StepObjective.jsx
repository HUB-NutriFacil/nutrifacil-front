import React from 'react';

const objectiveOptions = [
    { name: "Emagrecimento", img: "/imagens/Animation - 1749211936355.gif", desc: "Foco na redução de gordura corporal de forma saudável." },
    { name: "Hipertrofia", img: "/imagens/Animation - 1749212342747.gif", desc: "Foco no ganho de massa muscular com alimentação adequada." },
];

function StepObjective({ handleChange, nextStep }) {
  const handleSelect = (objectiveName) => {
    handleChange("objetivo", objectiveName);
    nextStep();
  };

  return (
    <div className="divquestion1">
      <div className="divlogocentral"><img className="logocentral" src="/imagens/logogrande.svg" alt="Logo" /></div>
      <div className="barrinha"><div className="b1c1"></div><div className="b2tp"></div><div className="b3tp"></div><div className="b4"></div></div>
      <div className="titulonrml">
        <h2>Qual o seu objetivo?</h2>
        <div className="dietabtns">
          {objectiveOptions.map(({ name, desc, img }) => (
            <button className="btndieta" key={name} onClick={() => handleSelect(name)}>
              <div className="tituloedesc">
                <img className="imagemdieta" src={img} alt={`Imagem do objetivo ${name}`} />
                <div className="desctitu">
                  <div className="titulo-dieta">{name}</div>
                  <div className="descricao-dieta">{desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <p className="rodape">Todos os direitos Reservados | EasyNutri™</p>
    </div>
  );
}

export default StepObjective;