import { useState, useEffect, useRef, useMemo } from 'react';
import { getCommands, getWelcomeMessage } from '../data/commands';
import './Terminal.css';

const Terminal = ({ lang = 'es', onLanguageChange }) => {
    const commands = useMemo(() => getCommands(lang, onLanguageChange), [lang, onLanguageChange]);

    const [history, setHistory] = useState([
        { type: 'output', content: getWelcomeMessage(lang) }
    ]);
    const [input, setInput] = useState('');
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    // Keep initial welcome message updated if language changes before any interaction
    useEffect(() => {
        setHistory(prev => {
            if (prev.length === 1 && prev[0].type === 'output') {
                return [{ type: 'output', content: getWelcomeMessage(lang) }];
            }
            return prev;
        });
    }, [lang]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: cmd }];

        if (!trimmedCmd) {
            setHistory(newHistory);
            return;
        }

        setCmdHistory(prev => [cmd, ...prev]); // Keep original casing in history
        setHistoryIndex(-1);

        if (trimmedCmd === 'clear') {
            setHistory([{ type: 'output', content: getWelcomeMessage(lang) }]);
            return;
        }

        const command = commands[trimmedCmd];

        if (command) {
            newHistory.push({ type: 'output', content: command.output });
            if (command.action) {
                command.action();
            }
        } else {
            const errorMsg = lang === 'en'
                ? `command not found: ${trimmedCmd}. Type 'help' to see available commands.`
                : `comando no encontrado: ${trimmedCmd}. Escribe 'help' para ver los comandos disponibles.`;
            newHistory.push({
                type: 'error',
                content: errorMsg
            });
        }

        setHistory(newHistory);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < cmdHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(cmdHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(cmdHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const lowerInput = input.toLowerCase();
            const availableCommands = Object.keys(commands);
            const match = availableCommands.find(c => c.toLowerCase().startsWith(lowerInput));
            if (match) {
                setInput(match);
            }
        }
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-window" onClick={focusInput}>
            <div className="terminal-header">
                <div className="window-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                </div>
                <span className="window-title">pablo_carrasco — -zsh — 80x24</span>
            </div>
            <div className="terminal-body">
                {history.map((entry, index) => (
                    <div key={index} className={`history-entry ${entry.type}`}>
                        {entry.type === 'input' ? (
                            <div className="input-line">
                                <span className="prompt">➜  ~</span>
                                <span className="cmd-text">{entry.content}</span>
                            </div>
                        ) : (
                            <div className="output-content">{entry.content}</div>
                        )}
                    </div>
                ))}

                <div className="input-line current">
                    <span className="prompt">➜  ~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        spellCheck="false"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
