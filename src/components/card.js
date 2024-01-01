import { useState } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Options from "./options";
import Questions from "./questions";

export default function Card() {
    const data = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Highly Textured Modern Language",
                "Hyperlink and Text Markup Language",
                "Home Tool Markup Language",
            ],
            answer: "Hyper Text Markup Language",
            difficulty: "Easy",
        },
        {
            question:
                "Which of the following is a programming language commonly used for front-end web development?",
            options: ["Java", "Python", "JavaScript", "C++"],
            answer: "JavaScript",
            difficulty: "Easy",
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Counter Strike: Source",
                "Computer Style Sheets",
                "Colorful Style Sheets",
                "Cascading Style Sheets",
            ],
            answer: "Cascading Style Sheets",
            difficulty: "Easy",
        },
        {
            question: "Which of the following is NOT a valid HTTP status code?",
            options: [
                "200 OK",
                "404 Not Found",
                "500 Internal Server Error",
                "303 See Other",
            ],
            answer: "303 See Other",
            difficulty: "Medium",
        },
        {
            question: "What is the purpose of the 'viewport' meta tag in HTML?",
            options: [
                "To define the page's character encoding",
                "To set the background color of the page",
                "To specify the viewport settings for responsive web design",
                "To include external JavaScript files",
            ],
            answer: "To specify the viewport settings for responsive web design",
            difficulty: "Medium",
        },
        {
            question:
                "Which of the following is used for version control in web development?",
            options: ["Git", "SVN", "Mercurial", "All of the above"],
            answer: "All of the above",
            difficulty: "Medium",
        },
        {
            question:
                "What is the purpose of the 'box-sizing' property in CSS?",
            options: [
                "To set the size of an HTML box",
                "To specify the padding and border of an HTML box",
                "To include the margin in the total width and height of an HTML box",
                "To define the box model for HTML elements",
            ],
            answer: "To include the margin in the total width and height of an HTML box",
            difficulty: "Hard",
        },
        {
            question:
                "Which of the following is a server-side scripting language?",
            options: ["HTML", "CSS", "JavaScript", "PHP"],
            answer: "PHP",
            difficulty: "Hard",
        },
        {
            question: "What is a 'Promise' in JavaScript?",
            options: [
                "A commitment to do something in the future",
                "A type of data structure",
                "A function that returns a value",
                "A way to handle asynchronous operations",
            ],
            answer: "A way to handle asynchronous operations",
            difficulty: "Hard",
        },
        {
            question:
                "What is the purpose of the 'localStorage' in web development?",
            options: [
                "To store data in a cookie",
                "To store data on the server",
                "To store data on the client's device",
                "To store data in the browser's cache",
            ],
            answer: "To store data on the client's device",
            difficulty: "Hard",
        },
    ];
    const [currStage, setCurrStage] = useState(0);

    const [marks, setMarks] = useState(0);

    function handleNext() {
        if (currStage < data.length) setCurrStage((s) => s + 1);
    }
    function handlePrevious() {
        if (currStage > 0) setCurrStage((s) => s - 1);
        // console.log(currStage);
    }

    function handleMarks(mark) {
        setMarks((prevMark) => prevMark + mark);
    }

    function preventPrevNav() {
        // setCurrStage((s) => currstage);
    }

    var id = "";
    function handleAnswers(chose) {
        const ans = data[currStage].answer;
        // console.log(ans);
        id = `q${currStage + 1}-opt${chose.optNo}`;
        // console.log(id);
        const selectedAnswer = document.getElementById(id).value;
        // console.log(selectedAnswer);
        if (ans === selectedAnswer) {
            alert("Congrats!");
            handleMarks(4);
            handleNext();
            preventPrevNav();
        } else {
            alert("Sorry!");
            handleMarks(-1);
            preventPrevNav();
        }
        console.log(marks);
    }

    return (
        <div className="bg-white rounded-md shadow-lg  text-black p-10">
            <Header
                quesNum={currStage + 1}
                difficulty={data[currStage].difficulty}
                total={data.length}
                gotMark={marks}
            ></Header>
            <Questions>{data[currStage].question}</Questions>
            <div id="options" className="space-y-5 text-white">
                {data[currStage].options.map((option, index) => (
                    <Options
                        onHandleAnswer={handleAnswers}
                        key={index + 1}
                        optNo={index + 1}
                        qNo={currStage + 1}
                    >
                        {option}
                    </Options>
                ))}
            </div>

            <Navigation
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
            ></Navigation>
        </div>
    );
}
