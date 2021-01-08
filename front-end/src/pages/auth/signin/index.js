import Head from 'next/head'
import {
  Container,
  Box,
  Button,
  Text,
  Checkbox,
  Flex,
  Img,
  Input,
  InputGroup,
  Link,
  InputLeftElement,
  useBreakpointValue } from "@chakra-ui/react";

import { FaUserAlt, FaKey, FaSignInAlt } from 'react-icons/fa'

import config from '../../../config'

export default function Signin () {
  const size = useBreakpointValue({ base: "md", sm: "md", md: 'lg', lg: 'lg' })

  return (
    <Container as={Flex} justifyContent="center" alignItems="center" m="0" p="12px" maxW="100%" bgColor="gray.100" w="100%" h="100vh">
      <Head>
        <title>Faça o login - {config.SITE_NAME}</title>
      </Head>

      <Box maxW="480px" w="100%" p="24px" bgColor="white" boxShadow="md" borderRadius="md">

        <Flex flexDirection="column" justifyContent="center" alignItems="center" mb="2rem">
          <Img w={{base: '164px', md: '184px', lg: '248px'}} src="/assets/images/logo.png" />
          <Text color="gray.400" textAlign="center" fontSize={{ base: '14px', sm: '16px', md: '16px', lg: '18px' }}>
            Bem-vindo, digite o seu email e senha e e clique em entrar para continuar.
          </Text>
        </Flex>

        <InputGroup>
          <InputLeftElement pointerEvents="none" mt={{ base: '0', md: '0.3rem' }} color="gray.300" size={size} children={<FaUserAlt/>} />
          <Input type="email" placeholder="Digite seu e-mail" size={size} focusBorderColor="yellow.300" color="gray.500" />
        </InputGroup>

        <InputGroup mt="1rem">
          <InputLeftElement pointerEvents="none" mt={{ base: '0', md: '0.3rem' }} color="gray.300" size={size} children={<FaKey/>} />
          <Input type="password" placeholder="Digite a sua senha" size={size} focusBorderColor="yellow.300" color="gray.500" />
        </InputGroup>

        <InputGroup mt="1rem">
          <Checkbox size={size} colorScheme="yellow" defaultIsChecked>
            Lembrar minha senha
          </Checkbox>
        </InputGroup>

        <InputGroup mt="1rem">
          <Button leftIcon={<FaSignInAlt/>} w="100%" colorScheme="yellow" color="white" size={size}>Fazer Login</Button>
        </InputGroup>

        <Flex justifyContent="center" alignItems="center" mt="1rem" color="gray.500">
          Não tem uma conta ainda?
          <Link ml="0.2rem" href="/auth/signup" color="yellow.500">Cadastre-se</Link>
        </Flex>
      </Box>

    </Container>
  )
}
