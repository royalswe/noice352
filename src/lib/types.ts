export interface Asset {
	_ref: string;
	_type: string;
}

export interface AuthorImage {
	_type: string;
	alt: string;
	asset: Asset;
}

export interface Slug {
	_type: string;
	current: string;
}

export interface Author {
	image: AuthorImage;
	name: string;
	slug: Slug;
}

export interface Child {
	_key: string;
	_type: string;
	marks: string[];
	text: string;
}

export interface MarkDef {
	_key: string;
	_type: string;
	href: string;
}

export interface Body {
	Index?: string;
	_key: string;
	_type: string;
	children: Child[];
	markDefs: MarkDef[];
	style: string;
}

export interface Category {
	_key: string;
	_ref: string;
	_type: string;
}

export interface Image {
	_type: string;
	asset: Asset;
}

export interface Post {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
	authors: Author[];
	body: Body[];
	categories: Category[];
	image: Image;
	publishedAt: Date;
	slug: Slug;
	title: string;
}

