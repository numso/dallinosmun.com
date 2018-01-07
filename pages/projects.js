import App from '../components/app'

export default function Projects () {
  const projects = [
    {
      name: 'Osmun Family Site',
      url: 'http://www.osmun.net',
      img: 'img/osmun-thumb.jpg'
    },
    {
      name: 'Dynamic Visualizations',
      url: 'http://pictures.dallinosmun.com',
      img: 'img/pictures-thumb.png'
    },
    {
      name: 'Antherion Games',
      url: 'http://www.antherion.com',
      img: 'img/antherion-thumb.png'
    },
    { name: 'www.lds.org' },
    { name: 'jerrica.osmun.net' },
    { name: 'Speedy Shop School Project' },
    { name: 'www.kuali.co' }
  ]
  return (
    <App subtitle='Projects'>
      <h1>Projects</h1>
      <p>TODO:: Find fancy way to layout and explain these projects</p>
      <ul>{projects.map(p => <li>{p.name}</li>)}</ul>
    </App>
  )
}
