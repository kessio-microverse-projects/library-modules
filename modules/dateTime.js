import { DateTime } from './luxon.js'; /* eslint-disable */

const dateTime = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default dateTime;