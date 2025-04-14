export async function getRecordFor<T>(collection: string, id?: string): Promise<T | undefined> {
    if (id == null) return undefined;
    const response = await fetch(
        `http://localhost:3000/api/data/v1/${collection}/${id}`
    );
    console.log(`response: `);
    console.log(response);
    const body = await response.json();
    console.log(`body:`);
    console.log(body);
    return response.status === 404 ? undefined : body;
}
