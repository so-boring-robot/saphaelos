import moi from '../assets/me.png'
import { useState } from 'react'

function Profil() {
  const [activeCell, setActiveCell] = useState(0)
  const menuItems = [
    'Mes informations',
    'Mes compétences',
    'Mes qualifications',
    'Mes projets'
  ]
  const [selectedProject, setSelectedProject] = useState(null)

  const content = () => {
    switch (activeCell){
      case 0:
        return <>
            <p>
              Salut ! Moi c'est ... Eh bien le nom qu'il y a plus haut. Pour faire court,
              l'informatique est un passe-temps marrant, du coup, je me suis mis à fond là-dedans
              pendant les 6-7 dernières années.
            </p>
            <p>
              Lors de mes études, mon but n'a pas été de me perfectionner dans un domaine mais
              plutôt d'explorer un peu tout ce que ce domaine pouvait proposer. On peut dire que je
              suis à la recherche de l'<b>abymes</b> de l'informatique.
            </p>
            <p>
              Je n'ai pas encore tout découvert, loin de là. Cependant, je pense qu'afin d'atteindre
              cet abyme, se spécialiser est un passage obligé. Donc en ce moment je m'intéresse un
              peu au Web !
            </p>
            </>
      case 1:
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        { title: '🧠 Logique & Algorithmie', desc: 'Résolution de problèmes, structures de données, et un amour certain pour les casse-têtes.' },
        { title: '🌐 Développement Web', desc: 'HTML, CSS, JavaScript, React... et une passion pour rendre le web un peu plus joli (ou bizarre).' },
        { title: '🛠️ DevOps & Automatisation', desc: 'Scripts bash, CI/CD, Docker... parce que tout ce qui peut être automatisé doit l’être.' },
        { title: '🧪 Tests & Qualité', desc: 'Unitaires, intégration, TDD... pour éviter les bugs du vendredi soir (aucun déploiement le vendredi pour rendre le monde un peu meilleur).' },
        { title: '📦 Gestion de projet', desc: 'Agile, Scrum, Trello, Notion... ou juste des post-its et beaucoup de chocolat chaud.' },
        { title: '🧩 Curiosité technique', desc: 'Reverse engineering, bidouilles système, et exploration des abysses numériques.' }
      ].map((skill, index) => (
        <div key={index} className="border border-gray-400 p-2 bg-[#dcdcdc] shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]">
          <h4 className="font-bold mb-1">{skill.title}</h4>
          <p>{skill.desc}</p>
        </div>
      ))}
    </div>
      )

      case 2:
  return (
    <div className="space-y-4">
      {[
        { title: '🧠 Master - Ingénierie de l\'intelligence artificielle', desc: 'Collecte, Analyse et Traitement des données, base de l\'IA, développement d\'IA`,...' },
        { title: '🌐 Licence - Système embarqué', desc: 'Base de l\'informatique, historique des système embarqué, gestion des système embarqué,...' },
        { title: '🛠️ Licence - Gestion de projet', desc: 'Base de la gestion de projet...' },
        { title: '🧪 DUT Informatique', desc: 'Base de l\'informatique : Langage de programmation, logique, base de données, ...' },
      ].map((skill, index) => (
        <div className="border border-gray-400 p-3 bg-[#dcdcdc] shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]">
          <h4 className="font-bold mb-1">📁{skill.title}</h4>
          <p>
            {skill.desc}
          </p>
        </div>
      ))}
    </div>
  )

  case 3:
  const projects = [
    { name: '📁 ISAR (Il s\'appelle revient)', type: 'Application web', desc: 'Application web de gestion des emprunts et des stocks.', specs: ['HTML', 'CSS', 'Django', 'Python', 'JQuery', 'MySQL', 'Bootstrap', 'Apache2'] },
    { name: '📄 LDAPInterface', type: 'Application web', desc: 'Application web de gestion d\'annuaire LDAP', specs: ['OpenLDAP', 'Django', 'Python', 'HTML', 'CSS', 'Apache2'] },
    { name: '📁 SaphaelOS', type: 'Application Web', desc: 'Prototype d’OS fictif en interface web. Navigation façon Windows 95.', specs: ['React', 'JavaScript', 'HTML', 'CSS', 'TailWind'] },
    { name: '📁 Bras robotique', type: 'Application logiciel', desc: 'Corpus d\'algorithme permettant à un bras robotique de se mouvoir dans un environnement comprenant des obstacles', specs: ['Python', 'RaspberryPi 3B/4', 'Servo Moteur', 'Caméra', 'Stéréovision'] },
    { name: '📄 Déploiement massif', type: 'Corpus d\'applications', desc: 'Un corpus d\'outil permettant de déployer massivement un système d\'exploitation ainsi qu\'une liste d\'une centaines de logiciels sur plus de 400 ordinateurs', specs: ['FOG', 'Ansible', 'Semaphore', 'DHCP'] }
  ]

  return (
    <div className="space-y-2">
      {projects.map((proj, index) => (
        <div key={index}>
          <div
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            className="border border-gray-400 p-3 bg-[#dcdcdc] shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080] hover:bg-[#c0c0c0] cursor-pointer"
          >
            <h4 className="font-bold mb-1">{proj.name}</h4>
            <p className="italic text-xs mb-1">{proj.type}</p>
            <p>{proj.desc.slice(0, 60)}...</p>
            <div>
              {proj.specs.map((spec, index) => (
                <span key={`${spec}-${index}`} class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset mx-1">{spec}</span>    
              ))}
            </div>
          </div>

          {selectedProject === index && (
            <div className="mt-1 ml-4 mr-2 border border-gray-400 p-3 bg-[#eaeaea] shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080] text-sm">
              <p><b>Description complète :</b></p>
              <p>{proj.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )


      default:
        return <></>
    }
  }

  return (
    <div className="flex-grow flex overflow-auto bg-[#c0c0c0] font-[PerfectDOSVGA437] text-sm p-4">
      <div className="w-1/3 pr-4">
        <div className="border border-gray-500 shadow-[inset_-2px_-2px_0_#fff,inset_2px_2px_0_#000] bg-[#dfdfdf] p-2">
          <div className="bg-[#000080] text-white px-2 py-1 font-bold mb-2 shadow-[inset_-1px_-1px_0_#000,inset_1px_1px_0_#fff]">
            <span className="mr-2">📁</span> Menu
          </div>
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveCell(index)}
                className={`px-2 py-1 border border-gray-400 shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080] ${
                  activeCell === index
                    ? 'bg-[#000080] text-white'
                    : 'bg-[#dcdcdc] hover:bg-[#000080] hover:text-white'
                } cursor-pointer flex items-center`}
              >
                <span className="mr-2">🗂️</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-2/3">
        <div className="border border-gray-500 shadow-[inset_-2px_-2px_0_#fff,inset_2px_2px_0_#000] bg-[#dfdfdf] p-4">
          <div className="bg-[#000080] text-white px-2 py-1 font-bold mb-4 shadow-[inset_-1px_-1px_0_#000,inset_1px_1px_0_#fff]">
            {menuItems[activeCell]}
          </div>
          <div className="flex flex-col items-center">
            <img src={moi} className="w-48 h-auto mb-2 border border-gray-400" alt="Moi" />
            <h2 className="font-bold">🧑‍💻 Bored Robot</h2>
            <h3 className="italic">Gestionnaire de parc informatique</h3>
            <h3 className="italic mb-2">Développeur web/logiciel</h3>
          </div>
          <div className="space-y-2 mt-2">
            {content()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil
