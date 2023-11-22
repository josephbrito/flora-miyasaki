import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import {
  InfoContent,
  InfoSection,
  InfotItem,
  InfotItems,
  InfoWarning,
  InfoWarningText,
  InfoWrapper
} from './styles'

export function SectionInfo() {
  return (
    <>
      <InfoSection>
        <InfoWrapper
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <InfoContent>
            <Heading size="sm" color='black'>
              Atendimentos online:
            </Heading>

            <InfotItems>
              <InfotItem>
                <Heading size="md" color='black'>Consulta Psicoterapeuta</Heading>
                <Text color="gray1">- Psicanálise-freud</Text>
                <Text color="gray1">- Psicologia analítica-jund</Text>
              </InfotItem>

              <InfotItem>
                <Heading size="md" color='black'>Telemedicina</Heading>
                <Text color="gray1">Atendimento online</Text>
              </InfotItem>
            </InfotItems>
          </InfoContent>
        </InfoWrapper>
      </InfoSection>

      <InfoWarning
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <InfoWarningText size="sm" color="black">
         Trabalhamos atendendo apenas de forma online, 
         por ser mais prático e deixar o custo mais acessível,
         tanto para mim quanto para o meu paciente.
        </InfoWarningText>
      </InfoWarning>
    </>
  )
}
