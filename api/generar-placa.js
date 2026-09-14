export default async function handler(req, res) {
  try {
    const versionSeleccionada = req.query.version || 'RVR60';

    // Banco de versículos rotativos para cada versión con sus respectivas imágenes inspiradoras
    const bancoVersiculos = {
      RVR60: [
        {
          versiculo: "Y Daniel se propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "En medio de un mundo que presiona constantemente para ceder en nuestros valores, la determinación interna marca la diferencia. Daniel decidió desde su interior mantenerse fiel a Dios antes de enfrentar cualquier circunstancia externa.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
          referencia: `Salmos 119:105 • ${versionSeleccionada}`,
          devocional: "La guía de Dios no siempre nos muestra todo el horizonte de golpe, pero sí nos da la claridad exacta para dar el siguiente paso con seguridad y fe en medio de la oscuridad.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.",
          referencia: `Filipenses 4:6 • ${versionSeleccionada}`,
          devocional: "La ansiedad intenta robar nuestra paz interior, pero la oración sincera actúa como un puente directo que transfiere nuestras cargas a las manos del Padre.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      NBLA: [
        {
          versiculo: "Pero Daniel propuso en su corazón no contaminarse con los manjares del rey ni con el vino que este bebía, por lo cual pidió al jefe de los eunucos que no se le obligara a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "La integridad no surge por accidente, sino de decisiones firmes tomadas en lo íntimo de nuestro ser. Las pequeñas elecciones diarias de honrar a Dios construyen un carácter inquebrantable.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Lámpara es a mis palabra tu palabra, y luz para mi camino.",
          referencia: `Salmos 119:105 • ${versionSeleccionada}`,
          devocional: "Depender de la palabra diaria ilumina nuestra perspectiva y nos aparta de tropiezos innecesarios en el sendero de la vida.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Por nada estén afanosos; antes bien, en todo, mediante oración y súplica con acción de gracias, sean dadas a conocer sus peticiones delante de Dios.",
          referencia: `Filipenses 4:6 • ${versionSeleccionada}`,
          devocional: "Cambiar la preocupación por la gratitud en la oración transforma radicalmente nuestra actitud frente a los retos cotidianos.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      NTV: [
        {
          versiculo: "Pero Daniel tomó la firme determinación de no contaminarse con la comida y el vino provistos por el rey. Entonces le pidió al jefe de los eunucos permiso para no comer esos alimentos inaceptables.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "Hay momentos en la vida donde debemos trazar una línea clara respecto a lo que permitimos en nuestra mente y nuestro corazón, confiando en el respaldo divino.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Tu palabra es una lámpara que guía los pies y una luz en mi camino.",
          referencia: `Salmos 119:105 • ${versionSeleccionada}`,
          devocional: "Caminar guiados por la verdad de Dios nos da la certeza de que nunca transitamos solos ningún trecho de nuestra existencia.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "No se preocupen por nada; más bien, oren por todo. Díganle a Dios lo que necesitan y denle gracias por todo lo que él ha hecho.",
          referencia: `Filipenses 4:6 • ${versionSeleccionada}`,
          devocional: "La paz de Dios se activa cuando reemplazamos la angustia por una conversación honesta y agradecida con nuestro Creador.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80"
        }
      ],
      RVC: [
        {
          versiculo: "Pero Daniel se propuso firmemente no contaminarse con la comida ni con el vino del rey, así que le pidió al jefe de los eunucos que no lo obligara a contaminarse.",
          referencia: `Daniel 1:8 • ${versionSeleccionada}`,
          devocional: "Una resolución firme en el corazón transforma nuestro entorno. Mantenernos firmes en nuestra fe nos permite hallar gracia y ser luz en todo lugar.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "Tu palabra es una lámpara a mis pies; ¡es la luz que alumbra mi camino!",
          referencia: `Salmos 119:105 • ${versionSeleccionada}`,
          devocional: "Cada porción de la Escritura funciona como un destello de luz que disipa las dudas y orienta nuestras decisiones diarias.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
        },
        {
          versiculo: "No se inquieten por nada; más bien, preséntenlo todo delante de Dios en oración y ruego, con acción de gracias.",
          referencia: `Filipenses 4:6 • ${versionSeleccionada}`,
          devocional: "Depositar nuestras cargas mediante la oración cotidiana nos libera del peso de querer resolver todo con nuestras propias fuerzas.",
          imagenFondoUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    };

    // Obtener la lista correspondiente a la versión (o RVR60 por defecto)
    const lista = bancoVersiculos[versionSeleccionada] || bancoVersiculos['RVR60'];

    // Calcular el índice basado en el día actual del año para que rote automáticamente cada 24 horas
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
