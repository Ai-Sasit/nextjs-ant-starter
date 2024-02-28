/**
 * Calculates the sum of a specific property in an array of objects.
 */
export default class MathUtils {
    /**
     * Calculates the sum of a specific property in an array of objects.
     *
     * @param item - The array of objects.
     * @param key - The property key to sum.
     * @returns The sum of the specified property values.
     */
    static sumAll(item: any, key: string) {
        let sum = 0
        item.forEach((value: any) => {
            sum += Number(value[key])
        })
        return sum
    }

    /**
     * Calculates the sum of a specific property in an array of objects based on a condition.
     * @param item - The array of objects.
     * @param key - The property to sum.
     * @param condition - The condition to filter the objects.
     * @param value - The value to compare against the condition.
     * @returns The sum of the specified property.
     */
    static sumAllWithCondition(
        item: any,
        key: string,
        condition: string,
        value: any,
    ) {
        let sum = 0
        item.forEach((item: any) => {
            if (item[condition] === value) {
                sum += Number(item[key])
            }
        })
        return sum
    }

    static isNotZero(value: number | string): boolean {
        return Number(value) !== 0
    }
}
