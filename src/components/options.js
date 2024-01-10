export default function Options({ children, onHandleAnswer, optNo, qNo }) {
    // var id = "q" + qNo + "-opt" + optNo + "-sel";
    // var highlightOpt = document.getElementById(id + "-sel");
    // highlightOpt.hidden = true;

    return (
        <div
            id="opt"
            className="flex group p-1 rounded-3xl cursor-pointer duration-700 "
            onClick={() => onHandleAnswer({ optNo })}
        >
            <div
                id={`q${qNo}-opt${optNo}-sel`}
                className="rounded-full bg-white
                    group-hover:scale-90 group-active:scale-75 duration-200 p-5"
            >
                {/* <div id={`q${qNo}-opt${optNo}-sel`}>
                    <div className="rounded-full bg-darkPink p-1"></div>
                </div> */}
            </div>
            <div className="p-2">
                <p className="tracking-wider text-sm md:text-base">
                    {children}
                </p>
            </div>
            <input
                type="text"
                id={`q${qNo}-opt${optNo}`}
                value={children}
                hidden
                readOnly
            />
        </div>
    );
}
