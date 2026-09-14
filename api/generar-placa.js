export default async function handler(req, res) {
  try {
    const versionSeleccionada = req.query.version || 'RVR60';

    // Banco central con los versículos según cada versión y su reflexión única compartida
    const bancoDiario = [
      {
        id: 1,
        reflexion: "En medio de la presión imperial en Babilonia para asimilar a los jóvenes hebreos, la decisión de Daniel no fue una preferencia personal, sino una convicción firme fundamentada en la ley de Dios. Preservar la integridad espiritual exige un rechazo absoluto a las concesiones del mundo, recordando que el temor reverente al Señor prevalece por encima de cualquier circunstancia o conveniencia temporal.",
        imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90",
        versiculos: {
          RVR60: "Y Daniel se propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.",
          NBLA: "Pero Daniel propuso en su corazón no contaminarse con los manjares del rey ni con el vino que este bebía, por lo cual pidió al jefe de los eunucos que no se le obligara a contaminarse.",
          NTV: "Pero Daniel tomó la firme determinación de no contaminarse con la comida y el vino provistos por el rey. Entonces le pidió al jefe de los eunucos permiso para no comer esos alimentos inaceptables.",
          RVC: "Pero Daniel se propuso firmemente no contaminarse con la comida ni con el vino del rey, así que le pidió al jefe de los eunucos que no lo obligara a contaminarse."
        }
      },
      {
        id: 2,
        reflexion: "La Escritura es la regla absoluta de verdad para el creyente. En un entorno moralmente corrompido, la Palabra de Dios no ofrece simples consejos subjetivos, sino mandatos directos que iluminan el entendimiento y guían los pasos hacia la obediencia estricta y la fidelidad inquebrantable.",
        imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=90",
        versiculos: {
          RVR60: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
          NBLA: "Lámpara es a mis pies Tu palabra, y luz para mi camino.",
          NTV: "Tu palabra es una lámpara que guía mis pies y una luz para mi camino.",
          RVC: "Tu palabra es una lámpara a mis pies; ¡es la luz que alumbra mi camino!"
        }
      }
    ];

    const ahora = new Date();
    const inicioAnio = new Date(ahora.getFullYear(), 0, 0);
    const diaDelAnio = Math.floor((ahora - inicioAnio) / (1000 * 60 * 60 * 24));
    
    // Selecciona el devocional diario de forma cíclica
    const itemDelDia = bancoDiario[diaDelAnio % bancoDiario.length];

    // Extrae el texto del versículo según la versión solicitada (con fallback a RVR60 si no existe)
    const textoVersiculo = itemDelDia.versiculos[versionSeleccionada] || itemDelDia.versiculos['RVR60'];

    // Referencias correspondientes según el ID del versículo actual
    const referenciasPorId = {
      1: "Daniel 1:8",
      2: "Salmos 119:105"
    };

    const referenciaBase = referenciasPorId[itemDelDia.id] || "Palabra Diaria";

    return res.status(200).json({
      exito: true,
      fecha: ahora.toISOString().split('T')[0],
      version: versionSeleccionada,
      versiculo: textoVersiculo,
      referencia: `${referenciaBase} • ${versionSeleccionada}`,
      devocional: itemDelDia.reflexion,
      imagenFondoUrl: itemDelDia.imagenFondoUrl
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo procesar la solicitud" });
  }
}
