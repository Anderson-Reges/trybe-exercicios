export interface post {
  title: string,
  author: string,
  category: string,
}

export interface postDate extends post {
  publicationDate: string, 
}

export interface postId extends postDate {
  id: number,
}
