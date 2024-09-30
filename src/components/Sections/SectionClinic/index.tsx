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
              Tenha certeza de que tudo o que for dito entre nós ficará apenas entre nós. 
              O vínculo entre o paciente e o terapeuta é de extrema importância e sigilo. Além disso, 
              ao ser online, posso atender um maior número de pacientes e tornar o meu trabalho 
              mais acessível, sem que você precise se deslocar do seu ambiente. Dessa forma, 
              você poderá escolher um horário que seja mais conveniente para você.
              </p>
            </Text>

            <Text asChild>
              <p>
              Cada sessão de terapia é elaborada exclusiva para cada paciente, 
              com o objetivo de compreender a profundidade de seus problemas apresentados 
              e fornecer ao paciente ferramentas embasadas em evidências científicas 
              para melhorar a perspectiva e a qualidade de sua vida.
              </p>
            </Text>

            <Text asChild>
              <p>
              O atendimento ocorre de Segunda a Sexta-feira, das 14 horas às 20 horas.
              </p>
            </Text>
          </ClinicDescription>

          <ButtonLink
            href={`https://wa.me/5511994377210?text=${message}`}
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
