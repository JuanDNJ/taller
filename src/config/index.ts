import LegacySvg from "@/assets/images/svg/legacy.svg"
import PrecisionSvg from "@/assets/images/svg/precision.svg"
import ShieldSvg from "@/assets/images/svg/ok.svg"

const TITLE_APP = 'Taller Cloe'
const SUBTITLE_APP = 'Cuidado experto para tu vehículo'
const NAME_APP = 'Cloe'

const ROOT_LAYOUT = '#root'

const TAGS_SIZE = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  h6: 'text-sm'
}

const TITLE_SIZE = {
  xl: 'text-5xl',
  lg: 'text-4xl',
  md: 'text-2xl',
  sm: 'text-xl',
  xs: 'text-lg'

}

const MENU_LINKS = [
  {
    path: '/',
    label: 'Taller',
    title: 'Inicio',
    description: 'Bienvenido a nuestro sitio web'
  },
  {
    path: '/about',
    label: 'Quienes Somos?',
    title: 'Sobre Nosotros',
    description: 'Aprende más sobre nuestra empresa'
  },
  {
    path: '/services',
    label: 'Servicios',
    title: 'Nuestros Servicios',
    description: 'Descubre los servicios que ofrecemos'
  },
  {
    path: '/contact',
    label: 'Contacto',
    title: 'Contáctanos',
    description: 'Ponte en contacto con nosotros'
  }
]

const USEFUL_LINKS = [
  {
    path: '/terms',
    label: 'Terminos del servicio',
    title: 'Terminos del servicio',
    description: 'Lee nuestros terminos del servicio'
  },
  {
    path: '/privacy',
    label: 'Politica de privacidad',
    title: 'Politica de privacidad',
    description: 'Lee nuestra politica de privacidad'
  },
  {
    path: '/faq',
    label: 'FAQ',
    title: 'Preguntas Frecuentes',
    description: 'Resuelve tus dudas con nuestras preguntas frecuentes'
  }
]

const OURS_SERVICES_LINKS = [
  {
    path: '/plans',
    label: 'Explorar los planes de mantenimiento',
    title: 'Planes de mantenimiento',
    description: 'Descubre nuestros planes de mantenimiento'
  },
  {
    path: '/services',
    label: 'Conoce nuestros servicios',
    title: 'Nuestros servicios',
    description: 'Descubre nuestros servicios'
  },
  {
    path: '/contact',
    label: 'Contáctanos',
    title: 'Contáctanos',
    description: 'Ponte en contacto con nosotros'
  }
]

const CONTACT = {
  label: 'Donde estamos?',
  google_maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.9473595155355!2d2.039640220360484!3d41.34834331717986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49b8b8cd98a33%3A0x50075b189548e24f!2sAyuntamiento%20de%20Sant%20Boi%20de%20Llobregat!5e0!3m2!1ses!2ses!4v1774173660556!5m2!1ses!2ses',
  email: 'cloee@gmail.com',
  phone: '+34 123 456 789',
  social_networks: {
    facebook: 'https://www.facebook.com/tallercloe',
    twitter: 'https://www.twitter.com/tallercloe',
    instagram: 'https://www.instagram.com/tallercloe'
  }
}

const ABOUT = {
  hero: {
    label: 'La Precisión es nuestro ÚNICO ESTÁNDAR',
    description: 'En Taller CLOE, no solo reparamos vehículos; diseñamos soluciones. Con más de tres décadas de maestría en cuidado automotriz de alta gama, fusionamos la precisión quirúrgica con el poder industrial.',
  },
  workshop_specifications: {
    label: 'Especificaciones del Taller',
    description: 'Entornos de flujo de trabajo optimizados para una ejecución mecánica de grado quirúrgico.'
  },
  history: {
    label: 'Nuestra Historia',
    description: 'Fundado en el corazón de la excelencia industrial, Taller CLOE comenzó con un solo elevador y la visión de redefinir el mantenimiento automotriz para vehículos de lujo y alto rendimiento. Hoy, somos el referente de autoridad técnica.',
    story_elements: [
      {
      label: 'Taller de Precisión',
      description: 'Donde la excelencia automotriz se encuentra con la precisión quirúrgica.',
      icon: LegacySvg
    },
    {
      label: 'Cuidado Experto',
      description: 'Mecánica de grado quirúrgico para vehículos de lujo y alto rendimiento.',
      icon: PrecisionSvg
    },
    {
      label: 'Soluciones Personalizadas',
      description: 'Diseñamos soluciones a medida para cada vehículo, fusionando arte y ciencia automotriz.',
      icon: ShieldSvg
    }
    ] as { label: string, description: string, icon: string }[]
  }
}


const HERO_MOOK = {
  label: 'Taller Cloe cuidado experto para tu vehículo',
  description: 'Donde la fuerza industrial se une a la precisión de la ingeniería. Tratamos cada vehículo como una obra maestra de la mecánica y brindamos atención especializada que supera los estándares de fábrica.'
}

const SERVICE_MOOK = {
  title: 'Nuestros Servicios',
  maintenance: {
    label: 'Mantenimiento general',
    description: 'Cuidado preventivo diseñado para mantener su máquina funcionando al máximo rendimiento mediante rigurosas inspecciones multipunto.'
  },
  brakes: {
    label: 'Sistemas de frenos',
    description: 'Soluciones de potencia de frenado de alto rendimiento y calibración de seguridad.'
  },
  diagnostics: {
    label: 'Diagnóstico avanzado',
    description: 'Identificación precisa de problemas con tecnología de escaneo de última generación.'
  },
  engine_repair: {
    label: 'Reparación de motores',
    description: 'Reparación experta de motores con piezas de calidad y mano de obra especializada.'
  }
}

const ITV_MOOK = {
  label: 'Preparación para la ITV',
  description: 'En el taller CLOE, nos especializamos en preparar tu vehículo para la Inspección Técnica de Vehículos (ITV). Nuestro equipo de expertos realizará una revisión exhaustiva de tu automóvil, asegurándose de que cumpla con todos los requisitos necesarios para pasar la ITV sin problemas. Desde la revisión de frenos y luces hasta la verificación de emisiones, nos encargamos de cada detalle para que puedas conducir con confianza y seguridad.',
  book_an_appointment: {
    label: 'Reserva una cita',
    description: 'Rellena el formulario y nos pondremos en contacto contigo para agendar tu cita.',
    data: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      message: 'Mensaje'
    }
  }

}

export const CONFIG = {
  TITLE_APP, SUBTITLE_APP, NAME_APP, ROOT_LAYOUT, TAGS_SIZE, TITLE_SIZE, MENU_LINKS, USEFUL_LINKS, HERO_MOOK, OURS_SERVICES_LINKS, SERVICE_MOOK, ITV_MOOK, CONTACT, ABOUT
}

export { TITLE_APP, SUBTITLE_APP, NAME_APP, ROOT_LAYOUT, TAGS_SIZE, TITLE_SIZE, MENU_LINKS, USEFUL_LINKS, OURS_SERVICES_LINKS, HERO_MOOK, SERVICE_MOOK, ITV_MOOK, CONTACT, ABOUT }
