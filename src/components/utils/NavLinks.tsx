import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, DropdownItem } from './Dropdown';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({ name, path, external, className }: LinkProps) => (
    <li className={`w-full cursor-pointer list-none transition hover:text-teal ${className}`}>
        {
            external ? (
                <a href={path}>
                    <p>
                        {name}
                    </p>
                </a>
            ) : (
                <Link href={path}>
                    <p>
                        {name}
                    </p>
                </Link>
            )
        }
    </li>
);

export const NavLinks = (props: { className?: string }) => {
    const router = useRouter();

    return (
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
            {router.pathname !== '/' && <NavLink name="Home" path="/" />}
            <NavLink name="NOTAMS" path="/notams" />
            <NavLink name="Projects" path="/a32nx" />
            <NavLink name="Documentation" external path="https://docs.flybywiresim.com/" />
            <NavLink name="Map" path="/map" />
            <Dropdown titleName="Community">
                <DropdownItem>
                    <NavLink name="Discord" external path="https://discord.gg/flybywire" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Twitter" external path="https://twitter.com/FlyByWireSim" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Facebook" external path="https://facebook.com/FlybywireSimulations/" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="YouTube" external path="https://www.youtube.com/FlyByWireSimulations" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Donate" external path="https://opencollective.com/flybywire/" />
                </DropdownItem>
            </Dropdown>
        </span>
    );
};
