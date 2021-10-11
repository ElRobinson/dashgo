import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';

interface NavLinksProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink( {icon, children, href, ...rest}: NavLinksProps){
    return(
        <Link href={href} passHref >        
            <ChakraLink display="flex" align="center" {...rest}> 
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium"> {children}</Text>
            </ChakraLink>
        </Link>
    );
}