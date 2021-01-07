import { Button, Flex, Text } from "@chakra-ui/react"
import { FaSignInAlt } from 'react-icons/fa'

export default function Home() {

  return (
    <Flex>
      <Button colorScheme="blue">
        <FaSignInAlt/> 
        <Text ml="0.3rem">Button</Text>
      </Button>
    </Flex>
  )
}
