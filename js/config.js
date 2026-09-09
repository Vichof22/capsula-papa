// EDITA AQUÍ TODO. Este es tu panel de control.

export const CONFIG = {
  padre: {
    nombre: "Papá",
    retrato: "assets/img/foto_IA_2.jpg",
    fechaCumple: "20 de Septiembre"
  },
  hero: {
    titulo: "Para Papá,",
    subtitulo: "Una historia que no se cuenta solamente con palabras, sino con recuerdos.",
    tags: ["Admiración", "Gratitud", "Orgullo", "Humor familiar"]
  },
  carta: {
    titulo: "Lo que nunca te dije del todo",
    textoInicial: `Que no aprendí a ganar mirando el trofeo, sino mirándote a ti: aprendí que la verdadera valentía es avanzar con miedo, y que la fuerza no está en no caer, sino en la forma silenciosa en que decides levantarte cada día.

Que me enseñaste que el amor no siempre se dice con palabras; a veces se demuestra con presencia, con constancia, con esa forma de quedarte aunque el mundo se ponga pesado. Me enseñaste que la vulnerabilidad no es debilidad, sino la forma más pura de querer.

Y aunque sé que guardas mucho más de lo que muestras, quiero que sepas que yo también aprendí a leer el silencio. Entendí que hay batallas que se libran por dentro, y que los héroes de verdad no tienen capa, tienen cicatrices y un corazón enorme que protege a los suyos.

Si algo me llevo de ti, papá, es que las cosas que se construyen con amor, tiempo y presencia, jamás se olvidan.

Gracias por enseñarme a atreverme, a no rendirme y, sobre todo, a entender que elegir estar es la decisión más poderosa que existe.

Te quiero muchísimo, papá. Qué suerte tuve de encontrarte.`
  },
  timeline: [
    { title: "Cuando me enseñaste a no rendirme", story: "Ese torneo, esa copa, esa forma de sentarte con el trofeo como si no pesara. Me enseñaste que ganar no es gritar.", photo: "assets/img/b1.jpg", pos: "50% 15%", h: "420px" },
    { title: "Cuando me enseñaste que la vida también son cosas simples", story: "Ese pastel en la mesa, ese momento tranquilo en casa. Me enseñaste que los recuerdos más grandes se construyen en las cosas pequeñas, como peñizcarme la guatita antes del colegio.", photo: "assets/img/IMG_20260903_201514_942.jpg", pos: "50% 12%", h: "420px" },
    { title: "Cuando me enseñaste que la verdadera fuerza está en sentir", story: "Ese perrito dormido en tus piernas, esa mirada tranquila. Me enseñaste que aunque te pongas una coraza para sostenernos, tu corazón es el más grande que conozco. Porque no necesitas hablar para demostrar cuánto amas.", photo: "assets/img/IMG_20260903_201512_708.jpg", pos: "50% 8%", h: "420px" },
    { title: "Porque me enseñaste a atreverme", story: "Elegiste estar. Me enseñaste a enfrentar mis miedos y a entender que los héroes reales no son perfectos, son los que se cansan, sienten y siguen adelante por amor. Feliz cumpleaños, papá. Gracias por estos 14 años, por las risas, las tallas y por construir mi vida contigo. Te quiero muchísimo.", photo: "assets/img/foto_IA_2.jpg" }
  ],
  album: [
    { src: "assets/img/a1.jpg", caption: "El hombre de la vida" },
    { src: "assets/img/b1.jpg", caption: "El hombre de las victorias y las derrotas" },
    { src: "assets/img/c1.jpg", caption: "Copa en mano, orgullo tranquilo" },
    { src: "assets/img/d1.jpg", caption: "Entre flores blancas" },
    { src: "assets/img/IMG_20260903_201512_708.jpg", caption: "Una imagen de tu sonrisa" },
    { src: "assets/img/IMG_20260903_201514_942.jpg", caption: "Lo dulce de la vida" },
    { src: "assets/img/IMG_20260903_201532_857.jpg", caption: "Familia, mesa compartida" },
    { src: "assets/img/foto_IA_2.jpg", caption: "Retrato - Un hombre, una historia" }
  ],
  videos: [
    { src: "https://drive.google.com/file/d/1Sf-OymKzLJQOOXt75gQCqT7yvMXC-RuD/preview", driveId: "1Sf-OymKzLJQOOXt75gQCqT7yvMXC-RuD", title: "Para mi papá" }
  ],
  musicas: [
    { title: "Camino al Cielo", artist: "Vicente Fernández", src: "assets/music/camino-al-cielo.mp3", cover: "assets/img/b1.jpg" },
    { title: "Para Siempre", artist: "Vicente Fernández", src: "assets/music/para-siempre.mp3", cover: "assets/img/b1.jpg" },
    { title: "Volver Volver", artist: "Vicente Fernández", src: "assets/music/volver-volver.mp3", cover: "assets/img/b1.jpg" },
    { title: "Mátalas", artist: "Alejandro Fernández", src: "assets/music/matalas.mp3", cover: "assets/img/a1.jpg" },
    { title: "Como Quien Pierde Una Estrella", artist: "Alejandro Fernández", src: "assets/music/quien-pierde-estrella.mp3", cover: "assets/img/a1.jpg" },
    { title: "Como Yo Te Amo", artist: "Raphael", src: "assets/music/como-yo-te-amo.mp3", cover: "assets/img/foto_IA_2.jpg" },
    { title: "Estar Enamorado", artist: "Raphael", src: "assets/music/estar-enamorado.mp3", cover: "assets/img/foto_IA_2.jpg" },
    { title: "Que Nadie Sepa Mi Sufrir", artist: "Julio Jaramillo", src: "assets/music/que-nadie-sepa.mp3", cover: "assets/img/d1.jpg" }
    { title: "Que sabe nadie", artist: "Raphael", src: "assets/music/que-sabe-nadie.mp3", cover: "assets/img/a1.jpg" },
  ],
  palabras: [
    { key: "Admiración", prompt: "¿Qué gesto suyo te hizo admirarlo en silencio?", respuesta: "Que, aunque se cansa, se preocupa y siente, se pone una coraza y sigue adelante para sostener a quienes quiere." },
    { key: "Cariño", prompt: "Un detalle pequeño que demuestra cómo quiere.", respuesta: "Cuando me bañaba en las mañanas para ir al colegio y aprovechaba para pellizcarme la guatita." },
    { key: "Gratitud", prompt: "Algo que te dio sin pedir nada a cambio.", respuesta: "Me enseñó a atreverme. A hacer las cosas aunque tuviera miedo. Me enseñó que no todo tiene que dar miedo." },
    { key: "Nostalgia", prompt: "Un olor, un sonido, un lugar de tu infancia con él.", respuesta: "Cuando me llevaba a jugar a la pelota y me hacía correr sin importar mucho si podía o no podía." },
    { key: "Orgullo", prompt: "Un momento donde pensaste: ese es mi papá.", respuesta: "Pienso en ti como un verdadero héroe. No como los perfectos de las películas, sino como los que existen de verdad: los que también se cansan, se preocupan y sienten, pero que aun así siguen adelante." },
    { key: "Humor familiar", prompt: "Esa talla interna que solo ustedes entienden.", respuesta: "Esa complicidad que teníamos cuando era chico, esa forma de entendernos que muchas veces no necesitaba palabras." },
    { key: "Recuerdos compartidos", prompt: "Ese viaje, esa tarde, ese partido.", respuesta: "Cuando me llevabas a jugar a la pelota y me hacías correr. O cuando, siendo más chico, me bañabas en las mañanas para ir al colegio." },
    { key: "Vínculo padre-hijo", prompt: "Qué se llevan en la sangre.", respuesta: "Que existen vínculos que se construyen con amor, con tiempo y con presencia. Cuando algo está unido por amor, puede pasar el tiempo, pueden cambiar las circunstancias, pueden pasar los años... pero nunca se olvida." }
  ],
  cierre: {
    titulo: "Gracias por todo lo que no se ve.",
    texto: `Por las veces que te pusiste una coraza aunque estabas cansado.
Por los empujones silenciosos para atreverme aunque tuviera miedo.
Por las mañanas de baño, los pellizcos en la guatita y las tardes de pelota sin importar si podía o no.
Por esas enseñanzas que no llegaban con sermones, sino con tu forma de estar.
Por elegir estar.

Esta cápsula es para que sepas que lo vi, lo guardo y lo llevo conmigo.
Que tus risas, tus tallas, tu complicidad sin palabras y tu forma de querer sin decirlo
se quedaron grabadas en quien soy.`,
    firma: "Rena"
  }
}
