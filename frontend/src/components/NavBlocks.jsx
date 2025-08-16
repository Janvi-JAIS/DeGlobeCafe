import { Link } from 'react-router-dom'

const sections = [
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Story', path: '/story' },
  { name: 'Contact', path: '/contact' },
]

function NavBlocks() {
  return (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8 bg-cream">
  {sections.map(({ name, path }) => (
    <Link to={path} key={name}>
      <div className="bg-white p-6 shadow-lg rounded-xl text-center hover:bg-caramel hover:text-white transition font-body font-medium">
        {name}
      </div>
    </Link>
  ))}
</div>

  )
}

export default NavBlocks
