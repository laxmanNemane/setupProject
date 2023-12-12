import moment from 'moment/moment';
import React, { useEffect } from 'react';

const ScheduleNotification = () => {
    const Data = [
        { time: '17:29', message: 'Lunchtime reminder' },
        { time: '18:23', message: 'Evening plans' },
        { time: '17:29', message: 'Another lunchtime reminder' },
    ];

    useEffect(() => {
        Data.forEach((item) => {
            const date = moment(item.time, 'HH:mm');
            const timeDifference = date.diff(moment(), 'minutes');

            if (timeDifference >= 0) {
                const timeoutId = setTimeout(() => {
                    const notification = new Notification(item.message, {
                        body: `Time difference: ${timeDifference} minutes`,
                    });

                    notification.onclick = () => {
                        console.log(item, 'Notification clicked');
                        // Handle the click event as needed
                    };
                }, timeDifference * 60 * 1000);

                // Clear the timeout if the component is unmounted
                return () => clearTimeout(timeoutId);
            }
        });
    }, []);

    return <div>ScheduleNotification</div>;
};

export default ScheduleNotification;
