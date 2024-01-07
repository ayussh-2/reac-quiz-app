export default function Navigation({
    onClickNext,
    onClickPrevious,
    onClickSubmit,
}) {
    return (
        <div id="navigate" className="mt-5">
            <hr className="mt-10 mb-5" id="line" />
            <div className="flex justify-between">
                <div>
                    <button
                        className="md:text-5xl text-3xl hover:scale-110 active:-rotate-12 duration-200"
                        onClick={() => onClickPrevious()}
                    >
                        👈
                    </button>
                </div>
                <div>
                    <button
                        className="text-2xl md:scale-90 scale-75 text-white px-4 py-2 hover:opacity-75 active:scale-95 duration-200 md:mt-3 bg-btn rounded-xl"
                        onClick={() => onClickSubmit()}
                    >
                        Submit
                    </button>
                </div>
                <div>
                    <button
                        className="md:text-5xl text-3xl hover:scale-110 active:rotate-12 duration-200"
                        onClick={() => onClickNext()}
                    >
                        👉
                    </button>
                </div>
            </div>
        </div>
    );
}
