export class QueryBuilder {
    private query: string;
    private isConcated: boolean;

    constructor(table: string) {
        this.query = `SELECT * FROM ${table}`;
        this.isConcated = false;
    }

    filterEqual(field: string, filter: string): this {
        this.query += this.isConcated ? ` AND ${field} = '${filter}'` : ` WHERE ${field} = '${filter}'`;
        this.isConcated = true;
        return this;
    }

    filterEquals(field: string, filter: string[]): this {
        const inClause = filter.map(v => `'${v}'`).join(', ');
        this.query += this.isConcated
            ? ` AND ${field} IN (${inClause})`
            : ` WHERE ${field} IN (${inClause})`;
        this.isConcated = true;
        return this;
    }

    filterBetween(field: string, from: string, to: string): this {
        this.query += this.isConcated
            ? ` AND ${field} BETWEEN ${from} AND ${to}`
            : ` WHERE ${field} BETWEEN ${from} AND ${to}`;
        this.isConcated = true;
        return this;
    }

    fullTextSearch(field: string, search: string): this {
        this.query += this.isConcated
            ? ` AND ${field} @@ plainto_tsquery('indonesian', '${search}')`
            : ` WHERE ${field} @@ plainto_tsquery('indonesian', '${search}')`;
        this.isConcated = true;
        return this;
    }

    orderBy(field: string, direction: 'ASC' | 'DESC'): this {
        this.query += ` ORDER BY ${field} ${direction}`;
        return this;
    }

    orderByLetter(direction: 'ASC' | 'DESC'): this {
        this.query += ` ORDER BY LOWER(LEFT(judul, 1)) ${direction}`;
        return this;
    }


    getQuery(): string {
        const finalQuery = this.query;
        this.query = "";
        this.isConcated = false;
        return finalQuery;
    }
}