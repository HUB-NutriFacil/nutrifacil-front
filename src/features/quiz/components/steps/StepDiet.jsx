import React from 'react';

const dietOptions = [
    { name: "Low Carb", img: "/imagens/Animation - 1749142869912.gif", desc: "Reduz carboidratos para acelerar a queima de gordura." },
    { name: "Cetogênica", img: "/imagens/Animation - 1749143230081.gif", desc: "Alta em gorduras e muito baixa em carboidratos." },
    { name: "Mediterrânea", img: "/imagens/Animation - 1749142051509.gif", desc: "Baseada em alimentos frescos, azeite e peixes." },
    { name: "Vegetariana", img: "/imagens/Animation - 1749132322980.gif", desc: "Exclui carnes, focando em vegetais e grãos, inclui ovos e derivados de leite." },
    { name: "Anti-Inflamatória", img: "/imagens/Fire.gif", desc: "Dieta 100% focada na desinflamação corporal." },
    { name: "Não tenho certeza", img: "/imagens/Animation - 1749141808625.gif", desc: "Ajude-me a escolher com base no meu perfil." },
    // Dietas desabilitadas podem ser filtradas ou estilizadas de forma diferente
];

function StepDiet({ handleChange, nextStep }) {
  const handleSelect = (dietName) => {
    handleChange("dieta", dietName);
    nextStep();
  };

  return (
    <div className="divquestion1">
      <div className="divlogocentral"><img className="logocentral" src="/imagens/logogrande.svg" alt="Logo" /></div>
      <div className="barrinha"><div className="b1c1"></div><div className="b2"></div><div className="b3"></div><div className="b4"></div></div>
      <div className="titulonrml">
        <h2>Qual tipo de dieta você prefere?</h2>
        <div className="dietabtns">
          {dietOptions.map(({ name, desc, img }) => (
            <button className="btndieta" key={name} onClick={() => handleSelect(name)}>
              <div className="tituloedesc">
                <img className="imagemdieta" src={img} alt={`Imagem da dieta ${name}`} />
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

export default StepDiet;