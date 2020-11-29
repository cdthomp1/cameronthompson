const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:camthomp96@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Ok, bye.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("        Cameron Thompson"),
    work: `${chalk.white("Student Software Developer")} ${chalk
        .hex("#2b82b2")
        .bold("BYU-I")}`,
    blog: chalk.gray("https://dev.to/") + chalk.whiteBright("cdthomp1"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("DeveloperCam"),
    /* npm: chalk.gray("https://npmjs.com/") + chalk.red("~ridermansb"), */
    github: chalk.gray("https://github.com/") + chalk.green("cdthomp1"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("cameron-thompson96"),
    web: chalk.cyan("https://cameronthompson.io"),
    npx: chalk.red("npx") + " " + chalk.white("cameronthompson"),

    labelWork: chalk.white.bold("       Work:"),
    labelBlog: chalk.white.bold("     Medium:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    /* labelnpm: chalk.white.bold("        npm:"), */
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        /* `${data.labelnpm}  ${data.npm}`, */
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm curious, enthusiastic and student most of the time."
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code,")}`,
        `${chalk.italic("to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());