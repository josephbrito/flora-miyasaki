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
              Para chegar a essa possibilidade de afirmar, com satisfação, que tenho mais de 20 anos de atendimentos clínicos, 
              foi uma longa jornada. Escolhi exatamente essa profissão como forma de trilhar um caminho para auxiliar o próximo. 
              Naturalmente, trabalhei em vários locais e me dediquei com muito afinco. Passei por várias instituições onde trabalhei, 
              e na minha área sou tida como referência, sempre buscando novos caminhos clínicos para o atendimento. Isso demanda de mim
              um frequente estudo e aprimoramento constante.
              </p>
            </Text>

            <Text asChild>
              <p>
              Tenho para mim que essa é minha missão: auxiliar as pessoas a se conectarem consigo mesmas, 
              buscando dentro de si o seu melhor. Na verdade, apenas auxilio o paciente a ser o próprio 
              autor de sua história. Estou ali como uma coadjuvante para auxiliá-lo a seguir e reencontrar
              seu próprio caminho. Após algum tempo de tratamento, ele irá notar uma diferença em sí mesmo, 
              pois aquilo que era um sofrimento para ele, ele conseguirá através da terapia e auxílio a 
              ressignificar a suas dores, as quais servirão como um trampolim para sua vitória, usando o que
              o fazia mal como uma proposta de subir um degrau a cada dia e chegar ao pódio. Seja este pódio
              profissional, emocional, acadêmico, dependendo de suas necessidades interiores. Os aspectos 
              traumáticos derivados de vários momentos vivenciados, os quais o atormentavam e impediam o seu 
              crescimento pessoal podem ser transformados e ressignificados.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
