import { format } from "date-fns"

/**
 *
 * @param {Date} date
 * @returns format date to hour and second
 */
export function formatDateToTime(date) {
	if (date == null) return
	return format(date, "hh:mm:ss aa")
}
