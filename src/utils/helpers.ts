export default {
  /**
   * A function that will return a random alphanumeric strings as ID.
   *
   * @param {number} length - The value length as id.
   * @type {Function}
   * @returns {any}
   */
  generateRandomId: (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  },

  /**
   * A function that will return a formatted Date/Time.
   *
   * @param {Date} date - The date value.
   * @type {Function}
   * @returns {any} - formatted date/time
   */
  formatDate: (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date); //ex: 02 Jun 2022 at 3:16 PM
  },
};
// const generateRandomId = (length: number) => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// };

/**
 *
 * A function that will return a formatted price
 *
 * @param amount the amount to be formatted
 * @returns  {string} - formatted price
 */
export const formatPrice = (amount: number | string | undefined) => {
  return `₱ ${Number(amount).toFixed(2)}`;
};
