import { Text, Link, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinksProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink( {icon, children, ...rest}: NavLinksProps){
    return(
        <Link display="flex" align="center" {...rest}> 
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium"> {children}</Text>
        </Link>
    );
}