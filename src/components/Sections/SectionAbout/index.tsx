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
            alt="Foto da Flora Miyazaki."
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
              Olá, eu sou Flora, psicoterapeuta. Escolhi esta profissão clínica por encontrar afinidade com minha personalidade.
              Para chegar a essa possibilidade de afirmar, com satisfação, que tenho mais de 20 anos de atendimento clínico.
              Foi uma longa jornada. Passei por várias instituições onde trabalhei, e na minha área sou tida como referência.
              </p>
            </Text>

            <Text asChild>
              <p>
              Tenho para mim que essa é minha missão: auxiliar as pessoas a se conectarem consigo mesmas, 
              buscando dentro de si o seu melhor. Na verdade, apenas auxilio o paciente a ser o próprio 
              autor e protagonista de sua história. Estou ali como uma coadjuvante para auxiliá-lo a seguir
              e reencontrar seu próprio caminho. Ele irá ressignificar muito de seus pensamentos e a proposta 
              é subir um degrau de cada vez para chegar ao pódio, seja este emocional, profissional, acadêmico 
              e outras necessidades de seu emocional. Para ressignificar o seu interior e conhecer a sí próprio 
              profundamente.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
