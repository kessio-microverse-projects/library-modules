import {DateTime} from './luxon.js';

export const dateTime = () => {
    return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}