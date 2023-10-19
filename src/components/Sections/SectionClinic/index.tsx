import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { PinkGradient } from 'components/PinkGradient'
import { Text } from 'components/Text'
import { WhatsappLogo } from 'phosphor-react'
import { ClinicSlider } from './ClinicSlider'
import {
  ClinicContainer,
  ClinicContent,
  ClinicDescription,
  ClinicWrapper
} from './styles'

export function SectionClinic() {
  const message = encodeURIComponent(
    'Olá Flora, gostaria de marcar uma consulta.'
  )

  return (
    <ClinicWrapper id="consultorio">
      <ClinicContainer>
        <ClinicContent
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" asChild color='black'>
            <h1>
              O que esperar <br /> de seu atendimento
            </h1>
          </Heading>

          <ClinicDescription>
            <Text asChild>
              <p>
             Tenha certeza de que tudo que for dito entre nós ficará apenas entre nós. É tão
             importante o vínculo entre o paciente e o seu terapeuta. Além disso, 
             sendo online, posso atender um número maior de pacientes e fazer com que este
             meu trabalho se torne agradável, sem que precise se deslocar do seu ambiente. 
             Assim, você poderá escolher um horário que seja melhor para você.
              </p>
            </Text>

            <Text asChild>
              <p>
                Cada sessão de terapia é elaborada exclusivamente para 
                cada paciente com o objetivo de compreender, em profundidade,
                os problemas apresentados e fornecer ao paciente ferramentas
                baseadas em evidências científicas para melhora da perspectiva e
                qualidade de vida.
              </p>
            </Text>

            <Text asChild>
              <p>
              atendimento é de segunda a sexta, a partir das 14 horas até as 20 horas. 
              E, certamente, aos sábados, domingos e feriados que estejam no calendário
              oficial brasileiro. Naturalmente, também atendo estrangeiros, cujo fuso 
              horário requer uma demanda diferenciada. Devido ao fato de falar outras 
              línguas, isso tem sido muito satisfatório nos últimos anos.
              </p>
            </Text>
          </ClinicDescription>

          <ButtonLink
            href={`https://wa.me/5511983976224?text=${message}`}
            title="Agendar consulta!"
            target="_blank"
            size="lg"
          >
            <WhatsappLogo size={24} weight="regular" />
            Agendar Consulta
          </ButtonLink>
        </ClinicContent>

        <ClinicSlider />
      </ClinicContainer>
      <PinkGradient />
    </ClinicWrapper>
  )
}
