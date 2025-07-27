import { Text, Box } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box p={4}>
      <Text>
        <Text fontSize="xl" mb={4}>
          Olá, seja muito bem-vindo! Me chamo Gabriel e sou programador há mais
          ou menos 10 anos.
        </Text>
        <Text fontSize="xl" mb={4}>
          Ao longo dessa jornada, já acertei, já errei (e continuo errando
          bastante! rs), ensinei, aprendi, fui ajudado e ajudei também. Mas
          acima de tudo, percebi algo especial sobre nossa profissão: nós,
          desenvolvedores, somos incrivelmente privilegiados.
        </Text>

        <Text fontSize="xl" mb={4}>
          Por quê? Porque diferente de muitas áreas por aí, precisamos apenas de
          um computador e muita curiosidade para criar algo incrível. Unindo
          tecnologia à criatividade, podemos dar vida a ideias, resolver
          problemas reais e causar impacto positivo no mundo à nossa volta.
        </Text>

        <Text fontSize="xl" mb={4}>
          Este blog é exatamente sobre isso: compartilhar experiências, desafios
          e aprendizados sobre desenvolvimento, tecnologia, e criatividade.
        </Text>

        <Text fontSize="xl" mb={4}>
          Fique à vontade :)
        </Text>
      </Text>
    </Box>
  );
}
