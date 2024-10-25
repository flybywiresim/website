import { useState } from 'react';
import Image from 'next/legacy/image';

type FaqsProps = {
    question: string,
    response?: string,
}

// @TODO expand to see response functionality

const Faqs = ({ question }: FaqsProps) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const onToggle = () => {
        if (isToggled) {
            setIsToggled(false);
        } else {
            setIsToggled(true);
        }
    };

    return (
        <div className="h-auto w-auto flex my-14 justify-between bg-navy-light text-left rounded-lg hover:outline">
            <h4 className="p-6 ">{question}</h4>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="px-5" onClick={onToggle}>
                <Image className="cursor-pointer" src="/svg/button-plus.svg" height={30} width={30} />
            </button>
        </div>
    );
};

export default Faqs;
