import Image from 'next/legacy/image';
import Link from 'next/link';
import Button from '../Button/Button';
import { links } from '../../constants/links';

const Discord = () => (
    <div className="flex-col items-center lg:items-start flex gap-y-2.5">
        <span className="flex justify-center gap-x-5 lg:justify-start">
            <Image src="/svg/discord.svg" layout="intrinsic" width={40} height={40} />
            <h3 className="text-discord">Discord</h3>
        </span>
        <p>Join us to chat with other members of the community, get started with contributing, or ask us a question!</p>

        <Link
            href={links.discord}
            target="_blank"
            rel="noreferrer"
        >
            <Button label="Join Community!" theme="discord" />
        </Link>
    </div>
);

export default Discord;
