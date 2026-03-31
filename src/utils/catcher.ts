export function catcher<T, A extends unknown[] = unknown[]>(cb: (...args: A) => Promise<T>, error?: (err: Error) => void ) {
    return async (...args: A): Promise<T | undefined> => {
        try {
            return await cb(...args)
        } catch (e) {
            console.error(e)
            error?.(e as Error)
            return undefined
        }
    }
}