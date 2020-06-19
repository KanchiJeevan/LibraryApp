const express = require("express");
const booksRouter = express.Router();
function router(nav){

    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbera",
            genre: "Cartoon",
            img: "tom.jpg"
        },
        {
            title: "Harry Potter",
            author: "J K Rowling",
            genre: "Fantasy",
            img: "Harry.png"
        },
        {
            title: "Paathumayude Aadu",
            author: "Basheer",
            genre: "Drama",
            img: "basheer.jpg"
        },
        {
            title: "Wings of Fire",
            author: "A. P. J. Abdul Kalam",
            genre: "Autobiography",
            img: "apj.jpg"
        },
        {
            title: "Wuthering Heights",
            author: "Emily Bronte",
            genre: "Fiction",
            img: "wuthering.jpg"
        }
    ]
    booksRouter.get("/",function(req,res){
        res.render("books",
        {
            nav,
            title:"Library",
            books
        });
    });
    
    
    booksRouter.get("/:id", function(req,res){
        const id = req.params.id;
            res.render("book",{
                nav,
                title:"Library",
                book:books[id]
            });
    });

    return booksRouter;

}


module.exports = router;