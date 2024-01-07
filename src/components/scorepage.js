export default function FinalScore({ totQues, totMark, attempt, correct }) {
    function restart() {
        window.location.reload();
    }
    return (
        <>
            <div className="text-black md:p-5 rounded-xl text-center">
                <p className="text-center font-bold italic text-3xl">
                    Full Score!
                </p>
                <div className="md:m-10 m-5 md:text-xl">
                    <p>Total Questions: {totQues}</p>
                    <p>Attempted: {attempt}</p>
                    <p>Correct: {correct}</p>
                    <p>Total Score: {correct}</p>
                </div>
                <button
                    className="px-4 py-3 mt-5 bg-black text-white rounded hover:shadow-lg hover:opacity-75 duration-300 active:scale-95"
                    onClick={() => restart()}
                >
                    Restart
                </button>
            </div>
        </>
    );
}
