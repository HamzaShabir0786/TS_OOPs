import inquirer from "inquirer";
// console.log("first");
//     function UploadUser() {
//     inquirer
//         .prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?",
//         },
//         ])
//         .then(() => {
//         console.log("Name uploaded");
//         inquirer
//             .prompt([
//             {
//                 type: "number",
//                 name: "age",
//                 message: "What is your Age?",
//             },
//             ])
//             .then(() => {
//             console.log("Age uploaded");
//             inquirer
//                 .prompt([
//                 {
//                     type: "input",
//                     name: "job",
//                     message: "What is your job?",
//                 },
//                 ])
//                 .then(() => {
//                 console.log("job successfully uploaded");
//                 })
//                 .catch((jobEr) => {
//                 console.log("Error job: ", jobEr);
//                 });
//             })
//             .catch((ageEr) => {
//             console.log("Error er: ", ageEr);
//             });
//         })
//         .catch((nameEr) => {
//         console.log("Error: ", nameEr);
//         });
//     }
//     UploadUser();
// console.log("last");
console.log("first");
async function UploadUser2() {
    const name = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
    ]);
    console.log("Name uploaded");
    await inquirer.prompt([
        {
            type: "number",
            name: "age",
            message: "What is your age?",
        },
    ]);
    console.log("Age uploaded");
    await inquirer.prompt([
        {
            type: "input",
            name: "job",
            message: "What is your job?",
        },
    ]);
    console.log("Job successfully uploaded");
}
UploadUser2();
console.log("last");
