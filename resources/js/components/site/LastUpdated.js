import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';

function LastUpdated() {
    const [timeAgo, setTimeAgo] = React.useState('');

    async function getLastUpdatedTime() {
        try {
            const result = await fetch("https://flybywiresim-packages.nyc3.cdn.digitaloceanspaces.com/stable/A32NX-stable.zip", {method: 'HEAD'});
            const headTime = result.headers.get('Last-Modified').toString();

            const time = new Date(headTime);
            const currentTime = new Date();

            const diff = currentTime.getTime() - time.getTime();
            const diffSecond = Math.floor(diff / 1000);
            const diffMinute = Math.floor(diffSecond / 60);
            const diffHour = Math.floor(diffMinute / 60);
            const diffDay = Math.floor(diffHour / 24);
            const diffWeek = Math.floor(diffDay / 7);

            if (diffWeek >= 1) {
                if (diffWeek === 1) {
                    setTimeAgo(diffWeek + ' week');
                } else {
                    setTimeAgo(diffWeek + ' weeks');
                }
            } else {
                if (diffDay >= 1) {
                    if (diffDay === 1) {
                        setTimeAgo(diffDay + ' day');
                    } else {
                        setTimeAgo(diffDay + ' days');
                    }
                } else {
                    if (diffHour >= 1) {
                        if (diffHour === 1) {
                            setTimeAgo(diffHour + ' hour');
                        } else {
                            setTimeAgo(diffHour + ' hours');
                        }
                    } else {
                        if (diffMinute >= 1) {
                            if (diffMinute === 1) {
                                setTimeAgo(diffMinute + ' minute');
                            } else {
                                setTimeAgo(diffMinute + ' minutes');
                            }
                        } else {
                            if (diffSecond >= 1) {
                                if (diffSecond === 1) {
                                    setTimeAgo(diffSecond + ' second');
                                } else {
                                    setTimeAgo(diffSecond + ' seconds');
                                }
                            }
                        }
                    }
                }
            }
        } catch {
            setTimeAgo('N/A')
        }
    }

    useEffect(() => {
        if (!timeAgo) {
            getLastUpdatedTime();
        }
    })

    return (
        <div>
            <small>Last updated {timeAgo} ago</small>
        </div>
    );
}

const container = document.getElementById('last-updated');

if (container) {
    ReactDOM.render(<LastUpdated/>, container);
}
