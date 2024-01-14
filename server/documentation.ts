const docs = import.meta.glob("../docs/*.md", { eager: true });
const meta = import.meta.glob("../docs/*.md", { as: "meta", eager: true });

export function getMeta() {
	return Object.values(meta).map((x) => (x as any).default)
}

export function getDocument(slug: string) {
	const doc = docs[`../docs/${slug}.md`] as { default: unknown };
	return doc.default;
}

export function search(query: string) {
	throw new Error("Not implemented");
	return {}
}
