export default async function handler(req, res) {
  try {
    const versionSeleccionada = req.query.version || 'RVR60';

    // Textos oficiales y exactos del versículo del día para cada versión
    const textosExactos = {
      RVR60: {
        versiculo: "Y Daniel se propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.",
        referencia: "Daniel 1:8 (RVR60)"
      },
      NBLA: {
        versiculo: "Pero Daniel propuso en su corazón no contaminarse con los manjares del rey ni con el vino que este bebía, por lo cual pidió al jefe de los eunucos que no se le obligara a contaminarse.",
        referencia: "Daniel 1:8 (NBLA)"
      },
      NTV: {
        versiculo: "Pero Daniel tomó la firme determinación de no contaminarse con la comida y el vino provistos por el rey. Entonces le pidió al jefe de los eunucos permiso para no comer esos alimentos inaceptables.",
        referencia: "Daniel 1:8 (NTV)"
      },
      RVC: {
        versiculo: "Pero Daniel se propuso firmemente no contaminarse con la comida ni con el vino del rey, así que le pidió al jefe de los eunucos que no lo obligara a contaminarse.",
        referencia: "Daniel 1:8 (RVC)"
      }
    };

    const seleccionado = textosExactos[versionSeleccionada] || textosExactos['RVR60'];

    return res.status(200).json({
      exito: true,
      fecha: new Date().toISOString().split('T')[0],
      version: versionSeleccionada,
      versiculo: seleccionado.versiculo,
      referencia: seleccionado.referencia,
      devocional: "La determinación de guardar nuestros principios marca la diferencia en un entorno que presiona para ceder.",
      imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo procesar la solicitud" });
  }
}
