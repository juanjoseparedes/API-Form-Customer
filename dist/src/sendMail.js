"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailToSell = exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// vars
const subject = "Gracias por contactar a GROWSOFT DOMINICANA SRL";
// config connection with the server
const trasnporter = nodemailer_1.default.createTransport({
    host: "mail.growsoft.com.do",
    port: 587,
    secure: false,
    auth: {
        user: "info@growsoft.com.do",
        pass: "$AdminJJP$040872",
    },
    tls: {
        rejectUnauthorized: false,
    },
});
// send mail to user registred
const sendMail = (firstname, email) => __awaiter(void 0, void 0, void 0, function* () {
    // template html
    const contentHTML = `
<!doctype html>
<html ⚡4email>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
<body style="margin: 0;
             padding: 0;">
    <div style="background-color: rgb(247, 247, 247);
    padding: 10px;">
        <div style="height: 700px;
                    width: 400px; 
                    margin: auto; 
                    border: 2px 
                    solid; 
                    border-radius: 10px; 
                    text-align: left; 
                    background-color: white;
                    border-color: darkorange; padding: 5px">
            <div style="margin-top: 30; margin-left: 25;">
                <a href="https://www.growsoft.com.do"><img src="https://i.postimg.cc/TPFg9qdN/gslogo.png" height="60" width="90" layout="responsive"
                style="margin-top: 40px; margin-left: 30px"></a>
            </div>
            <br>
            <p style="padding: 5px; margin-left: 30px; font-family: Arial, Helvetica, sans-serif; font-size: x-large; font-weight: bold;">
                ${firstname},</p>

            <p style="padding: 5px; margin-left: 30px; font-family: Arial, Helvetica, sans-serif; font-size: x-large;">
                Gracias por contactarnos.</p>

            <p style="padding: 5px; margin-left: 30px; font-family: Arial, Helvetica, sans-serif; font-size: x-large;">
                Recibimos tu mensaje y en el menor tiempo posible un representante nuestro se pondrá en contacto contigo
                para atender a tus necesidades.</p>
            
            <p style="padding: 5px; margin-left: 30px; font-family: Arial, Helvetica, sans-serif; font-size: x-large;">
                Saludos cordiales,</p>
            
            <br>
            <div
                style="color: darkorange; padding: 5px; margin-left: 30px; font-family: Arial, Helvetica, sans-serif; font-size: x-large; font-weight: bold;">
                <p>GROWSOFT DOMINICANA SRL</p>
            </div>
            <br>
        </div>
        <br><br>
        <div
            style="text-align: center; padding: 0; margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: medium;">
            <p style="padding: 0; margin: 0; font-weight: bold;">SANTO DOMINGO, DN.</p>
            <p style="padding: 0; margin: 0;">Av. John F. Kennedy</p>
            <p style="padding: 0; margin: 0;">Centro Comercial Kennedy, Suite 336</p>
            <p style="padding: 0; margin: 0;">Los Prados</p>
        </div>
        <br>
        <div style="text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: small;">
            <hr width="50%" />
            <p>Te enviamos este correo con relación tu solicitud de información, 
            y te invitamos a seguirnos en nuestras redes sociales:
            </p>
        </div>

        <div style="text-align: center;">
            <a href="https://web.facebook.com/GrowsoftDominicana/?_rdc=1&_rdr"><img src="https://i.postimg.cc/WbrDLFGC/facebook.png" height="25" width="25"></a>
            <a href="https://twitter.com/growsoftrd"> <img src="https://i.postimg.cc/1zz5tfF9/twitter.png" height="25" width="25"></a>
            <a href="https://www.linkedin.com/company/51726356/admin/"><img src="https://i.postimg.cc/GpYWQRGW/linkedin.png" height="25" width="25"></a>
            <a href="https://www.instagram.com/growsoftrd/"><img src="https://i.postimg.cc/zXbRp22C/instagran.png" height="25" width="25"></a>
            <a href="https://www.youtube.com/channel/UCnTVAx00j71kgQgYmxjvXTA"><img src="https://i.postimg.cc/hG347c8V/youtube.png" height="25" width="25"></a>
        </div>
        <br>
        <br>
    </div>
</body>
</html>
`;
    const info = yield trasnporter.sendMail({
        from: "info@growsoft.com.do",
        to: email,
        subject: subject,
        html: contentHTML,
    });
    console.log("Menssage send: ", info.messageId);
});
exports.sendMail = sendMail;
const sendMailToSell = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield trasnporter.sendMail({
        from: "info@growsoft.com.do",
        to: "jparedes@growsoft.com.do",
        subject: "AVISO: registro de contacto desde growsoft.com.do/formulario",
        html: `
    <body>
      <h3>Informacion del contacto</h3>
      <p>Nombres: ${customer.firstname} ${customer.lastname}</p>
      <p>Email: ${customer.email} </p>
      <p>Telefono: ${customer.phone} </p>
      <p>Compania: ${customer.company} </p>
      <p>Cargo: ${customer.jobtitle} </p>
      <p>Interes: ${customer.coments} </p>
    </body>
  `
    });
    console.log("Menssage send: ", info.messageId);
});
exports.sendMailToSell = sendMailToSell;
//# sourceMappingURL=sendMail.js.map