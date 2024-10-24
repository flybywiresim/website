import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Section from '../../components/Utils/Section';
import { fetchInsightData } from '../../hooks/fetchInsightData';
import Discord from '../../components/Discord/Discord';
import 'leaflet/dist/leaflet.css';

const LeafletMap = dynamic(() => import('../../components/Map/Map'), { ssr: false });

const Statistic = (props: { value: string, label: string }) => (
    <div>
        <h2>{props.value}</h2>
        <p className="text-sm">{props.label}</p>
    </div>
);
const Insights = () => {
    const [liveFlights, setLiveFlights] = useState('0');
    const [commitCount, setCommitCount] = useState('0');
    const [contributorCount, setContributorCount] = useState('0');

    useEffect(() => {
        fetchInsightData().then((res) => {
            setLiveFlights(res.liveFlights);
            setCommitCount(res.commitCount);
            setContributorCount(res.contributorCount);
        });
    }, []);

    return (
        <Section theme="light" className="relative flex flex-col py-0 xl:flex-row-reverse">
            <div className="grow flex flex-col items-center justify-center py-20">
                <div className="grid gap-y-4 px-4 text-center lg:text-left lg:px-16 2xl:px-28">
                    <div className="flex flex-col max-lg:items-center">
                        <div className="flex flex-col flex-wrap items-center gap-4 lg:flex-row">
                            <Image src="/svg/tail/tail.svg" width={40} height={40} />

                            <h2>Community Insights</h2>
                        </div>

                        <p className="max-w-prose max-lg:text-center">
                            Discover the extensive community behind every FlyByWire Simulations aircraft - a vibrant and
                            active online group that prioritises collaborative work and openness.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center xl:max-w-3xl">
                        <ul className="grid grid-cols-2 gap-20 py-2 lg:grid-cols-4">
                            <Statistic value={liveFlights} label="Live Flights" />
                            <Statistic value={commitCount} label="Commits" />
                            <Statistic value={contributorCount} label="Contributors" />
                            <Statistic value="2M+" label="Downloads" />
                        </ul>

                        <hr className="my-6" />
                        <Discord />
                    </div>

                </div>
            </div>

            <div className="md:min-w-[600px] max-xl:h-96 bg-red-500 grow-[3]">
                <LeafletMap isFullPageMap={false} className="size-full" />
            </div>
        </Section>
    );
};

export default Insights;
