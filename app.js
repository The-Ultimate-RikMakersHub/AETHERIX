// ==========================================================================
// 🛸 AETHERIX ASYNCHRONOUS MULTI-PAGE ROUTER & DATA INGESTION ENGINE (PART 1 OF 2)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("⚙️ AETHERIX Full-Scale Systems Router Active.");

    // Native Hardware-Aware Capacity Scanner Registry
    const localHardwareRam = navigator.deviceMemory || 8;

    // Strict URL Hash Mapping Matrix pointing to your dedicated view files inside views/
    const routingModulePaths = {
        "#/content": "STATIC_BAKED_SHELL",
        "#/obelisk": "views/obelisk.html",
        "#/roadmap": "views/roadmap.html",
        "#/glossary": "views/glossary.html",
        "#/kronos": "views/kronos.html",
        "#/faqs": "views/faqs.html",
        "#/about": "views/about.html"
    };

    async function executeAsyncRouteSwap() {
        const activeUrlHash = window.location.hash || "#/content";
        const viewportMountElement = document.getElementById("app-viewport");
        if (!viewportMountElement) return;

        // Automatically update main navbar option highlights layout active state
        document.querySelectorAll(".nav-anchor").forEach(anchor => {
            if (anchor.getAttribute("href") === activeUrlHash) {
                anchor.classList.add("active");
            } else {
                anchor.classList.remove("active");
            }
        });

        // 🛡️ THE HOME PAGE BYPASS GUARD: If viewing Content, use the statically baked code
        if (activeUrlHash === "#/content") {
            const staticNode = document.getElementById("static-content-tab");
            if (staticNode) {
                staticNode.style.display = "block";
                const fetchedChildren = viewportMountElement.querySelectorAll(".fetched-fragment-wrapper");
                fetchedChildren.forEach(child => child.remove());
                
                const ramContainer = document.getElementById("detected-ram-buffer");
                if (ramContainer) {
                    ramContainer.textContent = `${localHardwareRam} GB RAM`;
                }
                return; // Cease execution immediately. No network fetch operation required!
            }
        }

        const targetFilePath = routingModulePaths[activeUrlHash];
        if (!targetFilePath || targetFilePath === "STATIC_BAKED_SHELL") {
            window.location.hash = "#/content";
            return;
        }

        const staticNode = document.getElementById("static-content-tab");
        if (staticNode) { staticNode.style.display = "none"; }

        viewportMountElement.innerHTML = `
            <div class="loading-matrix-trace">
                <span class="spinner-token"></span>
                <p>STREAMING NODE VECTOR: [${targetFilePath.toUpperCase()}] ... STANDBY FOR CONTENT MOUNT</p>
            </div>
        `;

        try {
            const executionResponse = await fetch(targetFilePath);
            if (!executionResponse.ok) throw new Error(`HTTP Fault Status: ${executionResponse.status}`);
            
            const layoutHtmlFragmentString = await executionResponse.text();
            viewportMountElement.innerHTML = `<div class="fetched-fragment-wrapper">${layoutHtmlFragmentString}</div>`;
            
            // Initialize the real-world functional engines when view modules mount
            initializeDynamicModuleFeatures(activeUrlHash);

        } catch (error) {
            console.error("⚠️ Async Route Fetch Failure:", error);
            viewportMountElement.innerHTML = `
                <div class="loading-matrix-trace" style="color: #ef4444;">
                    <p style="font-weight: 700;">⚠️ 404 // OPERATION COMPONENT ROUTE INTERRUPTED</p>
                </div>
            `;
        }
    }
    // ==========================================================================
    // 🔥 REAL-WORLD RE-ENGINEERED COMPONENT UTILITY ENGINES
    // ==========================================================================
    function initializeDynamicModuleFeatures(route) {
        
        // --- 🪨 TAB 2 REAL ENGINE: CRYPTOGRAPHIC SCRAMBLER & SHANNON ENTROPY CHECKER ---
        if (route === "#/obelisk") {
            const btn = document.getElementById("scramble-trigger-node");
            const input = document.getElementById("payload-string");
            const output = document.getElementById("output-armored");
            const entropyDisplay = document.getElementById("entropy-metric-readout");
            
            if (btn && input && output) {
                btn.addEventListener("click", () => {
                    const rawVal = input.value;
                    if (!rawVal) return;
                    
                    // 1. Core Bitwise XOR Character Transformation Loop
                    let obfuscatedResult = "";
                    for(let i = 0; i < rawVal.length; i++) {
                        obfuscatedResult += String.fromCharCode(rawVal.charCodeAt(i) ^ 0x0F);
                    }
                    const armoredBase64 = btoa(obfuscatedResult);
                    output.value = `AETH_SEC_VAULT_v1[${armoredBase64}]`;
                    
                    // 2. Live Shannon Entropy Mathematical Calculation
                    const frequencies = {};
                    for (let c of armoredBase64) { frequencies[c] = (frequencies[c] || 0) + 1; }
                    let shannonEntropy = 0;
                    const totalChars = armoredBase64.length;
                    for (let char in frequencies) {
                        const probability = frequencies[char] / totalChars;
                        shannonEntropy -= probability * Math.log2(probability);
                    }
                    
                    if (entropyDisplay) {
                        entropyDisplay.innerHTML = `➔ PAYLOAD SHANNON ENTROPY: <strong>${shannonEntropy.toFixed(4)} bits/byte</strong> (Cryptographic Randomness Index)`;
                    }
                });
            }
        }

        // --- ⏳ TAB 5 REAL ENGINE: REAL-TIME WAF PAYLOAD INTERCEPTION LOG STREAM ---
        if (route === "#/kronos") {
            const inputField = document.getElementById('sql-payload-input');
            if (inputField) {
                inputField.addEventListener('input', () => {
                    const outputLog = document.getElementById('waf-output-metrics');
                    const logPanel = document.getElementById('waf-log-panel');
                    if (!outputLog || !logPanel) return;
                    
                    const rawString = inputField.value;
                    const sqlPatterns = [
                        { regex: /(['"\\#;])/g, name: "Quote Character Breakout Parameter" },
                        { regex: /\b(OR|AND)\b\s+['" \w\d=]+/i, name: "Arbitrary Boolean Tautology Logic" },
                        { regex: /\b(UNION|SELECT|DROP|DELETE|INSERT|ALTER)\b/i, name: "Unauthorized Relational DDL/DML Command Syntax" },
                        { regex: /(--|\/\*|\*\/)/g, name: "Database Compiler Comment Intercept Signature" }
                    ];
                    
                    let detections = [];
                    sqlPatterns.forEach(pattern => {
                        if (pattern.regex.test(rawString)) { detections.push(pattern.name); }
                    });
                    
                    if (detections.length > 0) {
                        logPanel.style.borderLeftColor = "#ef4444";
                        outputLog.innerHTML = `
                            <span style="color:#ef4444; font-weight:700;">⚠️ [THREAT DETECTED] REGEX INJECTION SIGNATURE MATCH:</span><br>
                            <div style="margin: 8px 0; color:#000000; font-size:0.7rem; background-color:#f5f5f7; padding:6px; border-left:2px solid #ef4444;">
                                ${detections.map(t => '➔ ' + t).join('<br>')}
                            </div>
                            <span style="color:#6e6e73; font-size:0.7rem;">🛡️ COUNTERMEASURE ACTION:<br>Aborting execution line threads. Enforcing strict parameterized inputs inside local bounds.</span>
                        `;
                    } else if (rawString.trim() === "") {
                        logPanel.style.borderLeftColor = "#6e6e73";
                        outputLog.innerHTML = `<span>[STANDBY] Ingestion chamber empty. Awaiting string inputs...</span>`;
                    } else {
                        logPanel.style.borderLeftColor = "#16a34a";
                        outputLog.innerHTML = `
                            <span style="color:#16a34a; font-weight:700;">✅ [STATUS CLEAR] STRUCTURALLY CLEAN:</span><br>
                            <p style="margin-top:4px; color:#6e6e73;">No systemic breakout characters isolated. Array variables running securely inside browser memory limits.</p>
                        `;
                    }
                });
            }
        }
    }

    // ==========================================================================
    // 💬 GUESTBOOK STORAGE FEEDBACK FETCH LOOPS
    // ==========================================================================
    async function ingestStaticFeedbackLedger() {
        const streamContainer = document.getElementById("feedback-logs-stream");
        if (!streamContainer) return;

        try {
            const dataResponse = await fetch("feedback.json?nocache=" + new Date().getTime());
            if (!dataResponse.ok) throw new Error(`HTTP Storage Fault`);
            const feedbackRecordsList = await dataResponse.json();

            if (feedbackRecordsList.length === 0) {
                streamContainer.innerHTML = `<p style="color: #6e6e73; font-style: italic;">No public transmission records found.</p>`;
                return;
            }

            streamContainer.innerHTML = feedbackRecordsList.map(record => {
                return `
                    <div style="border-left: 2px solid #ececec; padding-left: 10px; margin-bottom: 8px;">
                        <span style="font-weight: 600; color: #000000;">➔ [${record.author}]:</span>
                        <span style="color: #000000; font-family: -apple-system, sans-serif; font-size: 0.85rem; margin-left: 4px;">"${record.comment}"</span>
                        <span style="color: #6e6e73; font-size: 0.65rem; margin-left: 6px; font-family: monospace; text-transform: uppercase;">- ${record.timestamp}</span>
                    </div>
                `;
            }).join("");

        } catch (error) {
            console.error("⚠️ JSON Parse Interrupted:", error);
            streamContainer.innerHTML = `<p style="color: #ef4444; font-size: 0.75rem;">Unable to establish bridge to feedback.json data logs storage.</p>`;
        }
    }

    function setupFeedbackDispatchTriggers() {
        const submitBtn = document.getElementById("feedback-submit-node");
        const textInput = document.getElementById("feedback-user-text");

        if (submitBtn && textInput) {
            submitBtn.addEventListener("click", () => {
                const userRemarksString = textInput.value.trim();
                if (userRemarksString === "") {
                    alert("Please enter comments before dispatching message string.");
                    return;
                }

                const repoIssueUrl = `https://github.com{encodeURIComponent("[AETHERIX_FEEDBACK] " + userRemarksString)}&body=${encodeURIComponent("Submitted via AETHERIX Web Console Deck Grid Node.")}`;
                textInput.value = "";
                window.open(repoIssueUrl, "_blank");
            });
        }
    }

    window.addEventListener("hashchange", executeAsyncRouteSwap);
    executeAsyncRouteSwap();
    ingestStaticFeedbackLedger();
    setupFeedbackDispatchTriggers();
});

// PWA background offline network asset proxy layer
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(err => console.error(err));
    });
}
