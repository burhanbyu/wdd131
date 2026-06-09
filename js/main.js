/* =========================
   REFUGEE PROGRAM DATA
   (Objects + Array Requirement)
========================= */
const programs = [
    {
        name: "Government-Assisted Refugees (GAR)",
        description: "Refugees supported directly by the Canadian government after referral from UNHCR or other organizations."
    },
    {
        name: "Private Sponsorship of Refugees (PSR)",
        description: "Refugees sponsored by Canadian citizens, organizations, or community groups."
    },
    {
        name: "Blended Visa Office-Referred (BVOR)",
        description: "A shared program where both government and private sponsors support refugees."
    }
];

/* =========================
   DISPLAY PROGRAM CARDS
   (DOM + Template Literals + Array Method)
========================= */
function displayPrograms() {
    const container = document.querySelector("#programCards");

    if (!container) return;

    programs.forEach(program => {
        container.innerHTML += `
            <div class="card">
                <h3>${program.name}</h3>
                <p>${program.description}</p>
            </div>
        `;
    });
}

/* =========================
   VISIT COUNTER
   (localStorage + Conditional Logic)
========================= */
function trackVisits() {
    const visitMessage = document.querySelector("#visitMessage");

    if (!visitMessage) return;

    let visits = Number(localStorage.getItem("visits")) || 0;
    visits++;

    localStorage.setItem("visits", visits);

    if (visits === 1) {
        visitMessage.textContent = "Welcome! This is your first visit.";
    } else {
        visitMessage.textContent = `You have visited this website ${visits} times.`;
    }
}

/* =========================
   FORM VALIDATION
   (DOM + Event Listener + Conditional Branching)
========================= */
function setupFormValidation() {
    const form = document.querySelector("#contactForm");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        const message = document.querySelector("#message");

        if (message.value.trim().length < 10) {
            event.preventDefault();
            alert("Please enter at least 10 characters in your message.");
        }
    });
}

/* =========================
   INITIALIZE FUNCTIONS
========================= */
displayPrograms();
trackVisits();
setupFormValidation();