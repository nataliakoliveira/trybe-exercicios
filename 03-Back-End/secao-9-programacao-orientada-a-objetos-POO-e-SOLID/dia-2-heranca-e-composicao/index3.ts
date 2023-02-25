// Crie uma interface _Logger_.
interface Logger {
  // _Logger_ deve possuir um método `log`, que recebe um parâmetro do tipo _string_ e não retorna nada (_void_).
  log(message: string): void;
}

// Crie uma classe _ConsoleLogger_ que implementa _Logger_.
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[ConsoleLogger] ${message}`);
  }
}
// Crie uma classe _ConsoleLogger2_ igual à classe anterior, apenas a título de exemplo.
class ConsoleLogger2 implements Logger {
  log(message: string): void {
    console.log(`[ConsoleLogger2] ${message}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

// Crie uma classe _ExampleDatabase_ que implementa _Database_.
class ExampleDatabase implements Database {
  // _ExampleDatabase_ deve receber o _Logger_ como parâmetro do construtor, e possuir como valor padrão um _ConsoleLogger_.
  constructor(public logger: Logger = new ConsoleLogger()) {}

  // Dentro do método `save`, chame a função `log` do _Logger_ passado para o database para fazer o log dos parâmetros passados para a `save`.
  save(key: string, value: string): void {
    this.logger.log(`Saving ${value} with key ${key}`);
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
db1.save('key1', 'value1');
db2.save('key2', 'value2');
db3.save('key3', 'value3');