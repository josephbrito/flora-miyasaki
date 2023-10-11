import { About } from 'components/@constants'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  AboutContent,
  AboutDescription,
  AboutImageWrapper,
  AboutWrapper
} from './styles'

export function SectionAbout() {
  return (
    <SectionContainer>
      <AboutWrapper id="sobre">
        <AboutImageWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={About}
            alt="Foto da Flora Miyasaki."
          />
        </AboutImageWrapper>

        <AboutContent
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" asChild color='black'>
            <h1>Sobre mim</h1>
          </Heading>

          <AboutDescription>
            <Text asChild>
              <p>
                Sou Psicoterapeuta... [em desenvolvimento]
              </p>
            </Text>

            <Text asChild>
              <p>
                Realizo avaliações.. [em desenvolvimento]
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
