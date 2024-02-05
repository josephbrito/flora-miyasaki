import { Logo } from 'components/@constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavbarDropdownMenu } from './NavbarDropdownMenu'
import { LinksWrapper, NavbarContainer, NavbarWrapper, NavLink } from './styles'

export function Navbar() {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavbarWrapper isScrolled={offsetY > 0}>
      <NavbarContainer>
        <Link href="#inicio" title="Início" scroll={false}>
          <Image
            priority
            src={Logo}
            alt="Logotipo da psicoterapeuta Flora Miyazaki."
            style={{marginBottom: '36px'}}
          />
        </Link>

        <LinksWrapper>
          <NavLink href="#inicio" scroll={false}>
            Início
          </NavLink>

          <NavLink href="#sobre" scroll={false}>
            Sobre
          </NavLink>

          <NavLink href="#consultorio" scroll={false}>
            Consultório
          </NavLink>

          <NavLink href="#final" scroll={false}>
            Agendar
          </NavLink>
        </LinksWrapper>

        <NavbarDropdownMenu />
      </NavbarContainer>
    </NavbarWrapper>
  )
}
