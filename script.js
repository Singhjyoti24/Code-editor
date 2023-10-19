document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.code-editor__textarea');
    const output = document.querySelector('.code-editor__output');
    const copyButton = document.querySelector('.code-editor__button--copy');
    const saveButton = document.querySelector('.code-editor__button--save');
    const lockButton = document.querySelector('.code-editor__button--lock');
    let isLocked = false;

    textarea.addEventListener('input', formatCode);

    copyButton.addEventListener('click', function () {
        textarea.select();
        document.execCommand('copy');
    });

    lockButton.addEventListener('click', function () {
        isLocked = !isLocked;
        lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
        textarea.disabled = isLocked;
        saveButton.disabled = isLocked;
    });

    saveButton.addEventListener('click', function () {
        const code = textarea.value;
        // Implement your save functionality here
        // Example: You can send the code to a server using AJAX
        // or store it locally in some way
        output.textContent = 'Code saved!';
    });

    function formatCode() {
        // Implement code indentation logic here (e.g., using regular expressions)
        // This is a simplified example that indents code with two spaces
        if (!isLocked) {
            const code = textarea.value;
            const formattedCode = code.replace(/^/gm, '  '); // Indent with two spaces
            textarea.value = formattedCode;
        }
    }
});

document.getElementById('run-button').addEventListener('click', function () {
    // Get the code from the textarea
    const code = document.getElementById('textarea').value;

    try {
        // Try to execute the code
        const result = eval(code);
        document.getElementById('output').innerText = result;
    } catch (error) {
        // Handle errors
        document.getElementById('output').innerText = 'Error: ' + error.message;
    }
});
