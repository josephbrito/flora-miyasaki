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
              Olá, eu sou Flora, psicoterapeuta. Escolhi esta profissão clínica por encontrar afinidade com minha personalidade.
              Para chegar a essa possibilidade de afirmar, com satisfação, que tenho mais de 20 anos de atendimentos clínicos, 
              foi uma longa jornada. Escolhi exatamente essa profissão como forma de trilhar um caminho para auxiliar o próximo. 
              Naturalmente, trabalhei em vários locais e me dediquei com muito afinco. Hoje, por onde passei, sou uma referência 
              na minha área, por estar sempre buscando novos caminhos para o atendimento clínico. Isso demanda estudo frequente e 
              aprimoramento constante.
              </p>
            </Text>

            <Text asChild>
              <p>
              Tenho para mim que essa é minha missão: auxiliar as pessoas a se conectarem consigo mesmas, 
              buscando dentro de si o melhor como ser humano que atua no mundo e fazendo a diferença. Na 
              verdade, apenas auxilio o paciente a ser o próprio autor de sua história. Estou ali como uma 
              cor adjuvante para auxiliá-lo a seguir e reencontrar seu próprio caminho. Após algum tempo de 
              tratamento, ele irá se transformando, pois aquilo que era será ressignificado e servirá como 
              um trampolim para sua vitória, seja ela profissional ou emocional, proveniente de aspectos 
              traumáticos derivados de vários momentos vivenciados, os quais o atormentam, para seu 
              crescimento pessoal.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
