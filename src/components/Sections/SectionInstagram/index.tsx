import { InstaProfile } from 'components/@constants'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import Image from 'next/image'
import Script from 'next/script'
import { InstaProfileImageWrapper, InstaTitle, InstaWrapper } from './styles'

export function SectionInstagram() {
  return (
    <SectionContainer>
      <InstaWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <InstaTitle
          href="mailto:flora.psicoterapeuta@gmail.com"
          title="flora.psicoterapeuta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaProfileImageWrapper>
            <Image
              src={InstaProfile}
              alt="Imagem de perfil do Google da Flora Miyazaki."
            />
          </InstaProfileImageWrapper>

          <Heading asChild size="md">
            <h1>flora.psicoterapeuta@gmail.com</h1>
          </Heading>
        </InstaTitle>
      </InstaWrapper>
    </SectionContainer>
  )
}
