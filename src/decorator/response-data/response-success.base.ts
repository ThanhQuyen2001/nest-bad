export class ResponseSuccess<D> {
    data: {
        data: any,
        pagination: any
    };
    code: number;
    message: string;
    constructor(
        entry: D | D[],
        pagination: any,
        code: number,
        message: string
    ) {
        this.data = {
            data: entry,
            pagination: pagination
        }
        this.code = code
        this.message = message

        return this
    }
}