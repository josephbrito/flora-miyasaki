import { DropdownMenu } from 'components/DropdownMenu'
import { DropdownMenuItem } from 'components/DropdownMenu/styles'
import Link from 'next/link'
import { List } from 'phosphor-react'

export function NavbarDropdownMenu() {
  return (
    <DropdownMenu type="navbar" trigger={<List weight="bold" size={40} />}>
      <Link href="#inicio" title="Início" scroll={false}>
        <DropdownMenuItem>Início</DropdownMenuItem>
      </Link>

      <Link href="#sobre" scroll={false}>
        <DropdownMenuItem>Sobre</DropdownMenuItem>
      </Link>

      <Link href="#consultorio" scroll={false}>
        <DropdownMenuItem>Consultório</DropdownMenuItem>
      </Link>

      <Link href="#final" scroll={false}>
        <DropdownMenuItem>Agendar</DropdownMenuItem>
      </Link>
    </DropdownMenu>
  )
}
