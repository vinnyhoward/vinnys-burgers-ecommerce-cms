export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/**
	 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
	 * representation of dates and times using the Gregorian calendar.
	 */
	Date: any;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any;
};

export type Beer = Node & {
	__typename?: 'Beer';
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	price?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	rating?: Maybe<BeerRating>;
	image?: Maybe<Scalars['String']>;
};

export type BeerConnection = {
	__typename?: 'BeerConnection';
	totalCount: Scalars['Int'];
	edges: Array<BeerEdge>;
	nodes: Array<Beer>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<BeerGroupConnection>;
};

export type BeerConnectionDistinctArgs = {
	field: BeerFieldsEnum;
};

export type BeerConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: BeerFieldsEnum;
};

export type BeerEdge = {
	__typename?: 'BeerEdge';
	next?: Maybe<Beer>;
	node: Beer;
	previous?: Maybe<Beer>;
};

export type BeerFieldsEnum =
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type'
	| 'price'
	| 'name'
	| 'rating___average'
	| 'rating___reviews'
	| 'image';

export type BeerFilterInput = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	price?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	rating?: Maybe<BeerRatingFilterInput>;
	image?: Maybe<StringQueryOperatorInput>;
};

export type BeerGroupConnection = {
	__typename?: 'BeerGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<BeerEdge>;
	nodes: Array<Beer>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type BeerRating = {
	__typename?: 'BeerRating';
	average?: Maybe<Scalars['Float']>;
	reviews?: Maybe<Scalars['Int']>;
};

export type BeerRatingFilterInput = {
	average?: Maybe<FloatQueryOperatorInput>;
	reviews?: Maybe<IntQueryOperatorInput>;
};

export type BeerSortInput = {
	fields?: Maybe<Array<Maybe<BeerFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars['Boolean']>;
	ne?: Maybe<Scalars['Boolean']>;
	in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
	nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars['Date']>;
	ne?: Maybe<Scalars['Date']>;
	gt?: Maybe<Scalars['Date']>;
	gte?: Maybe<Scalars['Date']>;
	lt?: Maybe<Scalars['Date']>;
	lte?: Maybe<Scalars['Date']>;
	in?: Maybe<Array<Maybe<Scalars['Date']>>>;
	nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
	__typename?: 'Directory';
	sourceInstanceName: Scalars['String'];
	absolutePath: Scalars['String'];
	relativePath: Scalars['String'];
	extension: Scalars['String'];
	size: Scalars['Int'];
	prettySize: Scalars['String'];
	modifiedTime: Scalars['Date'];
	accessTime: Scalars['Date'];
	changeTime: Scalars['Date'];
	birthTime: Scalars['Date'];
	root: Scalars['String'];
	dir: Scalars['String'];
	base: Scalars['String'];
	ext: Scalars['String'];
	name: Scalars['String'];
	relativeDirectory: Scalars['String'];
	dev: Scalars['Int'];
	mode: Scalars['Int'];
	nlink: Scalars['Int'];
	uid: Scalars['Int'];
	gid: Scalars['Int'];
	rdev: Scalars['Int'];
	ino: Scalars['Float'];
	atimeMs: Scalars['Float'];
	mtimeMs: Scalars['Float'];
	ctimeMs: Scalars['Float'];
	atime: Scalars['Date'];
	mtime: Scalars['Date'];
	ctime: Scalars['Date'];
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>;
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>;
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
	__typename?: 'DirectoryConnection';
	totalCount: Scalars['Int'];
	edges: Array<DirectoryEdge>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
	__typename?: 'DirectoryEdge';
	next?: Maybe<Directory>;
	node: Directory;
	previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
	| 'sourceInstanceName'
	| 'absolutePath'
	| 'relativePath'
	| 'extension'
	| 'size'
	| 'prettySize'
	| 'modifiedTime'
	| 'accessTime'
	| 'changeTime'
	| 'birthTime'
	| 'root'
	| 'dir'
	| 'base'
	| 'ext'
	| 'name'
	| 'relativeDirectory'
	| 'dev'
	| 'mode'
	| 'nlink'
	| 'uid'
	| 'gid'
	| 'rdev'
	| 'ino'
	| 'atimeMs'
	| 'mtimeMs'
	| 'ctimeMs'
	| 'atime'
	| 'mtime'
	| 'ctime'
	| 'birthtime'
	| 'birthtimeMs'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type DirectoryFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>;
	absolutePath?: Maybe<StringQueryOperatorInput>;
	relativePath?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<IntQueryOperatorInput>;
	prettySize?: Maybe<StringQueryOperatorInput>;
	modifiedTime?: Maybe<DateQueryOperatorInput>;
	accessTime?: Maybe<DateQueryOperatorInput>;
	changeTime?: Maybe<DateQueryOperatorInput>;
	birthTime?: Maybe<DateQueryOperatorInput>;
	root?: Maybe<StringQueryOperatorInput>;
	dir?: Maybe<StringQueryOperatorInput>;
	base?: Maybe<StringQueryOperatorInput>;
	ext?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	relativeDirectory?: Maybe<StringQueryOperatorInput>;
	dev?: Maybe<IntQueryOperatorInput>;
	mode?: Maybe<IntQueryOperatorInput>;
	nlink?: Maybe<IntQueryOperatorInput>;
	uid?: Maybe<IntQueryOperatorInput>;
	gid?: Maybe<IntQueryOperatorInput>;
	rdev?: Maybe<IntQueryOperatorInput>;
	ino?: Maybe<FloatQueryOperatorInput>;
	atimeMs?: Maybe<FloatQueryOperatorInput>;
	mtimeMs?: Maybe<FloatQueryOperatorInput>;
	ctimeMs?: Maybe<FloatQueryOperatorInput>;
	atime?: Maybe<DateQueryOperatorInput>;
	mtime?: Maybe<DateQueryOperatorInput>;
	ctime?: Maybe<DateQueryOperatorInput>;
	birthtime?: Maybe<DateQueryOperatorInput>;
	birthtimeMs?: Maybe<FloatQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
	__typename?: 'DirectoryGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<DirectoryEdge>;
	nodes: Array<Directory>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
	__typename?: 'File';
	sourceInstanceName: Scalars['String'];
	absolutePath: Scalars['String'];
	relativePath: Scalars['String'];
	extension: Scalars['String'];
	size: Scalars['Int'];
	prettySize: Scalars['String'];
	modifiedTime: Scalars['Date'];
	accessTime: Scalars['Date'];
	changeTime: Scalars['Date'];
	birthTime: Scalars['Date'];
	root: Scalars['String'];
	dir: Scalars['String'];
	base: Scalars['String'];
	ext: Scalars['String'];
	name: Scalars['String'];
	relativeDirectory: Scalars['String'];
	dev: Scalars['Int'];
	mode: Scalars['Int'];
	nlink: Scalars['Int'];
	uid: Scalars['Int'];
	gid: Scalars['Int'];
	rdev: Scalars['Int'];
	ino: Scalars['Float'];
	atimeMs: Scalars['Float'];
	mtimeMs: Scalars['Float'];
	ctimeMs: Scalars['Float'];
	atime: Scalars['Date'];
	mtime: Scalars['Date'];
	ctime: Scalars['Date'];
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>;
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>;
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type FileModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
	__typename?: 'FileConnection';
	totalCount: Scalars['Int'];
	edges: Array<FileEdge>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: FileFieldsEnum;
};

export type FileEdge = {
	__typename?: 'FileEdge';
	next?: Maybe<File>;
	node: File;
	previous?: Maybe<File>;
};

export type FileFieldsEnum =
	| 'sourceInstanceName'
	| 'absolutePath'
	| 'relativePath'
	| 'extension'
	| 'size'
	| 'prettySize'
	| 'modifiedTime'
	| 'accessTime'
	| 'changeTime'
	| 'birthTime'
	| 'root'
	| 'dir'
	| 'base'
	| 'ext'
	| 'name'
	| 'relativeDirectory'
	| 'dev'
	| 'mode'
	| 'nlink'
	| 'uid'
	| 'gid'
	| 'rdev'
	| 'ino'
	| 'atimeMs'
	| 'mtimeMs'
	| 'ctimeMs'
	| 'atime'
	| 'mtime'
	| 'ctime'
	| 'birthtime'
	| 'birthtimeMs'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type FileFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>;
	absolutePath?: Maybe<StringQueryOperatorInput>;
	relativePath?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<IntQueryOperatorInput>;
	prettySize?: Maybe<StringQueryOperatorInput>;
	modifiedTime?: Maybe<DateQueryOperatorInput>;
	accessTime?: Maybe<DateQueryOperatorInput>;
	changeTime?: Maybe<DateQueryOperatorInput>;
	birthTime?: Maybe<DateQueryOperatorInput>;
	root?: Maybe<StringQueryOperatorInput>;
	dir?: Maybe<StringQueryOperatorInput>;
	base?: Maybe<StringQueryOperatorInput>;
	ext?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	relativeDirectory?: Maybe<StringQueryOperatorInput>;
	dev?: Maybe<IntQueryOperatorInput>;
	mode?: Maybe<IntQueryOperatorInput>;
	nlink?: Maybe<IntQueryOperatorInput>;
	uid?: Maybe<IntQueryOperatorInput>;
	gid?: Maybe<IntQueryOperatorInput>;
	rdev?: Maybe<IntQueryOperatorInput>;
	ino?: Maybe<FloatQueryOperatorInput>;
	atimeMs?: Maybe<FloatQueryOperatorInput>;
	mtimeMs?: Maybe<FloatQueryOperatorInput>;
	ctimeMs?: Maybe<FloatQueryOperatorInput>;
	atime?: Maybe<DateQueryOperatorInput>;
	mtime?: Maybe<DateQueryOperatorInput>;
	ctime?: Maybe<DateQueryOperatorInput>;
	birthtime?: Maybe<DateQueryOperatorInput>;
	birthtimeMs?: Maybe<FloatQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
	__typename?: 'FileGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<FileEdge>;
	nodes: Array<File>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars['Float']>;
	ne?: Maybe<Scalars['Float']>;
	gt?: Maybe<Scalars['Float']>;
	gte?: Maybe<Scalars['Float']>;
	lt?: Maybe<Scalars['Float']>;
	lte?: Maybe<Scalars['Float']>;
	in?: Maybe<Array<Maybe<Scalars['Float']>>>;
	nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
	__typename?: 'Internal';
	content?: Maybe<Scalars['String']>;
	contentDigest: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
	ignoreType?: Maybe<Scalars['Boolean']>;
	mediaType?: Maybe<Scalars['String']>;
	owner: Scalars['String'];
	type: Scalars['String'];
};

export type InternalFilterInput = {
	content?: Maybe<StringQueryOperatorInput>;
	contentDigest?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	fieldOwners?: Maybe<StringQueryOperatorInput>;
	ignoreType?: Maybe<BooleanQueryOperatorInput>;
	mediaType?: Maybe<StringQueryOperatorInput>;
	owner?: Maybe<StringQueryOperatorInput>;
	type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars['Int']>;
	ne?: Maybe<Scalars['Int']>;
	gt?: Maybe<Scalars['Int']>;
	gte?: Maybe<Scalars['Int']>;
	lt?: Maybe<Scalars['Int']>;
	lte?: Maybe<Scalars['Int']>;
	in?: Maybe<Array<Maybe<Scalars['Int']>>>;
	nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars['JSON']>;
	ne?: Maybe<Scalars['JSON']>;
	in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
	nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
	regex?: Maybe<Scalars['JSON']>;
	glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type NodeFilterInput = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
	__typename?: 'PageInfo';
	currentPage: Scalars['Int'];
	hasPreviousPage: Scalars['Boolean'];
	hasNextPage: Scalars['Boolean'];
	itemCount: Scalars['Int'];
	pageCount: Scalars['Int'];
	perPage?: Maybe<Scalars['Int']>;
	totalCount: Scalars['Int'];
};

export type Query = {
	__typename?: 'Query';
	file?: Maybe<File>;
	allFile: FileConnection;
	directory?: Maybe<Directory>;
	allDirectory: DirectoryConnection;
	site?: Maybe<Site>;
	allSite: SiteConnection;
	sitePage?: Maybe<SitePage>;
	allSitePage: SitePageConnection;
	sanityPerson?: Maybe<SanityPerson>;
	allSanityPerson: SanityPersonConnection;
	sanityFileAsset?: Maybe<SanityFileAsset>;
	allSanityFileAsset: SanityFileAssetConnection;
	sanityImageAsset?: Maybe<SanityImageAsset>;
	allSanityImageAsset: SanityImageAssetConnection;
	sanityStoreSettings?: Maybe<SanityStoreSettings>;
	allSanityStoreSettings: SanityStoreSettingsConnection;
	sanityTopping?: Maybe<SanityTopping>;
	allSanityTopping: SanityToppingConnection;
	sanityVeganBurger?: Maybe<SanityVeganBurger>;
	allSanityVeganBurger: SanityVeganBurgerConnection;
	beer?: Maybe<Beer>;
	allBeer: BeerConnection;
	siteBuildMetadata?: Maybe<SiteBuildMetadata>;
	allSiteBuildMetadata: SiteBuildMetadataConnection;
	sitePlugin?: Maybe<SitePlugin>;
	allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>;
	absolutePath?: Maybe<StringQueryOperatorInput>;
	relativePath?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<IntQueryOperatorInput>;
	prettySize?: Maybe<StringQueryOperatorInput>;
	modifiedTime?: Maybe<DateQueryOperatorInput>;
	accessTime?: Maybe<DateQueryOperatorInput>;
	changeTime?: Maybe<DateQueryOperatorInput>;
	birthTime?: Maybe<DateQueryOperatorInput>;
	root?: Maybe<StringQueryOperatorInput>;
	dir?: Maybe<StringQueryOperatorInput>;
	base?: Maybe<StringQueryOperatorInput>;
	ext?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	relativeDirectory?: Maybe<StringQueryOperatorInput>;
	dev?: Maybe<IntQueryOperatorInput>;
	mode?: Maybe<IntQueryOperatorInput>;
	nlink?: Maybe<IntQueryOperatorInput>;
	uid?: Maybe<IntQueryOperatorInput>;
	gid?: Maybe<IntQueryOperatorInput>;
	rdev?: Maybe<IntQueryOperatorInput>;
	ino?: Maybe<FloatQueryOperatorInput>;
	atimeMs?: Maybe<FloatQueryOperatorInput>;
	mtimeMs?: Maybe<FloatQueryOperatorInput>;
	ctimeMs?: Maybe<FloatQueryOperatorInput>;
	atime?: Maybe<DateQueryOperatorInput>;
	mtime?: Maybe<DateQueryOperatorInput>;
	ctime?: Maybe<DateQueryOperatorInput>;
	birthtime?: Maybe<DateQueryOperatorInput>;
	birthtimeMs?: Maybe<FloatQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>;
	sort?: Maybe<FileSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>;
	absolutePath?: Maybe<StringQueryOperatorInput>;
	relativePath?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<IntQueryOperatorInput>;
	prettySize?: Maybe<StringQueryOperatorInput>;
	modifiedTime?: Maybe<DateQueryOperatorInput>;
	accessTime?: Maybe<DateQueryOperatorInput>;
	changeTime?: Maybe<DateQueryOperatorInput>;
	birthTime?: Maybe<DateQueryOperatorInput>;
	root?: Maybe<StringQueryOperatorInput>;
	dir?: Maybe<StringQueryOperatorInput>;
	base?: Maybe<StringQueryOperatorInput>;
	ext?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	relativeDirectory?: Maybe<StringQueryOperatorInput>;
	dev?: Maybe<IntQueryOperatorInput>;
	mode?: Maybe<IntQueryOperatorInput>;
	nlink?: Maybe<IntQueryOperatorInput>;
	uid?: Maybe<IntQueryOperatorInput>;
	gid?: Maybe<IntQueryOperatorInput>;
	rdev?: Maybe<IntQueryOperatorInput>;
	ino?: Maybe<FloatQueryOperatorInput>;
	atimeMs?: Maybe<FloatQueryOperatorInput>;
	mtimeMs?: Maybe<FloatQueryOperatorInput>;
	ctimeMs?: Maybe<FloatQueryOperatorInput>;
	atime?: Maybe<DateQueryOperatorInput>;
	mtime?: Maybe<DateQueryOperatorInput>;
	ctime?: Maybe<DateQueryOperatorInput>;
	birthtime?: Maybe<DateQueryOperatorInput>;
	birthtimeMs?: Maybe<FloatQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>;
	sort?: Maybe<DirectorySortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>;
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
	port?: Maybe<IntQueryOperatorInput>;
	host?: Maybe<StringQueryOperatorInput>;
	polyfill?: Maybe<BooleanQueryOperatorInput>;
	pathPrefix?: Maybe<StringQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>;
	sort?: Maybe<SiteSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
	path?: Maybe<StringQueryOperatorInput>;
	component?: Maybe<StringQueryOperatorInput>;
	internalComponentName?: Maybe<StringQueryOperatorInput>;
	componentChunkName?: Maybe<StringQueryOperatorInput>;
	matchPath?: Maybe<StringQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
	context?: Maybe<SitePageContextFilterInput>;
	pluginCreator?: Maybe<SitePluginFilterInput>;
	pluginCreatorId?: Maybe<StringQueryOperatorInput>;
	componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>;
	sort?: Maybe<SitePageSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityPersonArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	slug?: Maybe<SanitySlugFilterInput>;
	description?: Maybe<StringQueryOperatorInput>;
	image?: Maybe<SanityImageFilterInput>;
	_rawSlug?: Maybe<JsonQueryOperatorInput>;
	_rawImage?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityPersonArgs = {
	filter?: Maybe<SanityPersonFilterInput>;
	sort?: Maybe<SanityPersonSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityFileAssetArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	originalFilename?: Maybe<StringQueryOperatorInput>;
	label?: Maybe<StringQueryOperatorInput>;
	title?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	sha1hash?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	mimeType?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<FloatQueryOperatorInput>;
	assetId?: Maybe<StringQueryOperatorInput>;
	path?: Maybe<StringQueryOperatorInput>;
	url?: Maybe<StringQueryOperatorInput>;
	source?: Maybe<SanityAssetSourceDataFilterInput>;
	_rawSource?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityFileAssetArgs = {
	filter?: Maybe<SanityFileAssetFilterInput>;
	sort?: Maybe<SanityFileAssetSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityImageAssetArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	originalFilename?: Maybe<StringQueryOperatorInput>;
	label?: Maybe<StringQueryOperatorInput>;
	title?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	sha1hash?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	mimeType?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<FloatQueryOperatorInput>;
	assetId?: Maybe<StringQueryOperatorInput>;
	path?: Maybe<StringQueryOperatorInput>;
	url?: Maybe<StringQueryOperatorInput>;
	metadata?: Maybe<SanityImageMetadataFilterInput>;
	source?: Maybe<SanityAssetSourceDataFilterInput>;
	_rawMetadata?: Maybe<JsonQueryOperatorInput>;
	_rawSource?: Maybe<JsonQueryOperatorInput>;
	fixed?: Maybe<SanityImageFixedFilterInput>;
	fluid?: Maybe<SanityImageFluidFilterInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityImageAssetArgs = {
	filter?: Maybe<SanityImageAssetFilterInput>;
	sort?: Maybe<SanityImageAssetSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityStoreSettingsArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	theChefs?: Maybe<SanityPersonFilterListInput>;
	freshBurgers?: Maybe<SanityVeganBurgerFilterListInput>;
	_rawTheChefs?: Maybe<JsonQueryOperatorInput>;
	_rawFreshBurgers?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityStoreSettingsArgs = {
	filter?: Maybe<SanityStoreSettingsFilterInput>;
	sort?: Maybe<SanityStoreSettingsSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityToppingArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	glutenFree?: Maybe<BooleanQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityToppingArgs = {
	filter?: Maybe<SanityToppingFilterInput>;
	sort?: Maybe<SanityToppingSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySanityVeganBurgerArgs = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	slug?: Maybe<SanitySlugFilterInput>;
	image?: Maybe<SanityImageFilterInput>;
	price?: Maybe<FloatQueryOperatorInput>;
	toppings?: Maybe<SanityToppingFilterListInput>;
	_rawSlug?: Maybe<JsonQueryOperatorInput>;
	_rawImage?: Maybe<JsonQueryOperatorInput>;
	_rawToppings?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSanityVeganBurgerArgs = {
	filter?: Maybe<SanityVeganBurgerFilterInput>;
	sort?: Maybe<SanityVeganBurgerSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QueryBeerArgs = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	price?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	rating?: Maybe<BeerRatingFilterInput>;
	image?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllBeerArgs = {
	filter?: Maybe<BeerFilterInput>;
	sort?: Maybe<BeerSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>;
	sort?: Maybe<SiteBuildMetadataSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	resolve?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
	nodeAPIs?: Maybe<StringQueryOperatorInput>;
	browserAPIs?: Maybe<StringQueryOperatorInput>;
	ssrAPIs?: Maybe<StringQueryOperatorInput>;
	pluginFilepath?: Maybe<StringQueryOperatorInput>;
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>;
	sort?: Maybe<SitePluginSortInput>;
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
};

export type SanityAssetSourceData = {
	__typename?: 'SanityAssetSourceData';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
	__typename?: 'SanityBlock';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	children?: Maybe<Array<Maybe<SanitySpan>>>;
	style?: Maybe<Scalars['String']>;
	list?: Maybe<Scalars['String']>;
	_rawChildren?: Maybe<Scalars['JSON']>;
};

export type SanityBlock_RawChildrenArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
	_id?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	_createdAt?: Maybe<Scalars['Date']>;
	_updatedAt?: Maybe<Scalars['Date']>;
	_rev?: Maybe<Scalars['String']>;
};

export type SanityFile = {
	__typename?: 'SanityFile';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityFileAsset>;
	_rawAsset?: Maybe<Scalars['JSON']>;
};

export type SanityFile_RawAssetArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = SanityDocument &
	Node & {
		__typename?: 'SanityFileAsset';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		originalFilename?: Maybe<Scalars['String']>;
		label?: Maybe<Scalars['String']>;
		title?: Maybe<Scalars['String']>;
		description?: Maybe<Scalars['String']>;
		sha1hash?: Maybe<Scalars['String']>;
		extension?: Maybe<Scalars['String']>;
		mimeType?: Maybe<Scalars['String']>;
		size?: Maybe<Scalars['Float']>;
		assetId?: Maybe<Scalars['String']>;
		path?: Maybe<Scalars['String']>;
		url?: Maybe<Scalars['String']>;
		source?: Maybe<SanityAssetSourceData>;
		_rawSource?: Maybe<Scalars['JSON']>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityFileAsset_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityFileAsset_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityFileAsset_RawSourceArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAssetConnection = {
	__typename?: 'SanityFileAssetConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityFileAssetEdge>;
	nodes: Array<SanityFileAsset>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityFileAssetGroupConnection>;
};

export type SanityFileAssetConnectionDistinctArgs = {
	field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
	__typename?: 'SanityFileAssetEdge';
	next?: Maybe<SanityFileAsset>;
	node: SanityFileAsset;
	previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'originalFilename'
	| 'label'
	| 'title'
	| 'description'
	| 'sha1hash'
	| 'extension'
	| 'mimeType'
	| 'size'
	| 'assetId'
	| 'path'
	| 'url'
	| 'source____key'
	| 'source____type'
	| 'source___name'
	| 'source___id'
	| 'source___url'
	| '_rawSource'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityFileAssetFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	originalFilename?: Maybe<StringQueryOperatorInput>;
	label?: Maybe<StringQueryOperatorInput>;
	title?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	sha1hash?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	mimeType?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<FloatQueryOperatorInput>;
	assetId?: Maybe<StringQueryOperatorInput>;
	path?: Maybe<StringQueryOperatorInput>;
	url?: Maybe<StringQueryOperatorInput>;
	source?: Maybe<SanityAssetSourceDataFilterInput>;
	_rawSource?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
	__typename?: 'SanityFileAssetGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityFileAssetEdge>;
	nodes: Array<SanityFileAsset>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFileAssetSortInput = {
	fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
	__typename?: 'SanityGeopoint';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	lat?: Maybe<Scalars['Float']>;
	lng?: Maybe<Scalars['Float']>;
	alt?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	lat?: Maybe<FloatQueryOperatorInput>;
	lng?: Maybe<FloatQueryOperatorInput>;
	alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImage = {
	__typename?: 'SanityImage';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityImageAsset>;
	hotspot?: Maybe<SanityImageHotspot>;
	crop?: Maybe<SanityImageCrop>;
	_rawAsset?: Maybe<Scalars['JSON']>;
	_rawHotspot?: Maybe<Scalars['JSON']>;
	_rawCrop?: Maybe<Scalars['JSON']>;
};

export type SanityImage_RawAssetArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawHotspotArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawCropArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument &
	Node & {
		__typename?: 'SanityImageAsset';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		originalFilename?: Maybe<Scalars['String']>;
		label?: Maybe<Scalars['String']>;
		title?: Maybe<Scalars['String']>;
		description?: Maybe<Scalars['String']>;
		sha1hash?: Maybe<Scalars['String']>;
		extension?: Maybe<Scalars['String']>;
		mimeType?: Maybe<Scalars['String']>;
		size?: Maybe<Scalars['Float']>;
		assetId?: Maybe<Scalars['String']>;
		path?: Maybe<Scalars['String']>;
		url?: Maybe<Scalars['String']>;
		metadata?: Maybe<SanityImageMetadata>;
		source?: Maybe<SanityAssetSourceData>;
		_rawMetadata?: Maybe<Scalars['JSON']>;
		_rawSource?: Maybe<Scalars['JSON']>;
		fixed?: Maybe<SanityImageFixed>;
		fluid?: Maybe<SanityImageFluid>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityImageAsset_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityImageAsset_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityImageAsset_RawMetadataArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset_RawSourceArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAssetFixedArgs = {
	width?: Maybe<Scalars['Int']>;
	height?: Maybe<Scalars['Int']>;
	toFormat?: Maybe<SanityImageFormat>;
};

export type SanityImageAssetFluidArgs = {
	maxWidth?: Maybe<Scalars['Int']>;
	maxHeight?: Maybe<Scalars['Int']>;
	sizes?: Maybe<Scalars['String']>;
	toFormat?: Maybe<SanityImageFormat>;
};

export type SanityImageAssetConnection = {
	__typename?: 'SanityImageAssetConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityImageAssetEdge>;
	nodes: Array<SanityImageAsset>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityImageAssetGroupConnection>;
};

export type SanityImageAssetConnectionDistinctArgs = {
	field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
	__typename?: 'SanityImageAssetEdge';
	next?: Maybe<SanityImageAsset>;
	node: SanityImageAsset;
	previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'originalFilename'
	| 'label'
	| 'title'
	| 'description'
	| 'sha1hash'
	| 'extension'
	| 'mimeType'
	| 'size'
	| 'assetId'
	| 'path'
	| 'url'
	| 'metadata____key'
	| 'metadata____type'
	| 'metadata___location____key'
	| 'metadata___location____type'
	| 'metadata___location___lat'
	| 'metadata___location___lng'
	| 'metadata___location___alt'
	| 'metadata___dimensions____key'
	| 'metadata___dimensions____type'
	| 'metadata___dimensions___height'
	| 'metadata___dimensions___width'
	| 'metadata___dimensions___aspectRatio'
	| 'metadata___palette____key'
	| 'metadata___palette____type'
	| 'metadata___palette___darkMuted____key'
	| 'metadata___palette___darkMuted____type'
	| 'metadata___palette___darkMuted___background'
	| 'metadata___palette___darkMuted___foreground'
	| 'metadata___palette___darkMuted___population'
	| 'metadata___palette___darkMuted___title'
	| 'metadata___palette___lightVibrant____key'
	| 'metadata___palette___lightVibrant____type'
	| 'metadata___palette___lightVibrant___background'
	| 'metadata___palette___lightVibrant___foreground'
	| 'metadata___palette___lightVibrant___population'
	| 'metadata___palette___lightVibrant___title'
	| 'metadata___palette___darkVibrant____key'
	| 'metadata___palette___darkVibrant____type'
	| 'metadata___palette___darkVibrant___background'
	| 'metadata___palette___darkVibrant___foreground'
	| 'metadata___palette___darkVibrant___population'
	| 'metadata___palette___darkVibrant___title'
	| 'metadata___palette___vibrant____key'
	| 'metadata___palette___vibrant____type'
	| 'metadata___palette___vibrant___background'
	| 'metadata___palette___vibrant___foreground'
	| 'metadata___palette___vibrant___population'
	| 'metadata___palette___vibrant___title'
	| 'metadata___palette___dominant____key'
	| 'metadata___palette___dominant____type'
	| 'metadata___palette___dominant___background'
	| 'metadata___palette___dominant___foreground'
	| 'metadata___palette___dominant___population'
	| 'metadata___palette___dominant___title'
	| 'metadata___palette___lightMuted____key'
	| 'metadata___palette___lightMuted____type'
	| 'metadata___palette___lightMuted___background'
	| 'metadata___palette___lightMuted___foreground'
	| 'metadata___palette___lightMuted___population'
	| 'metadata___palette___lightMuted___title'
	| 'metadata___palette___muted____key'
	| 'metadata___palette___muted____type'
	| 'metadata___palette___muted___background'
	| 'metadata___palette___muted___foreground'
	| 'metadata___palette___muted___population'
	| 'metadata___palette___muted___title'
	| 'metadata___palette____rawDarkMuted'
	| 'metadata___palette____rawLightVibrant'
	| 'metadata___palette____rawDarkVibrant'
	| 'metadata___palette____rawVibrant'
	| 'metadata___palette____rawDominant'
	| 'metadata___palette____rawLightMuted'
	| 'metadata___palette____rawMuted'
	| 'metadata___lqip'
	| 'metadata___hasAlpha'
	| 'metadata___isOpaque'
	| 'metadata____rawLocation'
	| 'metadata____rawDimensions'
	| 'metadata____rawPalette'
	| 'source____key'
	| 'source____type'
	| 'source___name'
	| 'source___id'
	| 'source___url'
	| '_rawMetadata'
	| '_rawSource'
	| 'fixed___width'
	| 'fixed___height'
	| 'fixed___src'
	| 'fixed___srcSet'
	| 'fixed___base64'
	| 'fixed___srcWebp'
	| 'fixed___srcSetWebp'
	| 'fluid___aspectRatio'
	| 'fluid___src'
	| 'fluid___srcSet'
	| 'fluid___sizes'
	| 'fluid___base64'
	| 'fluid___srcWebp'
	| 'fluid___srcSetWebp'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityImageAssetFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	originalFilename?: Maybe<StringQueryOperatorInput>;
	label?: Maybe<StringQueryOperatorInput>;
	title?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	sha1hash?: Maybe<StringQueryOperatorInput>;
	extension?: Maybe<StringQueryOperatorInput>;
	mimeType?: Maybe<StringQueryOperatorInput>;
	size?: Maybe<FloatQueryOperatorInput>;
	assetId?: Maybe<StringQueryOperatorInput>;
	path?: Maybe<StringQueryOperatorInput>;
	url?: Maybe<StringQueryOperatorInput>;
	metadata?: Maybe<SanityImageMetadataFilterInput>;
	source?: Maybe<SanityAssetSourceDataFilterInput>;
	_rawMetadata?: Maybe<JsonQueryOperatorInput>;
	_rawSource?: Maybe<JsonQueryOperatorInput>;
	fixed?: Maybe<SanityImageFixedFilterInput>;
	fluid?: Maybe<SanityImageFluidFilterInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
	__typename?: 'SanityImageAssetGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityImageAssetEdge>;
	nodes: Array<SanityImageAsset>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityImageAssetSortInput = {
	fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
	__typename?: 'SanityImageCrop';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	top?: Maybe<Scalars['Float']>;
	bottom?: Maybe<Scalars['Float']>;
	left?: Maybe<Scalars['Float']>;
	right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	top?: Maybe<FloatQueryOperatorInput>;
	bottom?: Maybe<FloatQueryOperatorInput>;
	left?: Maybe<FloatQueryOperatorInput>;
	right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
	__typename?: 'SanityImageDimensions';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
	aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	height?: Maybe<FloatQueryOperatorInput>;
	width?: Maybe<FloatQueryOperatorInput>;
	aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	asset?: Maybe<SanityImageAssetFilterInput>;
	hotspot?: Maybe<SanityImageHotspotFilterInput>;
	crop?: Maybe<SanityImageCropFilterInput>;
	_rawAsset?: Maybe<JsonQueryOperatorInput>;
	_rawHotspot?: Maybe<JsonQueryOperatorInput>;
	_rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageFixed = {
	__typename?: 'SanityImageFixed';
	width: Scalars['Float'];
	height: Scalars['Float'];
	src: Scalars['String'];
	srcSet: Scalars['String'];
	base64?: Maybe<Scalars['String']>;
	srcWebp?: Maybe<Scalars['String']>;
	srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFixedFilterInput = {
	width?: Maybe<FloatQueryOperatorInput>;
	height?: Maybe<FloatQueryOperatorInput>;
	src?: Maybe<StringQueryOperatorInput>;
	srcSet?: Maybe<StringQueryOperatorInput>;
	base64?: Maybe<StringQueryOperatorInput>;
	srcWebp?: Maybe<StringQueryOperatorInput>;
	srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFluid = {
	__typename?: 'SanityImageFluid';
	aspectRatio: Scalars['Float'];
	src: Scalars['String'];
	srcSet: Scalars['String'];
	sizes: Scalars['String'];
	base64?: Maybe<Scalars['String']>;
	srcWebp?: Maybe<Scalars['String']>;
	srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFluidFilterInput = {
	aspectRatio?: Maybe<FloatQueryOperatorInput>;
	src?: Maybe<StringQueryOperatorInput>;
	srcSet?: Maybe<StringQueryOperatorInput>;
	sizes?: Maybe<StringQueryOperatorInput>;
	base64?: Maybe<StringQueryOperatorInput>;
	srcWebp?: Maybe<StringQueryOperatorInput>;
	srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP';

export type SanityImageHotspot = {
	__typename?: 'SanityImageHotspot';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	x?: Maybe<Scalars['Float']>;
	y?: Maybe<Scalars['Float']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	x?: Maybe<FloatQueryOperatorInput>;
	y?: Maybe<FloatQueryOperatorInput>;
	height?: Maybe<FloatQueryOperatorInput>;
	width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
	__typename?: 'SanityImageMetadata';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	location?: Maybe<SanityGeopoint>;
	dimensions?: Maybe<SanityImageDimensions>;
	palette?: Maybe<SanityImagePalette>;
	lqip?: Maybe<Scalars['String']>;
	hasAlpha?: Maybe<Scalars['Boolean']>;
	isOpaque?: Maybe<Scalars['Boolean']>;
	_rawLocation?: Maybe<Scalars['JSON']>;
	_rawDimensions?: Maybe<Scalars['JSON']>;
	_rawPalette?: Maybe<Scalars['JSON']>;
};

export type SanityImageMetadata_RawLocationArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawDimensionsArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawPaletteArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	location?: Maybe<SanityGeopointFilterInput>;
	dimensions?: Maybe<SanityImageDimensionsFilterInput>;
	palette?: Maybe<SanityImagePaletteFilterInput>;
	lqip?: Maybe<StringQueryOperatorInput>;
	hasAlpha?: Maybe<BooleanQueryOperatorInput>;
	isOpaque?: Maybe<BooleanQueryOperatorInput>;
	_rawLocation?: Maybe<JsonQueryOperatorInput>;
	_rawDimensions?: Maybe<JsonQueryOperatorInput>;
	_rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePalette = {
	__typename?: 'SanityImagePalette';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	darkMuted?: Maybe<SanityImagePaletteSwatch>;
	lightVibrant?: Maybe<SanityImagePaletteSwatch>;
	darkVibrant?: Maybe<SanityImagePaletteSwatch>;
	vibrant?: Maybe<SanityImagePaletteSwatch>;
	dominant?: Maybe<SanityImagePaletteSwatch>;
	lightMuted?: Maybe<SanityImagePaletteSwatch>;
	muted?: Maybe<SanityImagePaletteSwatch>;
	_rawDarkMuted?: Maybe<Scalars['JSON']>;
	_rawLightVibrant?: Maybe<Scalars['JSON']>;
	_rawDarkVibrant?: Maybe<Scalars['JSON']>;
	_rawVibrant?: Maybe<Scalars['JSON']>;
	_rawDominant?: Maybe<Scalars['JSON']>;
	_rawLightMuted?: Maybe<Scalars['JSON']>;
	_rawMuted?: Maybe<Scalars['JSON']>;
};

export type SanityImagePalette_RawDarkMutedArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightVibrantArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDarkVibrantArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawVibrantArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDominantArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightMutedArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawMutedArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
	lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
	darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
	vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
	dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
	lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
	muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
	_rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
	_rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
	_rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
	_rawVibrant?: Maybe<JsonQueryOperatorInput>;
	_rawDominant?: Maybe<JsonQueryOperatorInput>;
	_rawLightMuted?: Maybe<JsonQueryOperatorInput>;
	_rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatch = {
	__typename?: 'SanityImagePaletteSwatch';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	background?: Maybe<Scalars['String']>;
	foreground?: Maybe<Scalars['String']>;
	population?: Maybe<Scalars['Float']>;
	title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	background?: Maybe<StringQueryOperatorInput>;
	foreground?: Maybe<StringQueryOperatorInput>;
	population?: Maybe<FloatQueryOperatorInput>;
	title?: Maybe<StringQueryOperatorInput>;
};

export type SanityPerson = SanityDocument &
	Node & {
		__typename?: 'SanityPerson';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		name?: Maybe<Scalars['String']>;
		slug?: Maybe<SanitySlug>;
		description?: Maybe<Scalars['String']>;
		image?: Maybe<SanityImage>;
		_rawSlug?: Maybe<Scalars['JSON']>;
		_rawImage?: Maybe<Scalars['JSON']>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityPerson_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityPerson_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityPerson_RawSlugArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPerson_RawImageArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPersonConnection = {
	__typename?: 'SanityPersonConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityPersonEdge>;
	nodes: Array<SanityPerson>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityPersonGroupConnection>;
};

export type SanityPersonConnectionDistinctArgs = {
	field: SanityPersonFieldsEnum;
};

export type SanityPersonConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityPersonFieldsEnum;
};

export type SanityPersonEdge = {
	__typename?: 'SanityPersonEdge';
	next?: Maybe<SanityPerson>;
	node: SanityPerson;
	previous?: Maybe<SanityPerson>;
};

export type SanityPersonFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'name'
	| 'slug____key'
	| 'slug____type'
	| 'slug___current'
	| 'description'
	| 'image____key'
	| 'image____type'
	| 'image___asset____id'
	| 'image___asset____type'
	| 'image___asset____createdAt'
	| 'image___asset____updatedAt'
	| 'image___asset____rev'
	| 'image___asset____key'
	| 'image___asset___originalFilename'
	| 'image___asset___label'
	| 'image___asset___title'
	| 'image___asset___description'
	| 'image___asset___sha1hash'
	| 'image___asset___extension'
	| 'image___asset___mimeType'
	| 'image___asset___size'
	| 'image___asset___assetId'
	| 'image___asset___path'
	| 'image___asset___url'
	| 'image___asset___metadata____key'
	| 'image___asset___metadata____type'
	| 'image___asset___metadata___lqip'
	| 'image___asset___metadata___hasAlpha'
	| 'image___asset___metadata___isOpaque'
	| 'image___asset___metadata____rawLocation'
	| 'image___asset___metadata____rawDimensions'
	| 'image___asset___metadata____rawPalette'
	| 'image___asset___source____key'
	| 'image___asset___source____type'
	| 'image___asset___source___name'
	| 'image___asset___source___id'
	| 'image___asset___source___url'
	| 'image___asset____rawMetadata'
	| 'image___asset____rawSource'
	| 'image___asset___fixed___width'
	| 'image___asset___fixed___height'
	| 'image___asset___fixed___src'
	| 'image___asset___fixed___srcSet'
	| 'image___asset___fixed___base64'
	| 'image___asset___fixed___srcWebp'
	| 'image___asset___fixed___srcSetWebp'
	| 'image___asset___fluid___aspectRatio'
	| 'image___asset___fluid___src'
	| 'image___asset___fluid___srcSet'
	| 'image___asset___fluid___sizes'
	| 'image___asset___fluid___base64'
	| 'image___asset___fluid___srcWebp'
	| 'image___asset___fluid___srcSetWebp'
	| 'image___asset___id'
	| 'image___asset___parent___id'
	| 'image___asset___parent___children'
	| 'image___asset___children'
	| 'image___asset___children___id'
	| 'image___asset___children___children'
	| 'image___asset___internal___content'
	| 'image___asset___internal___contentDigest'
	| 'image___asset___internal___description'
	| 'image___asset___internal___fieldOwners'
	| 'image___asset___internal___ignoreType'
	| 'image___asset___internal___mediaType'
	| 'image___asset___internal___owner'
	| 'image___asset___internal___type'
	| 'image___hotspot____key'
	| 'image___hotspot____type'
	| 'image___hotspot___x'
	| 'image___hotspot___y'
	| 'image___hotspot___height'
	| 'image___hotspot___width'
	| 'image___crop____key'
	| 'image___crop____type'
	| 'image___crop___top'
	| 'image___crop___bottom'
	| 'image___crop___left'
	| 'image___crop___right'
	| 'image____rawAsset'
	| 'image____rawHotspot'
	| 'image____rawCrop'
	| '_rawSlug'
	| '_rawImage'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityPersonFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	slug?: Maybe<SanitySlugFilterInput>;
	description?: Maybe<StringQueryOperatorInput>;
	image?: Maybe<SanityImageFilterInput>;
	_rawSlug?: Maybe<JsonQueryOperatorInput>;
	_rawImage?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityPersonFilterListInput = {
	elemMatch?: Maybe<SanityPersonFilterInput>;
};

export type SanityPersonGroupConnection = {
	__typename?: 'SanityPersonGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityPersonEdge>;
	nodes: Array<SanityPerson>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPersonSortInput = {
	fields?: Maybe<Array<Maybe<SanityPersonFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
	/** Max depth to resolve references to */
	maxDepth: Scalars['Int'];
};

export type SanitySlug = {
	__typename?: 'SanitySlug';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
	_key?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
	__typename?: 'SanitySpan';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	marks?: Maybe<Array<Maybe<Scalars['String']>>>;
	text?: Maybe<Scalars['String']>;
};

export type SanityStoreSettings = SanityDocument &
	Node & {
		__typename?: 'SanityStoreSettings';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		name?: Maybe<Scalars['String']>;
		theChefs?: Maybe<Array<Maybe<SanityPerson>>>;
		freshBurgers?: Maybe<Array<Maybe<SanityVeganBurger>>>;
		_rawTheChefs?: Maybe<Scalars['JSON']>;
		_rawFreshBurgers?: Maybe<Scalars['JSON']>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityStoreSettings_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityStoreSettings_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityStoreSettings_RawTheChefsArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityStoreSettings_RawFreshBurgersArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityStoreSettingsConnection = {
	__typename?: 'SanityStoreSettingsConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityStoreSettingsEdge>;
	nodes: Array<SanityStoreSettings>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityStoreSettingsGroupConnection>;
};

export type SanityStoreSettingsConnectionDistinctArgs = {
	field: SanityStoreSettingsFieldsEnum;
};

export type SanityStoreSettingsConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityStoreSettingsFieldsEnum;
};

export type SanityStoreSettingsEdge = {
	__typename?: 'SanityStoreSettingsEdge';
	next?: Maybe<SanityStoreSettings>;
	node: SanityStoreSettings;
	previous?: Maybe<SanityStoreSettings>;
};

export type SanityStoreSettingsFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'name'
	| 'theChefs'
	| 'theChefs____id'
	| 'theChefs____type'
	| 'theChefs____createdAt'
	| 'theChefs____updatedAt'
	| 'theChefs____rev'
	| 'theChefs____key'
	| 'theChefs___name'
	| 'theChefs___slug____key'
	| 'theChefs___slug____type'
	| 'theChefs___slug___current'
	| 'theChefs___description'
	| 'theChefs___image____key'
	| 'theChefs___image____type'
	| 'theChefs___image___asset____id'
	| 'theChefs___image___asset____type'
	| 'theChefs___image___asset____createdAt'
	| 'theChefs___image___asset____updatedAt'
	| 'theChefs___image___asset____rev'
	| 'theChefs___image___asset____key'
	| 'theChefs___image___asset___originalFilename'
	| 'theChefs___image___asset___label'
	| 'theChefs___image___asset___title'
	| 'theChefs___image___asset___description'
	| 'theChefs___image___asset___sha1hash'
	| 'theChefs___image___asset___extension'
	| 'theChefs___image___asset___mimeType'
	| 'theChefs___image___asset___size'
	| 'theChefs___image___asset___assetId'
	| 'theChefs___image___asset___path'
	| 'theChefs___image___asset___url'
	| 'theChefs___image___asset____rawMetadata'
	| 'theChefs___image___asset____rawSource'
	| 'theChefs___image___asset___id'
	| 'theChefs___image___asset___children'
	| 'theChefs___image___hotspot____key'
	| 'theChefs___image___hotspot____type'
	| 'theChefs___image___hotspot___x'
	| 'theChefs___image___hotspot___y'
	| 'theChefs___image___hotspot___height'
	| 'theChefs___image___hotspot___width'
	| 'theChefs___image___crop____key'
	| 'theChefs___image___crop____type'
	| 'theChefs___image___crop___top'
	| 'theChefs___image___crop___bottom'
	| 'theChefs___image___crop___left'
	| 'theChefs___image___crop___right'
	| 'theChefs___image____rawAsset'
	| 'theChefs___image____rawHotspot'
	| 'theChefs___image____rawCrop'
	| 'theChefs____rawSlug'
	| 'theChefs____rawImage'
	| 'theChefs___id'
	| 'theChefs___parent___id'
	| 'theChefs___parent___parent___id'
	| 'theChefs___parent___parent___children'
	| 'theChefs___parent___children'
	| 'theChefs___parent___children___id'
	| 'theChefs___parent___children___children'
	| 'theChefs___parent___internal___content'
	| 'theChefs___parent___internal___contentDigest'
	| 'theChefs___parent___internal___description'
	| 'theChefs___parent___internal___fieldOwners'
	| 'theChefs___parent___internal___ignoreType'
	| 'theChefs___parent___internal___mediaType'
	| 'theChefs___parent___internal___owner'
	| 'theChefs___parent___internal___type'
	| 'theChefs___children'
	| 'theChefs___children___id'
	| 'theChefs___children___parent___id'
	| 'theChefs___children___parent___children'
	| 'theChefs___children___children'
	| 'theChefs___children___children___id'
	| 'theChefs___children___children___children'
	| 'theChefs___children___internal___content'
	| 'theChefs___children___internal___contentDigest'
	| 'theChefs___children___internal___description'
	| 'theChefs___children___internal___fieldOwners'
	| 'theChefs___children___internal___ignoreType'
	| 'theChefs___children___internal___mediaType'
	| 'theChefs___children___internal___owner'
	| 'theChefs___children___internal___type'
	| 'theChefs___internal___content'
	| 'theChefs___internal___contentDigest'
	| 'theChefs___internal___description'
	| 'theChefs___internal___fieldOwners'
	| 'theChefs___internal___ignoreType'
	| 'theChefs___internal___mediaType'
	| 'theChefs___internal___owner'
	| 'theChefs___internal___type'
	| 'freshBurgers'
	| 'freshBurgers____id'
	| 'freshBurgers____type'
	| 'freshBurgers____createdAt'
	| 'freshBurgers____updatedAt'
	| 'freshBurgers____rev'
	| 'freshBurgers____key'
	| 'freshBurgers___name'
	| 'freshBurgers___slug____key'
	| 'freshBurgers___slug____type'
	| 'freshBurgers___slug___current'
	| 'freshBurgers___image____key'
	| 'freshBurgers___image____type'
	| 'freshBurgers___image___asset____id'
	| 'freshBurgers___image___asset____type'
	| 'freshBurgers___image___asset____createdAt'
	| 'freshBurgers___image___asset____updatedAt'
	| 'freshBurgers___image___asset____rev'
	| 'freshBurgers___image___asset____key'
	| 'freshBurgers___image___asset___originalFilename'
	| 'freshBurgers___image___asset___label'
	| 'freshBurgers___image___asset___title'
	| 'freshBurgers___image___asset___description'
	| 'freshBurgers___image___asset___sha1hash'
	| 'freshBurgers___image___asset___extension'
	| 'freshBurgers___image___asset___mimeType'
	| 'freshBurgers___image___asset___size'
	| 'freshBurgers___image___asset___assetId'
	| 'freshBurgers___image___asset___path'
	| 'freshBurgers___image___asset___url'
	| 'freshBurgers___image___asset____rawMetadata'
	| 'freshBurgers___image___asset____rawSource'
	| 'freshBurgers___image___asset___id'
	| 'freshBurgers___image___asset___children'
	| 'freshBurgers___image___hotspot____key'
	| 'freshBurgers___image___hotspot____type'
	| 'freshBurgers___image___hotspot___x'
	| 'freshBurgers___image___hotspot___y'
	| 'freshBurgers___image___hotspot___height'
	| 'freshBurgers___image___hotspot___width'
	| 'freshBurgers___image___crop____key'
	| 'freshBurgers___image___crop____type'
	| 'freshBurgers___image___crop___top'
	| 'freshBurgers___image___crop___bottom'
	| 'freshBurgers___image___crop___left'
	| 'freshBurgers___image___crop___right'
	| 'freshBurgers___image____rawAsset'
	| 'freshBurgers___image____rawHotspot'
	| 'freshBurgers___image____rawCrop'
	| 'freshBurgers___price'
	| 'freshBurgers___toppings'
	| 'freshBurgers___toppings____id'
	| 'freshBurgers___toppings____type'
	| 'freshBurgers___toppings____createdAt'
	| 'freshBurgers___toppings____updatedAt'
	| 'freshBurgers___toppings____rev'
	| 'freshBurgers___toppings____key'
	| 'freshBurgers___toppings___name'
	| 'freshBurgers___toppings___glutenFree'
	| 'freshBurgers___toppings___id'
	| 'freshBurgers___toppings___parent___id'
	| 'freshBurgers___toppings___parent___children'
	| 'freshBurgers___toppings___children'
	| 'freshBurgers___toppings___children___id'
	| 'freshBurgers___toppings___children___children'
	| 'freshBurgers___toppings___internal___content'
	| 'freshBurgers___toppings___internal___contentDigest'
	| 'freshBurgers___toppings___internal___description'
	| 'freshBurgers___toppings___internal___fieldOwners'
	| 'freshBurgers___toppings___internal___ignoreType'
	| 'freshBurgers___toppings___internal___mediaType'
	| 'freshBurgers___toppings___internal___owner'
	| 'freshBurgers___toppings___internal___type'
	| 'freshBurgers____rawSlug'
	| 'freshBurgers____rawImage'
	| 'freshBurgers____rawToppings'
	| 'freshBurgers___id'
	| 'freshBurgers___parent___id'
	| 'freshBurgers___parent___parent___id'
	| 'freshBurgers___parent___parent___children'
	| 'freshBurgers___parent___children'
	| 'freshBurgers___parent___children___id'
	| 'freshBurgers___parent___children___children'
	| 'freshBurgers___parent___internal___content'
	| 'freshBurgers___parent___internal___contentDigest'
	| 'freshBurgers___parent___internal___description'
	| 'freshBurgers___parent___internal___fieldOwners'
	| 'freshBurgers___parent___internal___ignoreType'
	| 'freshBurgers___parent___internal___mediaType'
	| 'freshBurgers___parent___internal___owner'
	| 'freshBurgers___parent___internal___type'
	| 'freshBurgers___children'
	| 'freshBurgers___children___id'
	| 'freshBurgers___children___parent___id'
	| 'freshBurgers___children___parent___children'
	| 'freshBurgers___children___children'
	| 'freshBurgers___children___children___id'
	| 'freshBurgers___children___children___children'
	| 'freshBurgers___children___internal___content'
	| 'freshBurgers___children___internal___contentDigest'
	| 'freshBurgers___children___internal___description'
	| 'freshBurgers___children___internal___fieldOwners'
	| 'freshBurgers___children___internal___ignoreType'
	| 'freshBurgers___children___internal___mediaType'
	| 'freshBurgers___children___internal___owner'
	| 'freshBurgers___children___internal___type'
	| 'freshBurgers___internal___content'
	| 'freshBurgers___internal___contentDigest'
	| 'freshBurgers___internal___description'
	| 'freshBurgers___internal___fieldOwners'
	| 'freshBurgers___internal___ignoreType'
	| 'freshBurgers___internal___mediaType'
	| 'freshBurgers___internal___owner'
	| 'freshBurgers___internal___type'
	| '_rawTheChefs'
	| '_rawFreshBurgers'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityStoreSettingsFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	theChefs?: Maybe<SanityPersonFilterListInput>;
	freshBurgers?: Maybe<SanityVeganBurgerFilterListInput>;
	_rawTheChefs?: Maybe<JsonQueryOperatorInput>;
	_rawFreshBurgers?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityStoreSettingsGroupConnection = {
	__typename?: 'SanityStoreSettingsGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityStoreSettingsEdge>;
	nodes: Array<SanityStoreSettings>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityStoreSettingsSortInput = {
	fields?: Maybe<Array<Maybe<SanityStoreSettingsFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityTopping = SanityDocument &
	Node & {
		__typename?: 'SanityTopping';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		name?: Maybe<Scalars['String']>;
		glutenFree?: Maybe<Scalars['Boolean']>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityTopping_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityTopping_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityToppingConnection = {
	__typename?: 'SanityToppingConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityToppingEdge>;
	nodes: Array<SanityTopping>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityToppingGroupConnection>;
};

export type SanityToppingConnectionDistinctArgs = {
	field: SanityToppingFieldsEnum;
};

export type SanityToppingConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityToppingFieldsEnum;
};

export type SanityToppingEdge = {
	__typename?: 'SanityToppingEdge';
	next?: Maybe<SanityTopping>;
	node: SanityTopping;
	previous?: Maybe<SanityTopping>;
};

export type SanityToppingFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'name'
	| 'glutenFree'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityToppingFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	glutenFree?: Maybe<BooleanQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityToppingFilterListInput = {
	elemMatch?: Maybe<SanityToppingFilterInput>;
};

export type SanityToppingGroupConnection = {
	__typename?: 'SanityToppingGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityToppingEdge>;
	nodes: Array<SanityTopping>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityToppingSortInput = {
	fields?: Maybe<Array<Maybe<SanityToppingFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityVeganBurger = SanityDocument &
	Node & {
		__typename?: 'SanityVeganBurger';
		_id?: Maybe<Scalars['String']>;
		_type?: Maybe<Scalars['String']>;
		_createdAt?: Maybe<Scalars['Date']>;
		_updatedAt?: Maybe<Scalars['Date']>;
		_rev?: Maybe<Scalars['String']>;
		_key?: Maybe<Scalars['String']>;
		name?: Maybe<Scalars['String']>;
		slug?: Maybe<SanitySlug>;
		image?: Maybe<SanityImage>;
		price?: Maybe<Scalars['Float']>;
		toppings?: Maybe<Array<Maybe<SanityTopping>>>;
		_rawSlug?: Maybe<Scalars['JSON']>;
		_rawImage?: Maybe<Scalars['JSON']>;
		_rawToppings?: Maybe<Scalars['JSON']>;
		id: Scalars['ID'];
		parent?: Maybe<Node>;
		children: Array<Node>;
		internal: Internal;
	};

export type SanityVeganBurger_CreatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityVeganBurger_UpdatedAtArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SanityVeganBurger_RawSlugArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityVeganBurger_RawImageArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityVeganBurger_RawToppingsArgs = {
	resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityVeganBurgerConnection = {
	__typename?: 'SanityVeganBurgerConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityVeganBurgerEdge>;
	nodes: Array<SanityVeganBurger>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SanityVeganBurgerGroupConnection>;
};

export type SanityVeganBurgerConnectionDistinctArgs = {
	field: SanityVeganBurgerFieldsEnum;
};

export type SanityVeganBurgerConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SanityVeganBurgerFieldsEnum;
};

export type SanityVeganBurgerEdge = {
	__typename?: 'SanityVeganBurgerEdge';
	next?: Maybe<SanityVeganBurger>;
	node: SanityVeganBurger;
	previous?: Maybe<SanityVeganBurger>;
};

export type SanityVeganBurgerFieldsEnum =
	| '_id'
	| '_type'
	| '_createdAt'
	| '_updatedAt'
	| '_rev'
	| '_key'
	| 'name'
	| 'slug____key'
	| 'slug____type'
	| 'slug___current'
	| 'image____key'
	| 'image____type'
	| 'image___asset____id'
	| 'image___asset____type'
	| 'image___asset____createdAt'
	| 'image___asset____updatedAt'
	| 'image___asset____rev'
	| 'image___asset____key'
	| 'image___asset___originalFilename'
	| 'image___asset___label'
	| 'image___asset___title'
	| 'image___asset___description'
	| 'image___asset___sha1hash'
	| 'image___asset___extension'
	| 'image___asset___mimeType'
	| 'image___asset___size'
	| 'image___asset___assetId'
	| 'image___asset___path'
	| 'image___asset___url'
	| 'image___asset___metadata____key'
	| 'image___asset___metadata____type'
	| 'image___asset___metadata___lqip'
	| 'image___asset___metadata___hasAlpha'
	| 'image___asset___metadata___isOpaque'
	| 'image___asset___metadata____rawLocation'
	| 'image___asset___metadata____rawDimensions'
	| 'image___asset___metadata____rawPalette'
	| 'image___asset___source____key'
	| 'image___asset___source____type'
	| 'image___asset___source___name'
	| 'image___asset___source___id'
	| 'image___asset___source___url'
	| 'image___asset____rawMetadata'
	| 'image___asset____rawSource'
	| 'image___asset___fixed___width'
	| 'image___asset___fixed___height'
	| 'image___asset___fixed___src'
	| 'image___asset___fixed___srcSet'
	| 'image___asset___fixed___base64'
	| 'image___asset___fixed___srcWebp'
	| 'image___asset___fixed___srcSetWebp'
	| 'image___asset___fluid___aspectRatio'
	| 'image___asset___fluid___src'
	| 'image___asset___fluid___srcSet'
	| 'image___asset___fluid___sizes'
	| 'image___asset___fluid___base64'
	| 'image___asset___fluid___srcWebp'
	| 'image___asset___fluid___srcSetWebp'
	| 'image___asset___id'
	| 'image___asset___parent___id'
	| 'image___asset___parent___children'
	| 'image___asset___children'
	| 'image___asset___children___id'
	| 'image___asset___children___children'
	| 'image___asset___internal___content'
	| 'image___asset___internal___contentDigest'
	| 'image___asset___internal___description'
	| 'image___asset___internal___fieldOwners'
	| 'image___asset___internal___ignoreType'
	| 'image___asset___internal___mediaType'
	| 'image___asset___internal___owner'
	| 'image___asset___internal___type'
	| 'image___hotspot____key'
	| 'image___hotspot____type'
	| 'image___hotspot___x'
	| 'image___hotspot___y'
	| 'image___hotspot___height'
	| 'image___hotspot___width'
	| 'image___crop____key'
	| 'image___crop____type'
	| 'image___crop___top'
	| 'image___crop___bottom'
	| 'image___crop___left'
	| 'image___crop___right'
	| 'image____rawAsset'
	| 'image____rawHotspot'
	| 'image____rawCrop'
	| 'price'
	| 'toppings'
	| 'toppings____id'
	| 'toppings____type'
	| 'toppings____createdAt'
	| 'toppings____updatedAt'
	| 'toppings____rev'
	| 'toppings____key'
	| 'toppings___name'
	| 'toppings___glutenFree'
	| 'toppings___id'
	| 'toppings___parent___id'
	| 'toppings___parent___parent___id'
	| 'toppings___parent___parent___children'
	| 'toppings___parent___children'
	| 'toppings___parent___children___id'
	| 'toppings___parent___children___children'
	| 'toppings___parent___internal___content'
	| 'toppings___parent___internal___contentDigest'
	| 'toppings___parent___internal___description'
	| 'toppings___parent___internal___fieldOwners'
	| 'toppings___parent___internal___ignoreType'
	| 'toppings___parent___internal___mediaType'
	| 'toppings___parent___internal___owner'
	| 'toppings___parent___internal___type'
	| 'toppings___children'
	| 'toppings___children___id'
	| 'toppings___children___parent___id'
	| 'toppings___children___parent___children'
	| 'toppings___children___children'
	| 'toppings___children___children___id'
	| 'toppings___children___children___children'
	| 'toppings___children___internal___content'
	| 'toppings___children___internal___contentDigest'
	| 'toppings___children___internal___description'
	| 'toppings___children___internal___fieldOwners'
	| 'toppings___children___internal___ignoreType'
	| 'toppings___children___internal___mediaType'
	| 'toppings___children___internal___owner'
	| 'toppings___children___internal___type'
	| 'toppings___internal___content'
	| 'toppings___internal___contentDigest'
	| 'toppings___internal___description'
	| 'toppings___internal___fieldOwners'
	| 'toppings___internal___ignoreType'
	| 'toppings___internal___mediaType'
	| 'toppings___internal___owner'
	| 'toppings___internal___type'
	| '_rawSlug'
	| '_rawImage'
	| '_rawToppings'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SanityVeganBurgerFilterInput = {
	_id?: Maybe<StringQueryOperatorInput>;
	_type?: Maybe<StringQueryOperatorInput>;
	_createdAt?: Maybe<DateQueryOperatorInput>;
	_updatedAt?: Maybe<DateQueryOperatorInput>;
	_rev?: Maybe<StringQueryOperatorInput>;
	_key?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	slug?: Maybe<SanitySlugFilterInput>;
	image?: Maybe<SanityImageFilterInput>;
	price?: Maybe<FloatQueryOperatorInput>;
	toppings?: Maybe<SanityToppingFilterListInput>;
	_rawSlug?: Maybe<JsonQueryOperatorInput>;
	_rawImage?: Maybe<JsonQueryOperatorInput>;
	_rawToppings?: Maybe<JsonQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SanityVeganBurgerFilterListInput = {
	elemMatch?: Maybe<SanityVeganBurgerFilterInput>;
};

export type SanityVeganBurgerGroupConnection = {
	__typename?: 'SanityVeganBurgerGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SanityVeganBurgerEdge>;
	nodes: Array<SanityVeganBurger>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SanityVeganBurgerSortInput = {
	fields?: Maybe<Array<Maybe<SanityVeganBurgerFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
	__typename?: 'Site';
	buildTime?: Maybe<Scalars['Date']>;
	siteMetadata?: Maybe<SiteSiteMetadata>;
	port?: Maybe<Scalars['Int']>;
	host?: Maybe<Scalars['String']>;
	polyfill?: Maybe<Scalars['Boolean']>;
	pathPrefix?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type SiteBuildTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
	__typename?: 'SiteBuildMetadata';
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
	formatString?: Maybe<Scalars['String']>;
	fromNow?: Maybe<Scalars['Boolean']>;
	difference?: Maybe<Scalars['String']>;
	locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
	__typename?: 'SiteBuildMetadataConnection';
	totalCount: Scalars['Int'];
	edges: Array<SiteBuildMetadataEdge>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
	__typename?: 'SiteBuildMetadataEdge';
	next?: Maybe<SiteBuildMetadata>;
	node: SiteBuildMetadata;
	previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type'
	| 'buildTime';

export type SiteBuildMetadataFilterInput = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
	__typename?: 'SiteBuildMetadataGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SiteBuildMetadataEdge>;
	nodes: Array<SiteBuildMetadata>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
	__typename?: 'SiteConnection';
	totalCount: Scalars['Int'];
	edges: Array<SiteEdge>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SiteFieldsEnum;
};

export type SiteEdge = {
	__typename?: 'SiteEdge';
	next?: Maybe<Site>;
	node: Site;
	previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
	| 'buildTime'
	| 'siteMetadata___title'
	| 'siteMetadata___description'
	| 'siteMetadata___siteUrl'
	| 'siteMetadata___instagram'
	| 'port'
	| 'host'
	| 'polyfill'
	| 'pathPrefix'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type';

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>;
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
	port?: Maybe<IntQueryOperatorInput>;
	host?: Maybe<StringQueryOperatorInput>;
	polyfill?: Maybe<BooleanQueryOperatorInput>;
	pathPrefix?: Maybe<StringQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
	__typename?: 'SiteGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SiteEdge>;
	nodes: Array<Site>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
	__typename?: 'SitePage';
	path: Scalars['String'];
	component: Scalars['String'];
	internalComponentName: Scalars['String'];
	componentChunkName: Scalars['String'];
	matchPath?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
	context?: Maybe<SitePageContext>;
	pluginCreator?: Maybe<SitePlugin>;
	pluginCreatorId?: Maybe<Scalars['String']>;
	componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
	__typename?: 'SitePageConnection';
	totalCount: Scalars['Int'];
	edges: Array<SitePageEdge>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SitePageFieldsEnum;
};

export type SitePageContext = {
	__typename?: 'SitePageContext';
	toppings?: Maybe<Scalars['String']>;
	toppingRegex?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
	skip?: Maybe<Scalars['Int']>;
	currentPage?: Maybe<Scalars['Int']>;
	totalChefCount?: Maybe<Scalars['Int']>;
	pageSize?: Maybe<Scalars['Int']>;
};

export type SitePageContextFilterInput = {
	toppings?: Maybe<StringQueryOperatorInput>;
	toppingRegex?: Maybe<StringQueryOperatorInput>;
	slug?: Maybe<StringQueryOperatorInput>;
	skip?: Maybe<IntQueryOperatorInput>;
	currentPage?: Maybe<IntQueryOperatorInput>;
	totalChefCount?: Maybe<IntQueryOperatorInput>;
	pageSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePageEdge = {
	__typename?: 'SitePageEdge';
	next?: Maybe<SitePage>;
	node: SitePage;
	previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
	| 'path'
	| 'component'
	| 'internalComponentName'
	| 'componentChunkName'
	| 'matchPath'
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type'
	| 'isCreatedByStatefulCreatePages'
	| 'context___toppings'
	| 'context___toppingRegex'
	| 'context___slug'
	| 'context___skip'
	| 'context___currentPage'
	| 'context___totalChefCount'
	| 'context___pageSize'
	| 'pluginCreator___id'
	| 'pluginCreator___parent___id'
	| 'pluginCreator___parent___parent___id'
	| 'pluginCreator___parent___parent___children'
	| 'pluginCreator___parent___children'
	| 'pluginCreator___parent___children___id'
	| 'pluginCreator___parent___children___children'
	| 'pluginCreator___parent___internal___content'
	| 'pluginCreator___parent___internal___contentDigest'
	| 'pluginCreator___parent___internal___description'
	| 'pluginCreator___parent___internal___fieldOwners'
	| 'pluginCreator___parent___internal___ignoreType'
	| 'pluginCreator___parent___internal___mediaType'
	| 'pluginCreator___parent___internal___owner'
	| 'pluginCreator___parent___internal___type'
	| 'pluginCreator___children'
	| 'pluginCreator___children___id'
	| 'pluginCreator___children___parent___id'
	| 'pluginCreator___children___parent___children'
	| 'pluginCreator___children___children'
	| 'pluginCreator___children___children___id'
	| 'pluginCreator___children___children___children'
	| 'pluginCreator___children___internal___content'
	| 'pluginCreator___children___internal___contentDigest'
	| 'pluginCreator___children___internal___description'
	| 'pluginCreator___children___internal___fieldOwners'
	| 'pluginCreator___children___internal___ignoreType'
	| 'pluginCreator___children___internal___mediaType'
	| 'pluginCreator___children___internal___owner'
	| 'pluginCreator___children___internal___type'
	| 'pluginCreator___internal___content'
	| 'pluginCreator___internal___contentDigest'
	| 'pluginCreator___internal___description'
	| 'pluginCreator___internal___fieldOwners'
	| 'pluginCreator___internal___ignoreType'
	| 'pluginCreator___internal___mediaType'
	| 'pluginCreator___internal___owner'
	| 'pluginCreator___internal___type'
	| 'pluginCreator___resolve'
	| 'pluginCreator___name'
	| 'pluginCreator___version'
	| 'pluginCreator___pluginOptions___displayName'
	| 'pluginCreator___pluginOptions___fileName'
	| 'pluginCreator___pluginOptions___minify'
	| 'pluginCreator___pluginOptions___transpileTemplateLiterals'
	| 'pluginCreator___pluginOptions___pure'
	| 'pluginCreator___pluginOptions___projectId'
	| 'pluginCreator___pluginOptions___dataset'
	| 'pluginCreator___pluginOptions___watchMode'
	| 'pluginCreator___pluginOptions___token'
	| 'pluginCreator___pluginOptions___dest'
	| 'pluginCreator___pluginOptions___isTSX'
	| 'pluginCreator___pluginOptions___jsxPragma'
	| 'pluginCreator___pluginOptions___allExtensions'
	| 'pluginCreator___pluginOptions___path'
	| 'pluginCreator___pluginOptions___pathCheck'
	| 'pluginCreator___nodeAPIs'
	| 'pluginCreator___browserAPIs'
	| 'pluginCreator___ssrAPIs'
	| 'pluginCreator___pluginFilepath'
	| 'pluginCreator___packageJson___name'
	| 'pluginCreator___packageJson___description'
	| 'pluginCreator___packageJson___version'
	| 'pluginCreator___packageJson___main'
	| 'pluginCreator___packageJson___author'
	| 'pluginCreator___packageJson___license'
	| 'pluginCreator___packageJson___dependencies'
	| 'pluginCreator___packageJson___dependencies___name'
	| 'pluginCreator___packageJson___dependencies___version'
	| 'pluginCreator___packageJson___devDependencies'
	| 'pluginCreator___packageJson___devDependencies___name'
	| 'pluginCreator___packageJson___devDependencies___version'
	| 'pluginCreator___packageJson___peerDependencies'
	| 'pluginCreator___packageJson___peerDependencies___name'
	| 'pluginCreator___packageJson___peerDependencies___version'
	| 'pluginCreator___packageJson___keywords'
	| 'pluginCreatorId'
	| 'componentPath';

export type SitePageFilterInput = {
	path?: Maybe<StringQueryOperatorInput>;
	component?: Maybe<StringQueryOperatorInput>;
	internalComponentName?: Maybe<StringQueryOperatorInput>;
	componentChunkName?: Maybe<StringQueryOperatorInput>;
	matchPath?: Maybe<StringQueryOperatorInput>;
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
	context?: Maybe<SitePageContextFilterInput>;
	pluginCreator?: Maybe<SitePluginFilterInput>;
	pluginCreatorId?: Maybe<StringQueryOperatorInput>;
	componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
	__typename?: 'SitePageGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SitePageEdge>;
	nodes: Array<SitePage>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
	__typename?: 'SitePlugin';
	id: Scalars['ID'];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	resolve?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	version?: Maybe<Scalars['String']>;
	pluginOptions?: Maybe<SitePluginPluginOptions>;
	nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
	browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
	ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
	pluginFilepath?: Maybe<Scalars['String']>;
	packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
	__typename?: 'SitePluginConnection';
	totalCount: Scalars['Int'];
	edges: Array<SitePluginEdge>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	distinct: Array<Scalars['String']>;
	group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>;
	limit?: Maybe<Scalars['Int']>;
	field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
	__typename?: 'SitePluginEdge';
	next?: Maybe<SitePlugin>;
	node: SitePlugin;
	previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
	| 'id'
	| 'parent___id'
	| 'parent___parent___id'
	| 'parent___parent___parent___id'
	| 'parent___parent___parent___children'
	| 'parent___parent___children'
	| 'parent___parent___children___id'
	| 'parent___parent___children___children'
	| 'parent___parent___internal___content'
	| 'parent___parent___internal___contentDigest'
	| 'parent___parent___internal___description'
	| 'parent___parent___internal___fieldOwners'
	| 'parent___parent___internal___ignoreType'
	| 'parent___parent___internal___mediaType'
	| 'parent___parent___internal___owner'
	| 'parent___parent___internal___type'
	| 'parent___children'
	| 'parent___children___id'
	| 'parent___children___parent___id'
	| 'parent___children___parent___children'
	| 'parent___children___children'
	| 'parent___children___children___id'
	| 'parent___children___children___children'
	| 'parent___children___internal___content'
	| 'parent___children___internal___contentDigest'
	| 'parent___children___internal___description'
	| 'parent___children___internal___fieldOwners'
	| 'parent___children___internal___ignoreType'
	| 'parent___children___internal___mediaType'
	| 'parent___children___internal___owner'
	| 'parent___children___internal___type'
	| 'parent___internal___content'
	| 'parent___internal___contentDigest'
	| 'parent___internal___description'
	| 'parent___internal___fieldOwners'
	| 'parent___internal___ignoreType'
	| 'parent___internal___mediaType'
	| 'parent___internal___owner'
	| 'parent___internal___type'
	| 'children'
	| 'children___id'
	| 'children___parent___id'
	| 'children___parent___parent___id'
	| 'children___parent___parent___children'
	| 'children___parent___children'
	| 'children___parent___children___id'
	| 'children___parent___children___children'
	| 'children___parent___internal___content'
	| 'children___parent___internal___contentDigest'
	| 'children___parent___internal___description'
	| 'children___parent___internal___fieldOwners'
	| 'children___parent___internal___ignoreType'
	| 'children___parent___internal___mediaType'
	| 'children___parent___internal___owner'
	| 'children___parent___internal___type'
	| 'children___children'
	| 'children___children___id'
	| 'children___children___parent___id'
	| 'children___children___parent___children'
	| 'children___children___children'
	| 'children___children___children___id'
	| 'children___children___children___children'
	| 'children___children___internal___content'
	| 'children___children___internal___contentDigest'
	| 'children___children___internal___description'
	| 'children___children___internal___fieldOwners'
	| 'children___children___internal___ignoreType'
	| 'children___children___internal___mediaType'
	| 'children___children___internal___owner'
	| 'children___children___internal___type'
	| 'children___internal___content'
	| 'children___internal___contentDigest'
	| 'children___internal___description'
	| 'children___internal___fieldOwners'
	| 'children___internal___ignoreType'
	| 'children___internal___mediaType'
	| 'children___internal___owner'
	| 'children___internal___type'
	| 'internal___content'
	| 'internal___contentDigest'
	| 'internal___description'
	| 'internal___fieldOwners'
	| 'internal___ignoreType'
	| 'internal___mediaType'
	| 'internal___owner'
	| 'internal___type'
	| 'resolve'
	| 'name'
	| 'version'
	| 'pluginOptions___displayName'
	| 'pluginOptions___fileName'
	| 'pluginOptions___minify'
	| 'pluginOptions___transpileTemplateLiterals'
	| 'pluginOptions___pure'
	| 'pluginOptions___projectId'
	| 'pluginOptions___dataset'
	| 'pluginOptions___watchMode'
	| 'pluginOptions___token'
	| 'pluginOptions___dest'
	| 'pluginOptions___isTSX'
	| 'pluginOptions___jsxPragma'
	| 'pluginOptions___allExtensions'
	| 'pluginOptions___path'
	| 'pluginOptions___pathCheck'
	| 'nodeAPIs'
	| 'browserAPIs'
	| 'ssrAPIs'
	| 'pluginFilepath'
	| 'packageJson___name'
	| 'packageJson___description'
	| 'packageJson___version'
	| 'packageJson___main'
	| 'packageJson___author'
	| 'packageJson___license'
	| 'packageJson___dependencies'
	| 'packageJson___dependencies___name'
	| 'packageJson___dependencies___version'
	| 'packageJson___devDependencies'
	| 'packageJson___devDependencies___name'
	| 'packageJson___devDependencies___version'
	| 'packageJson___peerDependencies'
	| 'packageJson___peerDependencies___name'
	| 'packageJson___peerDependencies___version'
	| 'packageJson___keywords';

export type SitePluginFilterInput = {
	id?: Maybe<StringQueryOperatorInput>;
	parent?: Maybe<NodeFilterInput>;
	children?: Maybe<NodeFilterListInput>;
	internal?: Maybe<InternalFilterInput>;
	resolve?: Maybe<StringQueryOperatorInput>;
	name?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
	nodeAPIs?: Maybe<StringQueryOperatorInput>;
	browserAPIs?: Maybe<StringQueryOperatorInput>;
	ssrAPIs?: Maybe<StringQueryOperatorInput>;
	pluginFilepath?: Maybe<StringQueryOperatorInput>;
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
	__typename?: 'SitePluginGroupConnection';
	totalCount: Scalars['Int'];
	edges: Array<SitePluginEdge>;
	nodes: Array<SitePlugin>;
	pageInfo: PageInfo;
	field: Scalars['String'];
	fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
	__typename?: 'SitePluginPackageJson';
	name?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	version?: Maybe<Scalars['String']>;
	main?: Maybe<Scalars['String']>;
	author?: Maybe<Scalars['String']>;
	license?: Maybe<Scalars['String']>;
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
	__typename?: 'SitePluginPackageJsonDependencies';
	name?: Maybe<Scalars['String']>;
	version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
	__typename?: 'SitePluginPackageJsonDevDependencies';
	name?: Maybe<Scalars['String']>;
	version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
	name?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
	main?: Maybe<StringQueryOperatorInput>;
	author?: Maybe<StringQueryOperatorInput>;
	license?: Maybe<StringQueryOperatorInput>;
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
	keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: 'SitePluginPackageJsonPeerDependencies';
	name?: Maybe<Scalars['String']>;
	version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>;
	version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
	__typename?: 'SitePluginPluginOptions';
	displayName?: Maybe<Scalars['Boolean']>;
	fileName?: Maybe<Scalars['Boolean']>;
	minify?: Maybe<Scalars['Boolean']>;
	transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
	pure?: Maybe<Scalars['Boolean']>;
	projectId?: Maybe<Scalars['String']>;
	dataset?: Maybe<Scalars['String']>;
	watchMode?: Maybe<Scalars['Boolean']>;
	token?: Maybe<Scalars['String']>;
	dest?: Maybe<Scalars['String']>;
	isTSX?: Maybe<Scalars['Boolean']>;
	jsxPragma?: Maybe<Scalars['String']>;
	allExtensions?: Maybe<Scalars['Boolean']>;
	path?: Maybe<Scalars['String']>;
	pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
	displayName?: Maybe<BooleanQueryOperatorInput>;
	fileName?: Maybe<BooleanQueryOperatorInput>;
	minify?: Maybe<BooleanQueryOperatorInput>;
	transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
	pure?: Maybe<BooleanQueryOperatorInput>;
	projectId?: Maybe<StringQueryOperatorInput>;
	dataset?: Maybe<StringQueryOperatorInput>;
	watchMode?: Maybe<BooleanQueryOperatorInput>;
	token?: Maybe<StringQueryOperatorInput>;
	dest?: Maybe<StringQueryOperatorInput>;
	isTSX?: Maybe<BooleanQueryOperatorInput>;
	jsxPragma?: Maybe<StringQueryOperatorInput>;
	allExtensions?: Maybe<BooleanQueryOperatorInput>;
	path?: Maybe<StringQueryOperatorInput>;
	pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
	__typename?: 'SiteSiteMetadata';
	title?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	siteUrl?: Maybe<Scalars['String']>;
	instagram?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
	title?: Maybe<StringQueryOperatorInput>;
	description?: Maybe<StringQueryOperatorInput>;
	siteUrl?: Maybe<StringQueryOperatorInput>;
	instagram?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
	fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
	order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type StringQueryOperatorInput = {
	eq?: Maybe<Scalars['String']>;
	ne?: Maybe<Scalars['String']>;
	in?: Maybe<Array<Maybe<Scalars['String']>>>;
	nin?: Maybe<Array<Maybe<Scalars['String']>>>;
	regex?: Maybe<Scalars['String']>;
	glob?: Maybe<Scalars['String']>;
};
