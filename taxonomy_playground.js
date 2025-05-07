// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

function cycleThrough(d) {
    return Object.fromEntries(
        Object.entries(d).map(([k, v]) => {
            if (k === 'timestamp') return [k, `new Date(Date.parse('${v.toISOString()}'))`];
            if (Array.isArray(v)) {
                return [k, v.map((item) => (typeof item === 'object' ? cycleThrough(item) : item))];
            }
            if (typeof v === 'object' && 'toHexString' in v) return [k, `new ObjectId('${v.toHexString()}')`];
            if (v instanceof Date) return [k, `new Date(Date.parse(${v.toISOString()}))`];
            if (typeof v === 'object' && ['$oid', '$date'].some((toFind) => Object.keys(v).includes(toFind))) {
                if (Object.keys(v).includes('$oid')) {
                    const value = v['$oid'];
                    return [k, `new ObjectId('${value}')`];
                } else {
                    const value = v['$date'];
                    return [k, `new Date(Date.parse('${value}'))`];
                }
            }
            if (typeof v === 'object') {
                return [k, cycleThrough(v)];
            }
            return [k, v];
        })
    );
}

// The current database to use.
use("jitt-data");

const [c, sc, ssc] = 'Men || Swimwear || Swim trunks'.split(' || ');
// Find a document in a collection.
cycleThrough(db.getCollection("mercariTaxonomy").findOne({
    'category.name': c,
    'subCategory.name': sc,
    'subSubCategory.name': ssc
}));
