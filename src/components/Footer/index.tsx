import {
  FooterLogo,
  Gmail,
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
import { WhatsappLogo } from 'phosphor-react'

export function Footer() {
  // get current year
  const currentYear = new Date().getFullYear()
  const message = encodeURIComponent(
    'Olá Flora, gostaria de marcar uma consulta.'
  )
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
            </FooterNav>

            <FooterSocialLinks>
              <FooterSocialLink
               href={`https://wa.me/5511994377210?text=${message}`}
               title="Agendar consulta!"
               target="_blank"
               style={{ color:"#5bdd2f" }}
               rel="noopener noreferrer"
              >
            <WhatsappLogo size={24} weight="regular" style={{color:"#fff"}} />
              </FooterSocialLink>

              <FooterSocialLink
                href="mailto:flora.psicoterapeuta@gmail.com"
                title="flora.psicoterapeuta@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image src={Gmail} alt='Logo Gmail' />

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
              <strong>Telefone: </strong>
              +55 (11) 99437-7210
            </Text>
            <Text size="xs" color="gray1">
              <strong>Email: </strong>
              flora.psicoterapeuta@gmail.com
            </Text>
          </FooterRight>
        </FooterContent>

        <FooterEnd>
          <Text size="xs">Todos os direitos reservados.</Text>
          <Text size="xs">©{currentYear} - Psicoterapeuta Flora D.</Text>

          <Text size="xs">
            Desenvolvido com ❤️ por {/* */}
            <TextLink
              size="xs"
              href="https://github.com/josephbrito"
              title="Github de José de Brito."
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
