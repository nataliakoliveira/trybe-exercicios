// ./services/books.service.ts

import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';

const properties = ['title', 'price', 'author', 'isbn'];

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  // os próximos três métodos serão nossas validações
  static validateProperties(book: Book): [boolean, string | null] {
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
        return [false, properties[i]];
      }
    }
    return [true, null];
  }
  
  static validateValues(book: Book): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];
      if (!value) {
        return [false, property];
      }
    }
    return [true, null];
  }
  
  static validationBook(book: Book): void | string {
    let [valid, property] = BookService.validateProperties(book);
  
    if (!valid){
      return `O campo ${property} é obrigatório.`;
    }
    [valid, property] = BookService.validateValues(book);
  
    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book:Book): Promise<Book> {
    const isValid = BookService.validationBook(book);

    if(typeof isValid === 'string') {
      throw new BadRequestError(isValid);
    }

    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<void> {
    const isValid = BookService.validationBook(book);

    if(typeof isValid === 'string') {
      throw new BadRequestError(isValid);
    }

    const bookExists = await this.model.getById(id);

    if (!bookExists) {
      throw new NotFoundError('Book not found');
    }

    await this.model.update(id, book);
  }

  public async delete(id: number): Promise<void> {
    const bookExists = await this.model.getById(id);

    if (!bookExists) {
      throw new NotFoundError('Book not found');
    }

    await this.model.delete(id);
  }
}

export default BookService;