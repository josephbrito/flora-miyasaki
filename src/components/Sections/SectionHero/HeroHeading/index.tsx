import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { HeroHeadingWrapper } from './styles'

export function HeroHeading() {
  const message = encodeURIComponent(
    'Olá Flora, gostaria de marcar uma consulta.'
  )

  return (
    <HeroHeadingWrapper
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Text weight="semibold" color="black" size="sm" asChild>
        <h2>Psicoterapeuta</h2>
      </Text>

      <Heading color="black" size="xl" asChild>
        <h1>
          A sua Psique <strong> é uma prioridade!</strong>
        </h1>
      </Heading>

      <Text color="black" size="lg" asChild>
        <p>
          Um acompanhamento psicoterapêutico bem feito irá ajudá-lo a entender os
          seus sentimentos, seu modo de pensar e de agir frente à vida.
        </p>
      </Text>

      <ButtonLink
        size="xl"
        href={`https://wa.me/5511991705111?text=${message}`}
        title="Agendar consulta!"
        target="_blank"
      >
        Agendar Consulta
      </ButtonLink>
    </HeroHeadingWrapper>
  )
}
