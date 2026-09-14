export default async function handler(req, res) {
  try {
    const versionSeleccionada = req.query.version || 'RVR60';

    const textosExactos = {
      RVR60: {
        versiculo: "Y Daniel se propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.",
        referencia: `Daniel 1:8 • ${versionSeleccionada}`,
        devocional: "En medio de un mundo que presiona constantemente para ceder en nuestros valores, la determinación interna marca la diferencia. Daniel decidió desde su interior mantenerse fiel a Dios antes de enfrentar cualquier circunstancia externa. Proponerse algo en el corazón es el primer paso para proteger nuestra integridad espiritual y caminar con propósito."
      },
      NBLA: {
        versiculo: "Pero Daniel propuso en su corazón no contaminarse con los manjares del rey ni con el vino que este bebía, por lo cual pidió al jefe de los eunucos que no se le obligara a contaminarse.",
        referencia: `Daniel 1:8 • ${versionSeleccionada}`,
        devocional: "La integridad no surge por accidente, sino de decisiones firmes tomadas en lo íntimo de nuestro ser. Cuando Daniel enfrentó la abundancia y la tentación de la cultura babilónica, eligió guardar sus principios con convicción. Las pequeñas decisiones diarias de honrar a Dios construyen un carácter inquebrantable a prueba de fuego."
      },
      NTV: {
        versiculo: "Pero Daniel tomó la firme determinación de no contaminarse con la comida y el vino provistos por el rey. Entonces le pidió al jefe de los eunucos permiso para no comer esos alimentos inaceptables.",
        referencia: `Daniel 1:8 • ${versionSeleccionada}`,
        devocional: "Hay momentos en la vida donde debemos trazar una línea clara respecto a lo que permitimos en nuestra mente y nuestro corazón. Daniel no negoció sus principios a pesar de estar cautivo en tierra extraña. Su actitud nos enseña que Dios respalda a quienes deciden honrarle por encima de la comodidad temporal o la presión social."
      },
      RVC: {
        versiculo: "Pero Daniel se propuso firmemente no contaminarse con la comida ni con el vino del rey, así que le pidió al jefe de los eunucos que no lo obligara a contaminarse.",
        referencia: `Daniel 1:8 • ${versionSeleccionada}`,
        devocional: "Una resolución firme en el corazón tiene el poder de transformar nuestro entorno. Daniel demostró que la fidelidad a Dios no depende de las circunstancias favorables, sino de una convicción personal profunda. Mantenernos firmes en nuestra fe nos permite ser luz y hallar gracia aun en los lugares más difíciles."
      }
    };

    const seleccionado = textosExactos[versionSeleccionada] || textosExactos['RVR60'];

    return res.status(200).json({
      exito: true,
      fecha: new Date().toISOString().split('T')[0],
      version: versionSeleccionada,
      versiculo: seleccionado.versiculo,
      referencia: seleccionado.referencia,
      devocional: seleccionado.devocional,
      imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo procesar la solicitud" });
  }
}
