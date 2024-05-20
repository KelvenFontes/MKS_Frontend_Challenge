const formatarValor = (valor: string) => {

  if (typeof valor !== 'string') {
    return 'Valor inválido';
  }

  const valorNumerico = parseFloat(valor);

  const valorFormatado = valorNumerico.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const valorSemCentavos = valorFormatado.replace(',00', '').replace(' ', '');

  return valorSemCentavos;
}

export default formatarValor;
