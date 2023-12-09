export interface Err {
    name?: string;
    message: string;
}

export type Result<T> = {
    error: Err
    result: null
} | { result: T, error: null }

export function Result<T>(result: T) {
    return { result, error: null }
}

export function Err(err: Err) {
    return { result: null, error: err }
}

export function unwrap<U extends Result<unknown>>(val: U): U['result'] {
    if (val.result) {
        return val.result;
    } else {
        const err = new Error(val.error?.message);
        if (val.error?.name) {
            err.name = val.error.name;
        }
        throw err;
    }
}
