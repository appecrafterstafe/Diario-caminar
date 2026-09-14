export default async function handler(req, res) {
  try {
    const versionSeleccionada = req.query.version || 'RVR60';

    const bancoVersiculos = {
      RVR60: [
        {
          versiculo: "Y Daniel se propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "En medio de la presión imperial en Babilonia para asimilar a los jóvenes hebreos, la decisión de Daniel no fue una preferencia personal, sino una convicción firme fundamentada en la ley de Dios. Preservar la integridad espiritual exige un rechazo absoluto a las concesiones del mundo, recordando que el temor reverente al Señor prevalece por encima de cualquier circunstancia o conveniencia temporal.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
          referencia: `Salmos 119:105 • ${versionSeleccionada}`,
          devocional: "La Escritura es la regla absoluta de verdad para el creyente. En un entorno moralmente corrompido, la Palabra de Dios no ofrece simples consejos subjetivos, sino mandatos directos que iluminan el entendimiento y guían los pasos hacia la obediencia estricta y la fidelidad inquebrantable.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      NBLA: [
        {
          versiculo: "Pero Daniel propuso en su corazón no contaminarse con los manjares del rey ni con el vino que este bebía, por lo cual pidió al jefe de los eunucos que no se le obligara a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "La fidelidad a Dios se gesta en lo secreto del corazón antes de manifestarse en la conducta exterior. Daniel reconoció que ceder ante las provisiones del monarca implicaba quebrantar su pacto sagrado. El carácter genuino se demuestra cuando la lealtad al Creador se mantiene intacta a pesar de la prueba.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      NTV: [
        {
          versiculo: "Pero Daniel tomó la firme determinación de no contaminarse con la comida y el vino provistos por el rey. Entonces le pidió al jefe de los eunucos permiso para no comer esos alimentos inaceptables.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "Frente al sistema que intentaba redefinir su identidad, Daniel demostró que la santidad no negocia con el error. La resolución resuelta de obedecer a Dios por encima del favor humano evidencia el temor reverente que caracteriza la vida de fe ante un entorno adverso.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      RVC: [
        {
          versiculo: "Pero Daniel se propuso firmemente no contaminarse con la comida ni con el vino del rey, así que le pidió al jefe de los eunucos que no lo obligara a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "La pureza moral y doctrinal demanda una postura intransigente frente al pecado. Daniel no buscó la aprobación del poder secular, sino agradar a Dios mediante una separación estricta de aquello que corrompía su testimonio delante del Señor.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    };

    const lista = bancoVersiculos[versionSeleccionada] || bancoVersiculos['RVR60'];

    const ahora = new Date();
    const inicioAnio = new Date(ahora.getFullYear(), 0, 0);
    const diaDelAnio = Math.floor((ahora - inicioAnio) / (1000 * 60 * 60 * 24));
    
    const itemSeleccionado = lista[diaDelAnio % lista.length];

    return res.status(200).json({
      exito: true,
      fecha: ahora.toISOString().split('T')[0],
      version: versionSeleccionada,
      ...itemSeleccionado
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo procesar la solicitud" });
  }
}
