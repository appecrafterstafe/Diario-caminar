import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const promptGrafico = `Diseño gráfico institucional cristiano de alta calidad para redes sociales. Formato cuadrado. Muestra el versículo bíblico 'Daniel se propuso en su corazón no contaminarse' con tipografía moderna, elegante y limpia en el centro. Incluye una línea de acento geométrica de color violeta debajo del texto y la referencia 'Daniel 1.8' abajo. Fondo fotográfico corporativo con una mano haciendo señal de alto, iluminación profesional y estética minimalista.`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: promptGrafico,
      n: 1,
      size: "1024x1024",
      quality: "hd"
    });

    return res.status(200).json({
      exito: true,
      fecha: new Date().toISOString().split('T')[0],
      imagenPlacaUrl: response.data[0].url,
      referencia: "Daniel 1:8",
      devocional: "La determinación de guardar nuestros principios marca la diferencia en un entorno que constantemente presiona para ceder."
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "No se pudo generar la placa del día" });
  }
}
