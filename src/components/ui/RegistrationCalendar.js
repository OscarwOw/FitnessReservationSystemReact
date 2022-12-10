import classes from './RegistrationCalendar.module.css';

import { useState, useEffect } from 'react';




function RegistrationCalendar(props) {
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

    function CreateContent(col, row) {
        if (col === 0) {
            return hours[row] + " - " + hours[row + 1];
        }
        else {

            
            for (let i = 0; i < props.items.length; i++) {
                
                if (props.items[i].date.substr(8, 2) === dates[col - 1].substr(8, 2) && props.items[i].date.substr(11, 2) === hours[row].substr(0, 2)) {
                    
                    console.log(props.items[i])
                    return props.items[i].name
                
                }
            }

            
            let newdate = new Date(dates[col - 1].substr(0, 4), dates[col - 1].substr(5, 2) - 1, dates[col - 1].substr(8, 2)-1+2)
            let finaldate = newdate.toISOString().substr(0,10)
            

            //newdate = newdate.setHours(hours[row]);
            //newdate = newdate.setDate(newdate.getDate()+ col - 1 )
            
            
            return ' ';
            //return finaldate + " " + hours[row];
        }
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
            l_dates.push(date.toISOString().substr(0,10));
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
                                return <th key={col} className={classes.th}>{dates[col - 1]}</th>
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
                                            {CreateContent(col, row)
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