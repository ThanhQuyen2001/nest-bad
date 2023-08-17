export class ResponseSuccess<D> {
    data: any;
    code: number;
    message: string;
    constructor(
        data: D | D[],
        code: number,
        message: string
    ) {
        this.data = data
        this.code = code
        this.message = message

        return this
    }
}