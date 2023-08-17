export class ResponseError<D> {
    error: D | D[];
    code: number;
    message: string;
    constructor(
        error: D | D[],
        code: number,
        message: string
    ) {
        this.error = error
        this.code = code
        this.message = message
        return this
    }
}