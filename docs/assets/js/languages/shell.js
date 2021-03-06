Rainbow.extend("shell", [
    { name: "shell", matches: { 1: { language: "shell" } }, pattern: /\$\(([\s\S]*?)\)/gm },
    { matches: { 2: "string" }, pattern: /(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm },
    { name: "keyword.operator", pattern: /&lt;|&gt;|&amp;/g },
    { name: "comment", pattern: /\#[\s\S]*?$/gm },
    { name: "storage.function", pattern: /(.+?)(?=\(\)\s{0,}\{)/g },
    { name: "support.command", pattern: /\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g },
    { matches: { 1: "keyword" }, pattern: /\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\b)/g },
]);