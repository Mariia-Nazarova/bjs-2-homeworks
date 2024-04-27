'use strict'
//////////////////////////////////////////////////Задача 1. Печатное издание
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100; //книга в идеальном состоянии
		this.type = null; // тип пока не определен 
	}

	fix() {
		this.state = this.state * 1.5; // Испорченное издание можно подклеить и улучшить его состояние. Метод увеличивает state в полтора
	}

	set state(newState) { //Вводим ограничение для state (Нельзя улучшить новое издание, также бесполезно подклеивать полностью уничтоженное) 
		if (newState < 0) { // Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0
			this._state = 0;
		} else if (newState > 100) { // Если новое состояние больше 100, должно быть записано значение 100
			this._state = 100;
		} else {
			this._state = newState; // В остальных случаях в свойство state должно быть записано переданное в «сеттер» значение.
		}
	}


	get state() {
		return this._state; // Создайте «геттер», который позволит читать значение свойства state
	}

}


class Magazine extends PrintEditionItem { //класс Magazine, который наследуется от класса PrintEditionItem
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine"; // Значение свойства type должно быть равно "magazine"
	}

}


class Book extends PrintEditionItem { //класс Book, который наследуется от класса PrintEditionItem
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author; // Конструктор класса должен принимать также и имя автора книги author
		this.type = "book" // Значение свойства type должно быть равно "book"
	}

}


class NovelBook extends Book { //класс NovelBook — для романов, который наследуется от класса Book
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel" // Значение свойства type должно быть равно "novel"
	}

}


class FantasticBook extends Book { //класс FantasticBook — для фантастических произведений, который наследуется от класса Book
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic" // Значение свойства type должно быть равно "fantastic"
	}

}

class DetectiveBook extends Book { //класс DetectiveBook — для для детективов, который наследуется от класса Book
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective" // Значение свойства type должно быть равно "detective"
	}

}

//////////////////////////////////////////////////Задача 2. Библиотека
class Library {
    constructor(name) {
      this.name = name; // Конструктор класса должен принимать название библиотеки name
      this.books = []; // Значением свойства books должен быть пустой массив.
    }

    addBook(book) { // метод addBook(book) в качестве аргумента принимает объект — книгу или журнал
        if (book.state > 30) { // если состояние state книги больше 30, то добавляет в массив
            this.books.push(book); 
        }
    }

    findBookBy(type, value) { // метод в качестве аргументов принимает ключ для проведения поиска (тип, автор, название, год выпуска и пр.) и искомое значение
      for (const book of this.books) { // просто перебираем все книги
        if (book[type] === value) {
            return book; //Метод должен возвращать книгу в случае успеха
        }
      }
      return null; // null, если запрошенная книга не была найдена.
    }

	giveBookByName(bookName) { // в качестве аргумента будет принимать название книги, запрошенной читателем
      for (let i = 0; i < this.books.length; i++) {
		const book = this.books[i];
		if (book.name === bookName) { // Если запрошенная книга найдена
			this.books.splice(i, 1); // метод должен удалять книгу из хранилища books - удаление сделаем с помощью метода splice
			return book; //и возвращать её
		}
	  }
	  return null; // если нет, то вернуть null
	}
}

