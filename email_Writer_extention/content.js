console.log("Email Writer Extension Loaded");

//
//
// 1. SELECTORS
//

const TOOLBAR_SELECTORS = [
    ".aDh",                     // Inline reply toolbar
    ".btC .aDh",                // New compose toolbar wrapper
    "[role='dialog'] .aDh",     // Popup compose window toolbar
    ".gU.Up"                    // Older Gmail toolbar container
];

const EMAIL_CONTENT_SELECTORS = [
    ".h7",              // Gmail reply block text
    ".a3s.aiL",         // Main message body in thread
    ".gmail_quote",     // Quoted email area
    "[dir='ltr']"       // Fallback for content direction
];

const COMPOSE_DETECT_SELECTORS = ".aDh, .btC, [role='dialog']";


//
// 2. FIND TOOLBAR
//

function findComposeToolbar() {
    for (const selector of TOOLBAR_SELECTORS) {
        const toolbar = document.querySelector(selector);
        if (toolbar) return toolbar;
    }
    return null;
}

//
// 3. GET EMAIL CONTENT
//

function getEmailContent() {
    for (const selector of EMAIL_CONTENT_SELECTORS) {
        const content = document.querySelector(selector);
        if (content) return content.innerText.trim();
    }
    return "";
}

//
// 4. CREATE AI BUTTON
//

function createAIButton() {
    const button = document.createElement("div");
    button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3 ai-reply-button";
    button.style.marginRight = "8px";
    button.innerHTML = "ReplyByAI";
    button.setAttribute("role", "button");
    button.setAttribute("data-tooltip", "Generate AI Reply");
    return button;
}

//
// 5. INJECT BUTTON
//

function injectButton() {
    const existing = document.querySelector(".ai-reply-button");
    if (existing) existing.remove();

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    console.log("Toolbar found. Injecting AI button...");

    const button = createAIButton();

    button.addEventListener("click", async () => {
        try {
            button.innerHTML = "Generating...";
            button.style.opacity = "0.6";

            const emailContent = getEmailContent();
            console.log("Collected Email Content:", emailContent);

            const response = await fetch("http://localhost:8080/api/email/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    emailContent: emailContent,
                    tone: "professional"
                })
            });

            if (!response.ok) throw new Error("API request failed");

            const generatedReply = await response.text();

            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand("insertText", false, generatedReply);
            } else {
                console.error("Compose textbox not found");
            }

        } catch (err) {
            console.error(err);
            alert("Failed to generate AI reply");
        } finally {
            button.innerHTML = "ReplyByAI";
            button.style.opacity = "1";
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

//
// 6. OBSERVER
//

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);

        const hasCompose = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (
                node.matches?.(COMPOSE_DETECT_SELECTORS) ||
                node.querySelector?.(COMPOSE_DETECT_SELECTORS)
            )
        );

        if (hasCompose) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

/*
console.log("Email Writer Extension Loaded");

// 1️⃣ Find Gmail compose toolbar (where SEND button is)
function findComposeToolbar() {
    // This is the container that holds the SEND button
    return document.querySelector('.btC'); 
}

// 2️⃣ Find the SEND button so we can insert BEFORE it
function findSendButton() {
    return document.querySelector('.btC .T-I.J-J5-Ji.aoO');
}

// 3️⃣ Extract the reply email body
function getEmailContent() {
    const box = document.querySelector('[role="textbox"][g_editable="true"]');
    return box ? box.innerText.trim() : "";
}

// 4️⃣ Create the AI Reply Button
function createAIButton() {
    const button = document.createElement("div");

    button.className = "T-I J-J5-Ji aoO v7";
    button.style.background = "#1a73e8";
    button.style.color = "white";
    button.style.padding = "8px 16px";
    button.style.borderRadius = "4px";
    button.style.marginRight = "8px";
    button.style.cursor = "pointer";

    button.innerText = "AI Reply";

    return button;
}

// 5️⃣ Inject AI Button before SEND
function injectButton() {
    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("⚠ Toolbar not found");
        return;
    }

    const sendBtn = findSendButton();
    if (!sendBtn) {
        console.log("⚠ Send button not found");
        return;
    }

    // Avoid duplicates
    if (toolbar.querySelector(".ai-reply-btn")) return;

    console.log("✔ Toolbar found — inserting AI button");

    const aiButton = createAIButton();
    aiButton.classList.add("ai-reply-btn");

    // 👉 Insert BEFORE the SEND button
    toolbar.insertBefore(aiButton, sendBtn);

    // 6️⃣ When AI button pressed → call backend
    aiButton.addEventListener("click", async () => {
        try {
            aiButton.innerText = "Generating…";
            aiButton.style.opacity = "0.6";

            const emailContent = getEmailContent();

            const response = await fetch("http://localhost:8080/api/email/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    emailContent,
                    tone: "Professional"
                })
            });

            const reply = await response.text();

            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            composeBox.focus();
            document.execCommand("insertText", false, reply);

        } catch (err) {
            console.error(err);
            alert("AI Reply Failed");
        } finally {
            aiButton.innerText = "AI Reply";
            aiButton.style.opacity = "1";
        }
    });
}

// 7️⃣ MutationObserver – Detect new compose windows
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const added = [...mutation.addedNodes];

        const composeFound = added.some(node =>
            node.nodeType === 1 && node.querySelector?.('.btC')
        );

        if (composeFound) {
            console.log("✉ Compose window detected");
            setTimeout(injectButton, 300);
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });
*/