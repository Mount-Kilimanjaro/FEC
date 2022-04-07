import {store} from '../../../store/index.js';
import {updateClicks} from '../../../store/reducer/siteStatisticReducer.js'

export const updateStatistic = (fn, name) => {
    store.dispatch(updateClicks({[name ? name : 'unnamed click']:1 }))
    return fn
}
