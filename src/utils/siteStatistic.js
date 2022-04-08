import {store} from '../store/index.js';
import {updateClicks} from '../store/reducer/siteStatisticReducer.js';

export const updateStatistic = (fn, event) => {
    store.dispatch(updateClicks({[event ? event.target ? event.target.name : event : 'unnamed click']:1 }));
    return fn;
}

/* HOW TO USE
just add the updateStatistic function to your onClick or onChange function with the first arg being the function you want to invoke and the 2nd arg being the name.
the name param can be the event if the event.target has a name or a string

EXAMPLE: <button name='this is my buttion' onclick={(event)=> updateStatistic(yourFunction() , 'the name you want' --or-- event)}> click me</button>

naming should be maincomponent + _ + this componenet + _ + button action
EXAMPLE: name='overview_productimages_changeimage'

*/