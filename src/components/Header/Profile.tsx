import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile(){
    return (
        <Flex
            align="center"
        >
            <Box
                mr="4"
                textAlign="right"
            >
                <Text>Luís</Text>
                <Text color="gray.300" fontSize="small">luisfelipe.robinson@gmail.com</Text>
            </Box>
            <Avatar size="md" name="luís felipe" src="https://avatars.githubusercontent.com/u/9387073?v=4"  />
        </Flex>
    );
}