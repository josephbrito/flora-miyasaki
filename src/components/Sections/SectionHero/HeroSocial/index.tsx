import { Doctoralia, Gmail, Instagram } from 'components/@constants'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  Divider,
  HeroSocialLink,
  HeroSocialLinks,
  HeroSocialWrapper
} from './styles'
import { ButtonLink } from 'components/Button/ButtonLink'
import { WhatsappLogo } from 'phosphor-react'

export function HeroSocial() {
  const message = encodeURIComponent(
    'Olá Flora, gostaria de marcar uma consulta.'
  )
  return (
    <HeroSocialWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <Divider />

      <Text size="sm" color="gray1" weight="medium">
        Conheça minhas redes sociais:
      </Text>

      <HeroSocialLinks>
      <HeroSocialLink
            href={`https://wa.me/5511991705111?text=${message}`}
            title="Agendar consulta!"
            target="_blank"
            style={{color:"#5bdd2f"}}
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={24} weight="regular" />

          </HeroSocialLink>

        <HeroSocialLink
          href="mailto:flora.miyasaki@gmail.com"
          title="flora.miyasaki@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image src={Gmail} />

          <Text size="sm" color="white" weight="medium">
            floramiyasaki2
          </Text>
        </HeroSocialLink>

      </HeroSocialLinks>
    </HeroSocialWrapper>
  )
}
