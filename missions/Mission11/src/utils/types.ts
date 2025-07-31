export type QueryParam = {
    studi?: string[],
    durasi?: number[],
    harga?: number[],
    filter?: FilterParam
    search?: string,
}

export type FilterParam = {
    field: string | undefined
    order: 'ASC' | 'DESC'
}