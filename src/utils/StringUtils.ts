export default class StringUtils {
    /**
     * Formats a balance value to a string with two decimal places and Thai number formatting.
     * @param balance - The balance value to format.
     * @returns The formatted balance value as a string.
     */
    static formatBalance(balance: number | string): string {
        const newBalanceFormat = Number(balance).toLocaleString('th-TH', {
            currency: 'THB',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        return newBalanceFormat
    }

    /**
     * Retrieves the image URL from a dynamic URL.
     * If the URL contains 'drive.google.com', it extracts the image ID and returns the thumbnail URL.
     * Otherwise, it returns the original URL.
     *
     * @param url - The dynamic URL.
     * @returns The image URL.
     */
    static getImageUrlFromDynamic(url: string): string {
        if (url.includes('drive.google.com')) {
            const match = url.match(/[?&]id=([^&]+)/)
            return `https://drive.google.com/thumbnail?id=${match![1]}`
        } else {
            return url
        }
    }

    /**
     * Checks if a value is empty.
     * @param value - The value to check.
     * @returns True if the value is empty, false otherwise.
     */
    static isEmpty(value: string | number | null | undefined): boolean {
        if (
            value === null ||
            value === undefined ||
            value === '' ||
            value === 'null'
        ) {
            return true
        }
        return false
    }

    static randomUniqueToken(): string {
        return [...Array(10)]
            .map(() => (~~(Math.random() * 36)).toString(36))
            .join('')
    }
}
