#! /usr/bin/env  node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright(`----------------------------------------------------------------------------------------------------------------------------`));
console.log(chalk.bgBlueBright(`--------------------------------------------        Welcome to the Bank        ---------------------------------------------`));
console.log(chalk.bgBlueBright(`----------------------------------------------------------------------------------------------------------------------------`));
let userDetails = await inquirer.prompt([
    {
        name: "user_firstName",
        type: "input",
        message: chalk.redBright(`Enter your first name:`)
    },
    {
        name: "user_lastName",
        type: "input",
        message: chalk.redBright(`Enter your last name:`)
    },
    {
        name: "user_age",
        type: "number",
        message: chalk.redBright(`Enter your age:`)
    },
    {
        name: "user_gender",
        type: "list",
        message: chalk.redBright(`Select your gender:`),
        choices: [`Male`, `Female`]
    },
    {
        name: "user_phoneNumber",
        type: "number",
        message: chalk.redBright(`Enter your number`)
    }
]);
let { user_firstName, user_lastName, user_age, user_gender, user_phoneNumber } = userDetails;
// total balance in bank of user.
let Amount = 1000;
class Custromer {
    firstName = user_firstName;
    lastName = user_lastName;
    age = user_age;
    gender = user_gender;
    phoneNumber = user_phoneNumber;
    display() {
        console.log(chalk.magenta(`Name: ${this.firstName} ${this.lastName}`));
        console.log(chalk.magenta(`Age: ${this.age}`));
        console.log(chalk.magenta(`Gender ${this.gender}`));
        console.log(chalk.magenta(`Phone Nummber ${this.phoneNumber}`));
        console.log(chalk.magenta(`Total Amount is ${Amount}`));
    }
    ;
}
;
let custromers = new Custromer();
custromers.display();
let userAmount = await inquirer.prompt([
    {
        name: "credit_debit",
        type: "list",
        message: chalk.redBright(`Select the option:`),
        choices: ["Credit", "Debit"]
    }
]);
// let {credit_debit}= userAmount;
if (userAmount.credit_debit === "Credit") {
    let UserAmount = await inquirer.prompt([
        {
            name: "creditAmount",
            type: "number",
            message: chalk.redBright(`Enter your amount`)
        },
    ]);
    let { creditAmount } = UserAmount;
    console.log(`Now your total amount is: ${chalk.magenta(Amount + creditAmount)}`);
}
else if (userAmount.credit_debit === "Debit") {
    let userDebit = await inquirer.prompt([
        {
            name: "user_debit",
            type: "number",
            message: chalk.redBright(`Enter your amount`)
        }
    ]);
    let { user_debit } = userDebit;
    if (Amount - user_debit > 0) {
        console.log(`Now your total amount is ${chalk.magenta(Amount - user_debit)}`);
    }
    else {
        console.log(`Now your total balance is ${chalk.magenta(0)}`);
    }
}
else {
    console.log(`in valid inforamtion`);
}
;
