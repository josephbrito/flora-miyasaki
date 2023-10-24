import { Final } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import Image from 'next/image'
import { WhatsappLogo } from 'phosphor-react'
import { FinalContent, FinalImageWrapper, FinalWrapper } from './styles'

export function SectionFinal() {
  const message = encodeURIComponent(
    'Olá Flora, gostaria de marcar uma consulta.'
  )

  return (
    <SectionContainer>
      <FinalWrapper>
        <FinalContent
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" asChild color='black'>
            <h1>
              A vida pode ser difícil, e a ajuda de um Psicoterapeuta
              profissional pode ser muito efetiva.
            </h1>
          </Heading>

          <Text asChild>
            <p>
              Entre em contato para saber mais sobre as formas de pagamento 
              e valores. Ficarei feliz em te atender.
            </p>
          </Text>

          <ButtonLink
            href={`https://wa.me/5511983976224?text=${message}`}
            title="Agendar consulta!"
            target="_blank"
            size="lg"
          >
            <WhatsappLogo size={24} weight="regular" />
            Agendar Consulta
          </ButtonLink>
        </FinalContent>

        <FinalImageWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={Final}
            alt="Foto de perfil da Psicóloga Flora Miyasaki."
          />
        </FinalImageWrapper>
      </FinalWrapper>
    </SectionContainer>
  )
}
