import React from 'react';
import { useState } from 'react';

function BetActions({ onRunBet, onChangeLines, inGameBallsCount }) {
    const [betValue, setBetValue] = useState(0);
    const maxLinesQnt = 16;
    const linesOptions = [];

    for (let i = 8; i <= maxLinesQnt; i++) {
        linesOptions.push(i);
    }

    function handleChangeBetValue(e) {
        e.preventDefault();
        const value = +e.target.value;
        const newBetValue = value;
        setBetValue(newBetValue);
    }

    function handleChangeLines(e) {
        onChangeLines(Number(e.target.value));
    }

    function handleHalfBet() {
        const value = betValue / 2;
        const newBetvalue = value <= 0 ? 0 : Math.floor(value);
        setBetValue(newBetvalue);
    }

    function handleDoubleBet() {
        const value = betValue * 2;

        const newBetvalue = value <= 0 ? 0 : Math.floor(value);
        setBetValue(newBetvalue);
    }

    async function handleRunBet() {
        onRunBet(betValue);
    }

    return (
        <div className="relative h-1/2 w-full flex-1 px-4 py-8">
            <div className="flex h-full flex-col gap-4 rounded-md bg-primary p-4 text-text md:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-stretch gap-1 md:flex-col">
                        <div className="w-full text-sm font-bold md:text-base">
                            <div className="flex items-stretch justify-center shadow-md">
                                <input
                                    type="number"
                                    min={0}
                                    onChange={handleChangeBetValue}
                                    value={betValue}
                                    className="w-full rounded-bl-md rounded-tl-md border-2 border-secondary bg-background p-2.5 px-4 font-bold transition-colors placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none md:p-2"
                                />
                                <button
                                    onClick={handleHalfBet}
                                    className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                                >
                                    ½
                                </button>
                                <button
                                    onClick={handleDoubleBet}
                                    className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                                >
                                    2x
                                </button>
                                <button className="rounded-br-md rounded-tr-md border-2 border-transparent bg-secondary p-2 px-3 text-xs transition-colors hover:bg-secondary/80 focus:border-purple focus:outline-none">
                                    max
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleRunBet}
                            className="block rounded-md bg-purple px-2 py-4 text-sm font-bold leading-none text-background transition-colors hover:bg-purpleDark focus:outline-none focus:ring-1 focus:ring-purple focus:ring-offset-1 focus:ring-offset-primary disabled:bg-gray-500 md:hidden"
                        >
                            Хуярь
                        </button>
                    </div>
                    <select
                        disabled={inGameBallsCount > 0}
                        onChange={handleChangeLines}
                        defaultValue={16}
                        className="w-full rounded-md border-2 border-secondary bg-background px-4 py-2 font-bold transition-all placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none disabled:line-through disabled:opacity-80"
                        id="lines"
                    >
                        {linesOptions.map((line) => (
                            <option key={line} value={line}>
                                {line} Linhas
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default BetActions;
