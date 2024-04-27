import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
  .prompt({
    name: "website",
    message: "Enter the website here!",
  })
  .then((answer) => {
    console.log("It will be generate qr code for " + answer.website);

    var qr_png = qr.image(answer.website, { type: "png" });
    qr_png.pipe(fs.createWriteStream(answer.website + ".png"));
    var png_string = qr.imageSync(answer.website, { type: "png" });

    fs.writeFile("qr-text-binary", png_string, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error) {
      console.log(error);
    }
  });
