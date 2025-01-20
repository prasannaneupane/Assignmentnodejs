//Create a Book class with properties title, author, and year. Add a method to display information about the book using template literals.

class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    display(){
        console.log(`Title:${this.title} \nAuthor:${this.author} \nYear:${this.year}`);    
    }
}
let books=new Book('Atomic Habits','James clear','2018')
books.display();