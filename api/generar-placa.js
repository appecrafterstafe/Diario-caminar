export default async function handler(req, res) {
  try {
    // Lista de versículos y fondos que rotan automáticamente
    const versiculosDelMes = [
      {
        versiculo: "Daniel se propuso en su corazón no contaminarse.",
        referencia: "Daniel 1:8",
        devocional: "La determinación de guardar nuestros principios marca la diferencia en un entorno que presiona para ceder.",
        imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
      },
      {
        versiculo: "Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.",
        referencia: "Juan 11:25",
        devocional: "Jesús ofrece una esperanza eterna que trasciende cualquier circunstancia y supera la muerte física.",
        imagenFondoUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80"
      },
      {
        versiculo: "Yo anuncio el futuro desde mucho antes... Yo haré todo lo que me propongo.",
        referencia: "Isaías 46:10",
        devocional: "Dios tiene el control absoluto del mañana; descansar en su soberanía nos trae paz en el presente.",
        imagenFondoUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80"
      }
    ];

    // Selecciona un versículo diferente cada día basándose en la fecha actual
    const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const itemSeleccionado = versiculosDelMes[diaDelAnio % versiculosDelMes.length];

    return res.status(200).json({
      exito: true,
      fecha: new Date().toISOString().split('T')[0],
      ...itemSeleccionado
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo procesar la solicitud" });
  }
}
