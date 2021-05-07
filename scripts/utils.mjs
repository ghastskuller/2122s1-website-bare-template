import { DEFAULTS } from './commons.mjs';

export function makeFromParameter() {
    // ii. The duration
    const { duration } = DEFAULTS;
    // i. The current date and time
    const now = dayjs().utc(); //add .utc() to the back of dayjs()
    // iii. The ability to minus duration from the current date & time
    const from = now.subtract(duration, 'minute');
    // iv. The ability to format the current date & time with the specific format: YYYY-MM-DDTHH:mm:ss
    return [from.format('YYYY-MM-DDTHH:mm:ss'), from, now];
}