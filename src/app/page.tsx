import NewsList from './components/NewsList';

export const revalidate = 60

export default  function HomePage() {
  const news = [
    { id: 1, title: 'Elecciones Generales 2024: Nuevos Candidatos Anuncian Sus Campañas', image: 'https://picsum.photos/seed/1/200/300', content: 'En el marco de las elecciones generales de 2024, varios candidatos han lanzado oficialmente sus campañas en diversas regiones del país.' },
    { id: 2, title: 'Bolivia Gana Medalla de Oro en los Juegos Panamericanos', image: 'https://picsum.photos/seed/2/200/300', content: 'El equipo boliviano ha logrado una histórica medalla de oro en los recientes Juegos Panamericanos celebrados en Santiago.' },
    { id: 3, title: 'Incremento del Turismo en el Salar de Uyuni', image: 'https://picsum.photos/seed/3/200/300', content: 'El Salar de Uyuni ha experimentado un aumento significativo en el número de turistas, impulsando la economía local.' },
    { id: 4, title: 'Avances en la Construcción del Tren Bioceánico', image: 'https://picsum.photos/seed/4/200/300', content: 'El proyecto del Tren Bioceánico avanza con nuevas inversiones y acuerdos entre los países involucrados.' },
    { id: 5, title: 'Santa Cruz Celebra su Aniversario con Gran Desfile', image: 'https://picsum.photos/seed/5/200/300', content: 'La ciudad de Santa Cruz celebra su aniversario con un desfile que reúne a miles de ciudadanos y turistas.' },
    { id: 6, title: 'Descubrimiento de Nuevas Ruinas Precolombinas en Tiwanaku', image: 'https://picsum.photos/seed/6/200/300', content: 'Arqueólogos han descubierto nuevas ruinas precolombinas en el sitio arqueológico de Tiwanaku, revelando más sobre la cultura antigua.' },
    { id: 7, title: 'Bolivia Anuncia Iniciativas para la Conservación del Amazonas', image: 'https://picsum.photos/seed/7/200/300', content: 'El gobierno boliviano ha anunciado nuevas iniciativas para la conservación y protección de la región amazónica.' },
    { id: 8, title: 'Innovación en Energías Renovables: Bolivia y la Energía Solar', image: 'https://picsum.photos/seed/8/200/300', content: 'Bolivia continúa avanzando en proyectos de energía solar, destacando como líder en energías renovables en la región.' },
    { id: 9, title: 'El Festival de la Alasita 2024 Atrae a Miles de Visitantes', image: 'https://picsum.photos/seed/9/200/300', content: 'El tradicional Festival de la Alasita ha comenzado en La Paz, atrayendo a miles de visitantes con sus coloridos mercados y tradiciones.' },
    { id: 10, title: 'Nuevas Políticas de Salud Pública en Bolivia', image: 'https://picsum.photos/seed/10/200/300', content: 'El Ministerio de Salud ha implementado nuevas políticas para mejorar la atención sanitaria en todo el país.' },
  ];
  return (
      <div>

        <NewsList news={news} />
      </div>
  );
}