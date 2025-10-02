// On page load
const studentName = prompt("Welcome to USIU! What's your first name?");
const studentId = prompt("Enter your Student ID (e.g., 6345**):");
alert("Karibu USIU, " + studentName + "! 🎓");
console.log("Student entered name:", studentName);
console.log("Student ID:", studentId);
document.getElementById("greeting").textContent = "Hello, " + studentName + "! 👋";

function runEstimator() {
    const days = Number(prompt("How many days per week do you come to campus? (e.g., 4)"));
    const costPerTrip = Number(prompt("Average matatu/bus cost from your area to campus (one way in KSh)? (e.g., 200)"));
    const snacksPerDay = Number(prompt("How many snacks do you buy per day? (Coffee at Paul's Caffe, samosas, etc.) (e.g., 3)"));
    const snackPrice = Number(prompt("Average price per snack (KSh)? (e.g., 150)"));

    const transportWeekly = days * costPerTrip * 2; // to & from campus
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10;
    const totalWithSavings = totalWeekly - save10;

   console.log({
        days,
        costPerTrip,
        snacksPerDay,
        snackPrice,
        transportWeekly,
        snacksWeekly,
        totalWeekly,
        save10,
        totalWithSavings
    });

    const summary = `
Generated for: ${studentName} (ID: ${studentId})
Location: USIU-A Campus

═══════════════════════════════════
WEEKLY BUDGET BREAKDOWN
═══════════════════════════════════
Transport :  KSh ${transportWeekly}
Snacks :     KSh ${snacksWeekly}
───────────────────────────────────
Weekly Total:                       KSh ${totalWeekly}

💡 SMART TIP:
If you reduce snack runs by 10% (maybe bring 
packed lunch 1-2 days or carpool with friends):
You'd save approximately:           KSh ${Math.round(save10)}
New weekly total:                   KSh ${Math.round(totalWithSavings)}

💰 Monthly Estimate (4 weeks):       KSh ${totalWeekly * 4}
`;

    document.getElementById("summary").innerText = summary;
    alert("Check your personalized USIU budget summary below! 📊 All details are in the console.");
}

function toggleTheme() {
    const current = document.body.style.backgroundColor;
    
    if (current === "white" || current === "") {
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "white";
        console.log("Theme changed to: Night Mode (Dark)");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Theme changed to: Day Mode (Light)");
    }
    
    console.log("Current background color:", document.body.style.backgroundColor);
}