type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class Books {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishlist = new Books({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia',
});

wishlist.addToWishlist({
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller',
});
wishlist.showWishlist();