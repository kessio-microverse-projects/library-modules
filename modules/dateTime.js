import { DateTime } from './luxon.js';

export const dateTime = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);