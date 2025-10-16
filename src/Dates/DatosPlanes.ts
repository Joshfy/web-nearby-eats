import { Plan } from "../types/Tipos";
export const PLANES_DATA: Plan[] = [
    {
        nombre: "Gratuito",
        precio: "S/ 0",
        destacado: false,
        descripcion: "Con el plan Grauito, puedes:",
        caracteristicas: [
          "Administrar 1 restaurante.",
          "Agregar hasta 10 platos.",
          "Crear 3 categorías de platos",
          "Editar, eliminar y cambiar la disponibilidad de los platos."
        ]
      },
  {
    nombre: "BÁSICO",
    precio: "S/ 30",
    destacado: true,
    descripcion: "Con el plan INICIAL, usted puede:",
    caracteristicas: [
      "Administrar 1 restaurante.",
      "Agregar hasta 35 platos.",
      "Crear 10 categorías de platos",
      "Editar, eliminar y cambiar la disponibilidad de los platos.",
      "Metricas de tus productos mas vistos en tiempo real, para que puedas tomar decisiones informadas sobre tu menú.",
      "Metricas de como tu local desempeña en la plataforma, para que puedas mejorar tu visibilidad y atraer más clientes.",
      "Manejar pedidos dentro de la plataforma, para que puedas recibir pedidos directamente desde tu perfil.",

    ]
  },
  {
    nombre: "MEDIANO",
    precio: "S/ 45",
    destacado: true,
    descripcion: "Con el plan BÁSICO, usted puede:",
    caracteristicas: [
      "Administrar 1 restaurante.",
      "Agregar hasta 60 platos.",
      "Crear 15 categorías de platos",
      "Editar, eliminar y cambiar la disponibilidad de los platos.",
      "Metricas de tus productos mas vistos en tiempo real, para que puedas tomar decisiones informadas sobre tu menú.",
      "Metricas de como tu local desempeña en la plataforma, para que puedas mejorar tu visibilidad y atraer más clientes.",
      "Manejar pedidos dentro de la plataforma, para que puedas recibir pedidos directamente desde tu perfil.",
      "Crear promociones y ofertas especiales para atraer más clientes y aumentar tus ventas dentro de tu perfil en la plataforma.",
      "Destacar platos especiales en tu perfil para atraer la atención de los clientes y aumentar tus ventas.",
      "Crear un perfil de restaurante personalizado con fotos, descripciones y horarios de atención para atraer más clientes.",
      "Destacar y promocionar tus platos mas populares en toda la plataforma para que todos los usuarios puedan verlos (2 veces por semana de manera gratuita).",
    ]
  },
  {
    nombre: "PREMIUM",
    precio: "S/ 60",
    destacado: true,
    descripcion: "Con el plan PREMIUM, usted puede:",
    caracteristicas: [
      "Administrar 1 restaurante.",
      "Agregar más de 100 platos.",
      "Sin límite de categorías",
      "Editar, eliminar y cambiar la disponibilidad de los platos.",
       "Metricas de tus productos mas vistos en tiempo real, para que puedas tomar decisiones informadas sobre tu menú.",
      "Metricas de como tu local desempeña en la plataforma, para que puedas mejorar tu visibilidad y atraer más clientes.",
      "Crear promociones y ofertas especiales para atraer más clientes y aumentar tus ventas dentro de tu perfil en la plataforma.",
      "Destacar platos especiales en tu perfil para atraer la atención de los clientes y aumentar tus ventas.",
      "Crear un perfil de restaurante personalizado con fotos, descripciones y horarios de atención para atraer más clientes.",
      "Destacar y promocionar tus platos mas populares en toda la  plataforma para que todos los usuarios puedan verlos (3 veces por semana gratuitas).",
      "Entre mas interactues con la plataforma, tendras beneficios exclusivos como incentivos a locales mas activo en la plataforma, con premios de entre s/200 a s/300 ",
      "Pagaremos una cena para 2 personas en tu restaurante, si eres uno de los 3 locales mas activos de la semana.",
    ]
  }
];