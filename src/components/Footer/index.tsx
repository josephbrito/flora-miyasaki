import {
  DoctoraliaWhite,
  FooterLogo,
  InstagramWhite
} from 'components/@constants'
import { Text } from 'components/Text'
import { TextLink } from 'components/Text/TextLink'
import Image from 'next/image'
import {
  FooterContainer,
  FooterContent,
  FooterEnd,
  FooterImageWrapper,
  FooterLeft,
  FooterNav,
  FooterNavLink,
  FooterRight,
  FooterSocialLink,
  FooterSocialLinks,
  FooterWrapper
} from './styles'

export function Footer() {
  // get current year
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
            <FooterNav>
              <FooterNavLink href="#inicio" scroll={false}>
                Início
              </FooterNavLink>

              <FooterNavLink href="#sobre" scroll={false}>
                Sobre
              </FooterNavLink>

              <FooterNavLink href="#consultorio" scroll={false}>
                Consultório
              </FooterNavLink>

              <FooterNavLink href="#servicos" scroll={false}>
                Serviços
              </FooterNavLink>

              <FooterNavLink href="#depoimentos" scroll={false}>
                Depoimentos
              </FooterNavLink>
            </FooterNav>

            <FooterSocialLinks>
              <FooterSocialLink
                href="https://www.instagram.com/floramiyasaki2/"
                title="floramiyasaki2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={InstagramWhite} alt="Logo do Instagram." />
              </FooterSocialLink>
            </FooterSocialLinks>
          </FooterLeft>

          <FooterRight>
            <FooterImageWrapper>
              <Image
                src={FooterLogo}
                alt="Logo dourado."
              />
            </FooterImageWrapper>

            <Text size="xs" color="gray1">
              Psicoterapeuta Flora Miyasaki.
            </Text>

            <Text size="xs" color="gray1">
              <strong>Endereço: </strong>
              Parque São George
            </Text>

            <Text size="xs" color="gray1">
              <strong>Telefone: </strong>
              +55 (11) 98397-6224
            </Text>
          </FooterRight>
        </FooterContent>

        <FooterEnd>
          <Text size="xs">Todos os direitos reservados.</Text>
          <Text size="xs">©{currentYear} - Psicóloga Flora Miyasaki.</Text>

          <Text size="xs">
            Desenvolvido com ❤️ por{' '}
            <TextLink
              size="xs"
              href="https://github.com/josephbrito"
              title="Github de Luís V. Capelletto."
              target="_blank"
            >
              José de Brito
            </TextLink>
          </Text>
        </FooterEnd>
      </FooterContainer>
    </FooterWrapper>
  )
}
