import RegistrationCalendar from "../components/ui/RegistrationCalendar";

import { useState, useEffect } from 'react';

function CalendarPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedObjects, setLoadedObjects] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://192.168.100.10:5076/api/Lecture/NextWeek').then((response) => {
            return response.json();
        }).then((data) => {
            const objects = [];
            for (const key in data) {
                const object = {
                    id: key,
                    ...data[key]
                };
                objects.push(object);
            }
            setIsLoading(false);
            setLoadedObjects(data);
        });

    }
    , []);

    if (isLoading) {
        return (
            <section>
                <p>Loading..</p>
            </section>
        )
    }


    return (
    <div>
            <h1>Calendar Page</h1>
            <RegistrationCalendar items={loadedObjects} />
    </div>
    );
}

export default CalendarPage;