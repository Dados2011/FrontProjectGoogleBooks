import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BooksDBService implements InMemoryDbService {
    createDb() {
        const books = [
            {
            }
        ];

        return {books} ;
    }
}
