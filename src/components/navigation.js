export default function Navigation({ onClickNext, onClickPrevious }) {
    return (
        <div id="navigate" className="mt-5">
            <hr className="mt-10 mb-5" id="line" />
            <div className="flex justify-between">
                <div>
                    <button
                        className="text-5xl hover:scale-110 active:-rotate-12 duration-200"
                        onClick={() => onClickPrevious()}
                    >
                        👈
                    </button>
                </div>
                <div>
                    <button
                        className="text-5xl hover:scale-110 active:rotate-12 duration-200"
                        onClick={() => onClickNext()}
                    >
                        👉
                    </button>
                </div>
            </div>
        </div>
    );
}
