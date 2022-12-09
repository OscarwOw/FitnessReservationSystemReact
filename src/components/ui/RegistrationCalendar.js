import classes from './RegistrationCalendar.module.css';

import { useState, useEffect } from 'react';




function RegistrationCalendar() {
    const [isLoading, setIsLoading] = useState(true);
    const [dates, setDates] = useState();

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    useEffect(() => {
        setIsLoading(true);
        const datenow = new Date();
        
        let date = new Date();
        let l_dates = []
        for (var i = 0; i < 7; i++) {
            date = addDays(datenow, i);
            l_dates.push(date.toDateString());
        }
        
        setIsLoading(false);
        setDates(l_dates);

    }, []);
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <table className={classes.table}>
                <thead>
                    <tr className={classes.tr}>
                        {
                            [1, 2, 3, 4, 5, 6, 7].map(col => {
                                return <th key={col} className={classes.th}>{dates[col]}</th>
                            })
                        }

                    </tr>
                </thead>
            </table>
        </div>
    );
    

    

    
}

export default RegistrationCalendar;