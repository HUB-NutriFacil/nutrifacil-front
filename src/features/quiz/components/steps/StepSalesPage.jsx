import React from 'react';
// Ajuste o caminho para onde seu componente original está
import PaginaDeVendas from '../../../../PaginaDeVendas'; 

function StepSalesPage({ prevStep, nextStep }) {
  // Passamos as props necessárias para o seu componente original
  return <PaginaDeVendas prevStep={prevStep} nextStep={nextStep} />;
}

export default StepSalesPage;