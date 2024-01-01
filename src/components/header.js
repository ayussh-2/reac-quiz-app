export default function Header({ quesNum, difficulty, total, gotMark }) {
    return (
        <div className="justify-between flex">
            <div id="quesCount">Q{quesNum}</div>
            <div className="text-xl">
                {difficulty}
                <span className="text-3xl">
                    {difficulty === "Easy"
                        ? "👶"
                        : difficulty === "Hard"
                        ? "🤔"
                        : "🤓"}
                </span>
            </div>

            <div id="outof">
                {quesNum}/{total}
            </div>
        </div>
    );
}
