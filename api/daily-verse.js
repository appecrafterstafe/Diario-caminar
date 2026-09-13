export default async function handler(req, res) {
  // Lista de pasajes bíblicos programados con sus traducciones
  const pasajes = [
    {
      referencia: "Juan 17:17",
      traducciones: {
        RVR1960: '"Santifícalos en tu verdad; tu palabra es verdad."',
        NBLA: '"Santifícalos en la verdad; Tu palabra es verdad."',
        NTV: '"Hazlos santos con tu verdad; enséñales tu palabra, la cual es verdad."',
        RVC: '"Santifícalos en tu verdad; tu palabra es verdad."'
      },
      devocional: "Antes de ir a la cruz, Jesús oró pidiéndole al Padre que guarde y aparte a sus seguidores del mal. La verdadera transformación de nuestra vida no depende de nuestras propias fuerzas o de ideas humanas, sino de conocer y obedecer lo que Dios ha dicho en su Palabra. Cuando leemos la Biblia con respeto y le permitimos guiar nuestras decisiones diarias, Dios nos moldea para vivir de una manera que le agrada."
    },
    {
      referencia: "Salmos 119:105",
      traducciones: {
        RVR1960: '"Lámpara es a mis pies tu palabra, y lumbrera a mi camino."',
        NBLA: '"Lámpara es a mis pies Tu palabra, y luz para mi camino."',
        NTV: '"Tu palabra es una lámpara que guía mis pies y una luz para mi camino."',
        RVC: '"Tu palabra es una lámpara a mis pies; ¡es la luz que ilumina mi camino!"'
      },
      devocional: "En la antigüedad, las lámparas de aceite iluminaban únicamente el paso inmediato del caminante en la oscuridad. La Palabra de Dios no siempre nos revela todo el futuro de un solo vistazo, sino que provee la verdad suficiente y fiel para dar con obediencia y prudencia el siguiente paso diario bajo el temor al Señor."
    }
  ];

  // Selección automática según el día del año
  const diaDelAno = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const seleccion = pasajes[diaDelAno % pasajes.length];

  return res.status(200).json({
    status: "success",
    fecha: new Date().toISOString(),
    contenido: seleccion
  });
}
