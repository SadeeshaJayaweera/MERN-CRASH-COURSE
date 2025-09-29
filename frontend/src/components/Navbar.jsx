import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW="1140px" px={4}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                {/* Logo */}
                <Text
                    fontSize={{ base: "22px", sm: "28px" }}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                >
                    <Link to="/">Product Store 🛒</Link>
                </Text>

                {/* Buttons */}
                <HStack spacing={3} alignItems="center">
                    {/* Create Page Button */}
                    <Link to="/create">
                        <Button
                            leftIcon={<CiSquarePlus size={22} />}
                        >
                        </Button>
                    </Link>

                    {/* Dark/Light Toggle Button */}
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light"?  < IoMoon /> : <LuSun size= "20" /> }
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
