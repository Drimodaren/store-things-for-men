export const normalizeData = <T extends { id: number | string }>(array: T[]) => {
    return {
        entities: Object.fromEntries(array.map(item => [item.id, item])),
        ids: array.map(item => item.id)
    };
};
