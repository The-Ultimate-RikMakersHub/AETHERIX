// ==========================================================================
// 🛸 AETHERIX ASYNCHRONOUS MULTI-PAGE ROUTER & DATA INGESTION ENGINE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("⚙️ AETHERIX 7-Tab Industrial Router Engaged.");

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
                
                // Clear out any residual sub-page data layout nodes that were fetched earlier
                const fetchedChildren = viewportMountElement.querySelectorAll(".fetched-fragment-wrapper");
                fetchedChildren.forEach(child => child.remove());
                
                // Inject native memory metrics directly into the static dashboard row readout
                const ramContainer = document.getElementById("detected-ram-buffer");
                if (ramContainer) {
                    ramContainer.textContent = `${localHardwareRam} GB RAM`;
                }
                return; // Cease execution immediately. No network fetch operation required!
            }
        }

        // Isolate the target local layout filename pathway for the other 6 tabs
        const targetFilePath = routingModulePaths[activeUrlHash];
        if (!targetFilePath || targetFilePath === "STATIC_BAKED_SHELL") {
            window.location.hash = "#/content";
            return;
        }

        // Hide the main home page syllabus panel so the oncoming sub-page layout can render cleanly
        const staticNode = document.getElementById("static-content-tab");
        if (staticNode) {
            staticNode.style.display = "none";
        }

        // Display low-contrast tactical loader trace message while fetching data arrays
        viewportMountElement.innerHTML = `
            <div class="loading-matrix-trace">
                <span class="spinner-token"></span>
                <p>STREAMING NODE VECTOR: [${targetFilePath.toUpperCase()}] ... STANDBY FOR CONTENT MOUNT</p>
            </div>
        `;

        try {
            // Fetching the independent static view fragment code block from the views/ directory
            const executionResponse = await fetch(targetFilePath);
            
            if (!executionResponse.ok) throw new Error(`HTTP Fault Status: ${executionResponse.status}`);
            
            const layoutHtmlFragmentString = await executionResponse.text();
            
            // Wrap the incoming text string fragment in an isolated layout container class node
            viewportMountElement.innerHTML = `<div class="fetched-fragment-wrapper">${layoutHtmlFragmentString}</div>`;
            
            // Initialize functional event triggers inside the freshly fetched file templates
            initializeDynamicModuleTriggers(activeUrlHash);

        } catch (error) {
            console.error("⚠️ Async Route Fetch Failure:", error);
            viewportMountElement.innerHTML = `
                <div class="loading-matrix-trace" style="color: #ef4444;">
                    <p style="font-weight: 700;">⚠️ 404 // OPERATION COMPONENT ROUTE INTERRUPTED</p>
                    <p style="font-size: 0.7rem; margin-top: 4px;">Ensure the file sits inside your <code>views/</code> directory container.</p>
                </div>
            `;
        }
    }

    // Dynamic Module Functional Binding Engine (Triggers calculations when files mount)
    function initializeDynamicModuleTriggers(route) {
        // Active computation trigger hook for the OBELISK local obfuscation deck tool
        if (route === "#/obelisk") {
            const btn = document.getElementById("scramble-trigger-node");
            const input = document.getElementById("payload-string");
            const output = document.getElementById("output-armored");
            
            if (btn && input && output) {
                btn.addEventListener("click", () => {
                    const rawVal = input.value;
                    let result = "";
                    for(let i = 0; i < rawVal.length; i++) {
                        result += String.fromCharCode(rawVal.charCodeAt(i) ^ 0x0F);
                    }
                    output.value = `AETH_SEC_VAULT_v1[${btoa(result)}]`;
                    console.log("🔒 Data obfuscation loops successfully completed calculations.");
                });
            }
        }
    }

    // ==========================================================================
    // 💬 DATA INGESTION: ASYNCHRONOUS STATIC JSON GUESTBOOK INTERFACE
    // ==========================================================================
    async function ingestStaticFeedbackLedger() {
        const streamContainer = document.getElementById("feedback-logs-stream");
        if (!streamContainer) return;

        try {
            // Fetching the independent static JSON file chunk directly from GitHub Pages edge
            const dataResponse = await fetch("feedback.json?nocache=" + new Date().getTime());
            
            if (!dataResponse.ok) throw new Error(`HTTP Storage Fault: ${dataResponse.status}`);
            const feedbackRecordsList = await dataResponse.json();

            if (feedbackRecordsList.length === 0) {
                streamContainer.innerHTML = `<p style="color: #6e6e73; font-style: italic;">No public transmission records found in database vault.</p>`;
                return;
            }

            // Loop through the data records and map them cleanly right onto the screen grid
            streamContainer.innerHTML = feedbackRecordsList.map(record => {
                return `
                    <div style="border-left: 2px solid #ececec; padding-left: 10px; margin-bottom: 8px; text-align: left;">
                        <span style="font-weight: 600; color: #000000;">➔ [${record.author}]:</span>
                        <span style="color: #000000; font-family: -apple-system, sans-serif; font-size: 0.85rem; margin-left: 4px;">"${record.comment}"</span>
                        <span style="color: #6e6e73; font-size: 0.65rem; margin-left: 6px; font-family: monospace; text-transform: uppercase;">- ${record.timestamp}</span>
                    </div>
                `;
            }).join("");

        } catch (error) {
            console.error("⚠️ Failed to parse static feedback JSON stream line:", error);
            streamContainer.innerHTML = `<p style="color: #ef4444; font-size: 0.75rem;">Unable to establish secure telemetry bridge to local JSON file data log storage.</p>`;
        }
    }

    // Interactive Dispatch Chamber Action Listener Setup
    function setupFeedbackDispatchTriggers() {
        const submitBtn = document.getElementById("feedback-submit-node");
        const textInput = document.getElementById("feedback-user-text");

        if (submitBtn && textInput) {
            submitBtn.addEventListener("click", () => {
                const userRemarksString = textInput.value.trim();
                if (userRemarksString === "") {
                    alert("Please enter structural evaluation comments before dispatching message string.");
                    return;
                }

                // Serverless redirection macro filling out the GitHub issue data parameters smoothly
                const repoIssueUrl = `https://github.com{encodeURIComponent("[AETHERIX_FEEDBACK] " + userRemarksString)}&body=${encodeURIComponent("Submitted via AETHERIX Production Web Console Deck Grid Node.")}`;
                
                // Clear the input text block to confirm data capture processing locally
                textInput.value = "";
                
                // Launch the open issue repository composer tab panel workspace
                window.open(repoIssueUrl, "_blank");
            });
        }
    }

    // Bind event listeners tracking browser URL window hash shifts
    window.addEventListener("hashchange", executeAsyncRouteSwap);
    
    // Boot the application matrix processes on initial mount layer execution
    executeAsyncRouteSwap();
    ingestStaticFeedbackLedger();
    setupFeedbackDispatchTriggers();
});

// PWA background offline network asset registry proxy layer
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(err => console.error(err));
    });
}
