import Link from "next/link"

function Header() {
  return (
    <div className="max-container flex justify-between items-center py-4">
      <h2>Article</h2>
      <nav className="flex justify-center items-center gap-4">
            <Link className="link-hover" href='/'>Home</Link>
            <Link className="link-hover" href='/about'>About</Link>
            <Link className="link-hover" href='/contact'>Contact</Link>
      </nav>
    </div>
  )
}

export default Header
