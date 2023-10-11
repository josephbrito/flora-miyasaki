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
                <Heading size="md" color='black'>Consulta Psicológica</Heading>
                <Text color="gray2">Presencial em consultório</Text>
              </InfotItem>

              <InfotItem>
                <Heading size="md" color='black'>Telemedicina</Heading>
                <Text color="gray2">Atendimento online</Text>
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
          Trabalhamos apenas com atendimento particular. Não atendemos convênios
          e planos de saúde. Mas não se preocupe. Se você possui algum convênio
          ou plano de saúde, pode realizar seu agendamento na modalidade
          particular e nós iremos te orientar e auxiliar, para que você solicite
          o reembolso junto ao convênio e peça, ainda, dedução no Imposto de
          Renda.
        </InfoWarningText>
      </InfoWarning>
    </>
  )
}
