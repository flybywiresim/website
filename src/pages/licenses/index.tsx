import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import { links } from '../../constants/links';

type Repository = { name: string, note?: string };

type License = { name: string, repositories: Repository[], summary: string, link: string };

const licenses: License[] = [
    {
        name: 'GNU General Public License v3.0',
        repositories: [
            { name: 'aircraft', note: 'source code' },
            { name: 'aircraft-large-files', note: 'source code' },
            { name: 'branding' },
            { name: 'fdr-analysis' },
            { name: 'installer' },
            { name: 'simbridge' },
        ],
        summary: 'You may use, modify and distribute the code, including commercially, '
            + 'as long as anything you distribute based on it is also licensed under the GPLv3 and comes with its source code.',
        link: links.tldrlegal_gpl_3,
    },
    {
        name: 'Creative Commons Attribution-NonCommercial 4.0 International',
        repositories: [
            { name: 'aircraft', note: 'original 3D assets' },
            { name: 'aircraft-large-files', note: 'original 3D assets' },
        ],
        summary: 'You may share and adapt the material for non-commercial purposes, as long as you give credit and indicate the changes you made.',
        link: links.tldrlegal_cc_by_nc_4,
    },
    {
        name: 'GNU Affero General Public License v3.0',
        repositories: [
            { name: 'api' },
            { name: 'discord-bot' },
            { name: 'discord-bot-utils' },
            { name: 'website' },
        ],
        summary: 'Like the GPLv3, but if you let people use a modified version over a network, such as a web service, you must also offer them its source code.',
        link: links.tldrlegal_agpl_3,
    },
    {
        name: 'MIT License',
        repositories: [
            { name: 'msfs-rs' },
        ],
        summary: 'You may do almost anything with the code, as long as you include the original copyright and license notice.',
        link: links.tldrlegal_mit,
    },
];

const Licenses: NextPage = () => (
    <>
        <Head>
            <title>Licenses - FlyByWire Simulations</title>
            <meta
                key="og:title"
                name="og:title"
                content="Licenses - FlyByWire Simulations"
            />
        </Head>

        <Section theme="dark" className="relative">
            <div className="grid">
                <Image
                    src="/img/a32nxwing.png"
                    alt=""
                    fill
                    className="bg-secondary object-cover opacity-20 blur-sm"
                />
                <Container className="py-8">
                    {/* max-w-[65ch] at text-xl matches the width of the prose-xl article below */}
                    <div className="relative top-1/4 mx-auto my-4 w-full max-w-[65ch] text-xl">
                        <h2>Licenses</h2>
                        <p className="text-white/50">How to interpret our licenses and to use our source code and models.</p>
                    </div>
                </Container>
            </div>
        </Section>

        <Section theme="light">
            <Container className="grid justify-center">
                <article className="prose-xl prose prose-slate prose-li:font-body prose-li:text-lg prose-li:font-light prose-li:leading-relaxed prose-li:tracking-[-2%]">
                    <h2>Why we are open source</h2>
                    <p>
                        Free and open-source software (FOSS) is software that anyone is free to use, copy, study, change and share,
                        and whose source code is openly available. Because everyone can see how the software works, anyone can help improve it,
                        and those improvements can be shared back so the software gets better for everyone.
                    </p>
                    <p>
                        The free in FOSS is about freedom. The Free Software Foundation describes it as
                        {' '}
                        <a href={links.fsf_free_software_definition} target="_blank" rel="noreferrer">four essential freedoms</a>
                        :
                    </p>
                    <ul>
                        <li>The freedom to run the software as you wish, for any purpose.</li>
                        <li>The freedom to study how the software works and change it. Access to the source code is a precondition for this.</li>
                        <li>The freedom to share copies with others.</li>
                        <li>The freedom to share your modified versions with others, so the whole community can benefit from your changes.</li>
                    </ul>
                    <p>
                        The Open Source Initiative sets out similar criteria in the
                        {' '}
                        <a href={links.osi_open_source_definition} target="_blank" rel="noreferrer">Open Source Definition</a>
                        .
                    </p>

                    <h3>Our choice</h3>
                    <p>
                        FlyByWire Simulations is an open-source community. We develop our projects following the FOSS spirit, and we have deliberately
                        chosen licenses that keep them that way. Our source code uses the copyleft GNU GPLv3, so anyone who distributes a project
                        based on our code must share their source code under the same license.
                    </p>
                    <p>
                        Our original 3D models are licensed under CC BY-NC 4.0, which allows anyone to share and adapt them, but not for commercial purposes.
                    </p>
                    <p>
                        This is part of the beauty of open-source licenses: they allow others to use our work and innovate on top of it.
                        As long as our licenses are followed, others are free to use our source code and models for their own projects.
                    </p>

                    <h2>Using our source code or models in your own project</h2>
                    <p>
                        You are free to use our source code and models as long as you follow the rules and specifications of our licenses.
                        Below is an explanation of the licenses and how they relate to our aircraft source code and models.
                    </p>

                    <h3>Source code: GNU GPLv3</h3>
                    <p>
                        Most of the systems and other source code in our aircraft repositories is licensed under the GNU General Public License v3.0.
                        Some files, such as third-party libraries, use other licenses, so check the license header of each file you use and any
                        license files in its parent directories. If you distribute anything based on our GPLv3 code:
                    </p>
                    <ul>
                        <li>Your project as a whole must be licensed under the GPLv3 as well.</li>
                        <li>
                            You must make the complete source code available to everyone who receives your project, from the same place they
                            download it and at no extra charge. Publishing it on a platform such as GitHub is the easiest way to do this.
                            Anyone who receives the source code is allowed to share it further.
                        </li>
                        <li>
                            You must clearly state that you modified our code, and when. Keeping your project in public version control,
                            such as git, makes your changes easy to track.
                        </li>
                        <li>You must keep our copyright and license notices, and include a copy of the GPLv3 with your project.</li>
                    </ul>
                    <p>
                        The GPLv3 itself does not prohibit selling software, but a project that includes our 3D models cannot be sold.
                        See below for more information. Note that anyone is free to use and redistribute the source code under the GPLv3, including for software sold which is GPLv3 licensed.
                    </p>

                    <h3>3D models: CC BY-NC 4.0</h3>
                    <p>
                        Our original 3D models are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.
                        If you share anything that contains our models, or models based on them:
                    </p>
                    <ul>
                        <li>It must be non-commercial. You cannot sell it or put it behind a paywall; it must be available for free.</li>
                        <li>
                            You must credit our work. For example, mention in your product description that your model is based on, and
                            derived from, the FlyByWire models, with a link to our website.
                        </li>
                        <li>
                            You must keep our copyright notice, state that the model is licensed under CC BY-NC 4.0 with a link to the
                            license, and link to our original model.
                        </li>
                        <li>You must indicate that you modified our model, and keep any earlier notices of modifications.</li>
                        <li>You cannot suggest that your project is official, or endorsed by FlyByWire Simulations.</li>
                    </ul>

                    <h3>Microsoft Flight Simulator content</h3>
                    <p>
                        The FlyByWire A32NX was created under Microsoft&apos;s
                        {' '}
                        <a href={links.microsoft_game_content_usage_rules} target="_blank" rel="noreferrer">Game Content Usage Rules</a>
                        {' '}
                        using assets from Microsoft Flight Simulator, and both our aircraft rely on the Microsoft Flight Simulator SDK, which comes
                        with its own license agreement which you must review and follow. We can not provide guidance on licenses or End-User
                        License Agreements of different projects or companies.
                    </p>

                    <p>
                        This page does not provide legal advice and is an overview of our projects and licenses.
                        The actual license content is the source of truth and must be complied with.
                    </p>

                    <h2>Licenses by repository</h2>
                    <p>
                        These are the main licenses of our active public repositories, and are meant as general guidance. Some repositories
                        include code or assets under other licenses, such as third-party libraries. For the specifics, always check the license
                        header of each source file and any license files in its parent directories.
                    </p>

                    {licenses.map((license) => (
                        <section key={license.name}>
                            <h3>{license.name}</h3>
                            <p>{license.summary}</p>
                            <p>
                                <a href={license.link} target="_blank" rel="noreferrer">Plain-English summary on TLDRLegal</a>
                            </p>
                            <p><strong>Applies to:</strong></p>
                            <ul>
                                {license.repositories.map((repository) => (
                                    <li key={repository.name}>
                                        <a href={`${links.github}/${repository.name}`} target="_blank" rel="noreferrer">{repository.name}</a>
                                        {repository.note && ` (${repository.note})`}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <h2>Questions?</h2>
                    <p>
                        If you have questions about our licenses, contact one of our developers, moderators, or admins on our
                        {' '}
                        <a href={links.discord}>Discord server</a>
                        .
                    </p>
                </article>
            </Container>
        </Section>
    </>
);

export default Licenses;
