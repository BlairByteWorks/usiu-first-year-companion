USIU First-Year Companion.
New Students of USIU Orientation Week

What and why?
This static microsite can allow first-time students at USIU to customize orientation by greeting them by name.
It provides a customized estimate for campus commuting expenses as well as snack expenses (Sironi, Paul's Caffe, etc.
•	Practical tips such as minimizing snack runs
•	Day-night theme button for easy visibility under late-night reading situations

Written in vanilla JavaScript (Lesson-1), HTML5, and CSS—no frameworks. This MVP demonstrates fundamentals of JavaScript: prompts, arithmetic, DOM manipulation, string concatenation, and rudimentary styling with `document.body.style`.

Who
-Target User: 
First-time commuter students of USIU during Orientation Week who need a simplified, customized budgeting instrument that reflects actual expenditures on campus.

USIU Specific Features

Thika Road Commute Cost Calculator: Computes actual matatu/bus transport costs to campus.
Snack Costs: References Sironi, Paul’s Caffe on campus, and vendors nearby
Savings Advice:
Pack lunch 1-2 days a week instead of purchasing snacks.
10% reduction tip with specific behavior changes
Personalized Output: Prints student name and ID on overview.
USIU Branding: blue accent complements.
Running Locally (without Docker)
1. Clone or download this repository
2. Open `index.html` in a web browser
3. Enter your name and Student ID when prompted
4. Weekly expenses: 
•	Campus Days (for example, 4)
•	Transport charge from your area (e.g., 100 KSh)
•	Daily snacks (e.g., 2)
•	Snack cost (e.g., 150 KSh – Paul’s caffe’s coffee & samosa)
5. Check your custom weekly and monthly allowance.

How to Build/Run with Docker

1. Build the Docker image:
    docker build -t blairbytesworks/usiu-first-year-companion .

2. Run the container:
    docker run --rm -p 8080:80 blairbytesworks/usiu-first-year-companion

3.Open in browser:
   Navigate to http://localhost:8080

Calculation of Budget
Example Student: John Doe (ID: 786453)
Inputs
Days: 4 per week
Transport: KSh 200 one-way
Snacks: 2 per day
Cost per snack: KSh 200
Results
Weekly transportation: KSh 1600 (4 × 200 × 2)
Snacks per Week: KSh 1,600 (4 × 2 × 200)
Weekly Total: KSh 3,200
Monthly Estimate: KSh 12,800
10% discount: KSh 320/Wk by bringing lunch once a week

Limitations & Next Steps
•	It uses prompt() for taking inputs (to be replaced by forms later)
•	Theme toggle on page reload resets (-no localStorage in v1)
•	Transport fees are an estimate; matatu fares vary per trip.
•	Average prices per snack by Sironi and Paul’s caffeand nearby vendor
Future improvements:
•	Route-specific transport expenses (Westlands, CBD, Ruaka, etc.)
•	Campus food meal plan calculator
•	Budgeting textbook tool
•	Social activities budget planner
•	Incorporation of USIU student portal

Deliverables.

Live GitHub Pages URL: https://blairbyteworks.github.io/usiu-first-year-companion/

GitHub Repository Link: https://github.com/BlairByteWorks/usiu-first-year-companion

Published Docker Image: https://hub.docker.com/r/blairbytesworks/usiu-first-year-companion/tags
