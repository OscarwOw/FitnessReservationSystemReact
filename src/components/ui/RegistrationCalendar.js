import classes from './RegistrationCalendar.module.css';
import addHours from '../Engine/AddHours';
import addDays from '../Engine/AddDays';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function RegistrationCalendar(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [dates, setDates] = useState();
    const [hours, setHours] = useState();

    function getNavigationLink(id) {
        return '/CreateReservation/' + id
    }
    

    function CreateContent(col, row) {
        if (col === 0) {
            return hours[row] + " - " + hours[row + 1];
        }
        else {         
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].date.substr(8, 2) === dates[col - 1].substr(8, 2) && props.items[i].date.substr(11, 2) === hours[row].substr(0, 2)) {
                    return (
                        <Link to={getNavigationLink(props.items[i].id)}>
                            <div className={classes.colContent} >
                                <p>{props.items[i].name}</p>
                                <p>Couch: {props.items[i].couch}</p>
                                <p>Pocet prihlasenych: {props.items[i].registredCount}/{props.items[i].capacity}</p>
                            </div>
                        </Link>);
                
                }
            }           
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