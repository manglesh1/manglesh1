const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5550;
const servicesMississauga = require("./services/mississaugaServices");
const servicesStCatharines = require("./services/stCatharinesServices");
const servicesWindsor = require("./services/windsorServices");
const sendMail = require("./services/mail");
const cron = require("node-cron");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// add data in database at 11:59 PM every day.
cron.schedule("59 21 * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  // servicesMississauga.getCustomerDataFromRollerMississauga();
  // servicesMississauga.getSingedWaiversFromRollerMississauga();
  // servicesMississauga.getGxScoreFromRollerMississauga();
  // servicesMississauga.getBookingFromRollerMississauga();
  // servicesMississauga.getTicketsFromRollerMississauga();
  // servicesMississauga.getProductFromRollerMississauga();
  // servicesStCatharines.getCustomerDataFromRollerStCatharines();
  // servicesStCatharines.getSingedWaiversFromRollerStCatharines();
  // servicesStCatharines.getGxScoreFromRollerStCatharines();
  // servicesStCatharines.getBookingFromRollerStCatharines();
  // servicesStCatharines.getTicketsFromRollerStCatharines();
  // servicesStCatharines.getProductFromRollerStCatharines();
  // servicesWindsor.getCustomerDataFromRollerWindsor();
  // servicesWindsor.getSingedWaiversFromRollerWindsor();
  // servicesWindsor.getGxScoreFromRollerWindsor();
  // servicesWindsor.getBookingFromRollerWindsor();
  // servicesWindsor.getTicketsFromRollerWindsor();
  // servicesWindsor.getProductFromRollerWindsor();
  sendMail.sendmail();
  console.log("End Cron Job");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
