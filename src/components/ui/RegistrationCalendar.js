import classes from './RegistrationCalendar.module.css';

import { useState, useEffect } from 'react';




function RegistrationCalendar() {
    const [isLoading, setIsLoading] = useState(true);
    const [dates, setDates] = useState();
    const [hours, setHours] = useState();

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function addHours(date, hours) {
        let result = new Date(date);
        result.setHours(date.getHours() + hours);

        return result;
    }

    useEffect(() => {
        setIsLoading(true);
        let datenow = new Date();
        let hoursnow = new Date(0);
        hoursnow = addHours(hoursnow, 16);
        let l_dates = []
        let l_hours = []

        for (var i = 0; i < 7; i++) {
            let date = addDays(datenow, i);
            let hour = addHours(hoursnow, i);
            l_dates.push(date.toDateString());
            l_hours.push(hour.getUTCHours() + ":" + (hour.getMinutes())+ "0");

        }
        
        setIsLoading(false);
        setDates(l_dates);
        setHours(l_hours);

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
                            [0, 1, 2, 3, 4, 5, 6, 7].map(col => {
                                return <th key={col} className={classes.th}>{dates[col-1]}</th>
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        
                        [0, 1, 2, 3, 4].map(row => {
                            return <tr key={row} className={classes.tr}>
                                
                                {
                                    
                                    [0, 1, 2, 3, 4, 5, 6, 7].map(col => {
                                        return <th key={col} className={classes.th}>
                                            { col===0 ? (hours[row]+" - "+hours[row+1] ):' '
                                            }
                                        </th>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
    

    

    
}

export default RegistrationCalendar;