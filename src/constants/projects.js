import ceipOutesImg from '../assets/projects/ceipoutes.webp'
import clockYouImg from '../assets/projects/clockyou.webp'
import ticTacToeImg from '../assets/projects/tictactoe.webp'
import timelineImg from '../assets/projects/timeline.webp'

import CSSIcon from '../icons/CSS.astro'
import HTMLIcon from '../icons/HTML.astro'
import JSIcon from '../icons/JS.astro'
import MySQLIcon from '../icons/MySQL.astro'
import NodeJSIcon from '../icons/NodeJS.astro'
import ReactIcon from '../icons/React.astro'
import TailwindIcon from '../icons/Tailwind.astro'

const SITES_URLS = {
  ceipOutes: 'https://comedor.ceipoutes.org',
  clockYou: 'https://clockyou.damb.dev',
  ticTacToe: 'https://tictactoe.damb.dev',
  timeline: 'https://linea-temporal.netlify.app'
}

const GITHUB_URLS = {
  clockYou: 'https://github.com/dambdev/clock-you',
  timeline: 'https://github.com/dambdev/timeline'
}

export const PROJECTS = [
  {
    title: 'CEIP de Outes',
    description:
      'Un proyecto diseñado para que las familias puedan registrar la asistencia de sus hijos al comedor y a las actividades extraescolares, mientras el colegio gestiona y hace seguimiento de todo de forma digital y eficiente.',
    link: SITES_URLS.ceipOutes,
    image: ceipOutesImg,
    tags: [
      { icon: NodeJSIcon },
      { icon: MySQLIcon },
      { icon: JSIcon },
      { icon: ReactIcon },
      { icon: TailwindIcon }
    ]
  },
  {
    title: 'ClockYou',
    description:
      'Aplicación para búsqueda y contratación de servicios personalizados. Permite a las empresas gestionar su personal de manera centralizada y ofrece una solución digital de recursos humanos.',
    link: SITES_URLS.clockYou,
    github: GITHUB_URLS.clockYou,
    image: clockYouImg,
    tags: [
      { icon: NodeJSIcon },
      { icon: MySQLIcon },
      { icon: JSIcon },
      { icon: ReactIcon },
      { icon: TailwindIcon }
    ]
  },
  {
    title: 'Tic Tac Toe',
    description:
      'Versión moderna del clásico juego tres en raya donde podrás enfrentarte a una IA que responde a tus movimientos. Incluye interfaz minimalista y animaciones fluidas para una experiencia de juego agradable.',
    link: SITES_URLS.ticTacToe,
    image: ticTacToeImg,
    tags: [{ icon: ReactIcon }, { icon: JSIcon }, { icon: TailwindIcon }]
  },
  {
    title: 'Timeline',
    description:
      'Herramienta interactiva que convierte datos estructurados en formato JSON sobre el juego Zelda en una elegante línea temporal visual con la opción de añadir nuevos eventos.',
    link: SITES_URLS.timeline,
    github: GITHUB_URLS.timeline,
    image: timelineImg,
    tags: [{ icon: HTMLIcon }, { icon: CSSIcon }, { icon: JSIcon }]
  }
]
