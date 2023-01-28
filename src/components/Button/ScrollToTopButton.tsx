import { ArrowUpOutlined } from '@ant-design/icons';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ScrollToTopButton = () => {
    const { visible, handleClick } = useScrollToTop();

    return (
        <ArrowUpOutlined
            style={{ fontSize: '1.2em' }}
            className={`fixed bottom-5 right-5 rounded-sm bg-primary p-3 ${visible ? 'block' : 'hidden'}`}
            onClick={handleClick}
        />
    );
};
export default ScrollToTopButton;
