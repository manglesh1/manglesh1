const axios = require("axios");
const Pool = require("pg").Pool;
const moment = require("moment");

const pool = new Pool({
  user: "amanpatel",
  host: "localhost",
  database: "amanpatel",
  password: "amanpatel",
  port: 5432,
});

const getTokenMississauga = async () => {
  var api = axios.create({
    baseURL: "http://api.roller.app",
    headers: { "Content-Type": "application/json" },
  });

  try {
    const response = await api.post("/token", {
      client_id: "J54gJgtdBR3hhj61Djmx4EzNBR2XV4Wm",
      client_secret:
        "iyPYqK7THDcDskhL1wS0nYWA7FsryqilFNu-1tfZJgCvmx_Y8HSVjGMd7I1Ip2u0",
    });
    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

const getCustomerDataFromRollerMississauga = async (req, res) => {
  let date, finalDate, previousDate;
  const accesToken = await getTokenMississauga();
  date = await pool.query("SELECT MAX(createtime) FROM public.customers");
  if (date) {
    finalDate = moment(date).format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    finalDate = moment().format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  }
  const config = {
    method: "get",
    url: `https://api.roller.app/data/customers?endDate=${finalDate}&startDate=${previousDate}&pageSize=500`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.customers (customersid, firstname, customersemail, lastname, dateofbirth, createat, updateat, phonenumber, acceptmarketing, customeraddress, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
          [
            element.customerId,
            element.firstName,
            element.email,
            element.lastName,
            element.dateOfBirth,
            element.createdDate,
            element.modifiedDate,
            element.contactNumber,
            element.acceptMarketing,
            element.address,
            "Aerosports Oakville Mississauga",
            new Date(),
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getSingedWaiversFromRollerMississauga = async (req, res) => {
  let date, finalDate, previousDate;
  const accesToken = await getTokenMississauga();
  date = await pool.query("SELECT MAX(createtime) FROM public.customers");
  if (date) {
    finalDate = moment(date).format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    finalDate = moment().format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  }
  const config = {
    method: "get",
    url: `https://api.roller.app/data/signedwaivers?endDate=${finalDate}&startDate=${previousDate}&pageSize=500`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.signwaivers (customersid, firstname, customersemail, lastname, dateofbirth, createat, updateat, phonenumber, acceptmarketing, customeraddress, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
          [
            element.customerId,
            element.firstName,
            element.email,
            element.lastName,
            element.dateOfBirth,
            element.createdDate,
            element.modifiedDate,
            element.contactNumber,
            element.acceptMarketing,
            element.address,
            "Aerosports Oakville Mississauga",
            new Date()
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getGxScoreFromRollerMississauga = async (req, res) => {
  let date, finalDate, previousDate;
  const accesToken = await getTokenMississauga();
  date = await pool.query("SELECT MAX(createtime) FROM public.customers");
  if (date) {
    finalDate = moment(date).format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    finalDate = moment().format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  }
  const config = {
    method: "get",
    url: `https://api.roller.app/reporting/gxs?endDate=${finalDate}&startDate=${previousDate}&pageSize=500`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.gsxraiting (gxsresponseid, customerid, bookingReference, isFan, isCritic, overallRating, serviceRating, safetyRating, facilitiesRating, valueRating, comments, actioned, createat, updateat, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
          [
            element.gxsResponseId,
            element.customerId,
            element.bookingReference,
            element.isFan,
            element.isCritic,
            element.overallRating,
            element.serviceRating,
            element.safetyRating,
            element.facilitiesRating,
            element.valueRating,
            element.comments,
            element.actioned,
            element.createdDate,
            element.modifiedDate,
            "Aerosports Oakville Mississauga",
            new Date()
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getBookingFromRollerMississauga = async (req, res) => {
  let date, finalDate, previousDate;
  const accesToken = await getTokenMississauga();
  date = await pool.query("SELECT MAX(createtime) FROM public.customers");
  if (date) {
    finalDate = moment(date).format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    finalDate = moment().format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  }
  const config = {
    method: "get",
    url: `https://api.roller.app/data/bookingitems?endDate=${finalDate}&startDate=${previousDate}&pageSize=500`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.bookings (bookingreference, bookingdate, bookingstatus, bookinglocation, productid, sessionstart, sessionend, bookingnotes, quantity, groupsize, createddate, bookingcreateddate, bookingmodifieddate, bookingcreatedbystaffid, discountamount, bookingdiscountids, modifiers, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *",
          [
            element.bookingReference,
            element.bookingDate,
            element.bookingStatus,
            element.bookingLocation,
            element.productId,
            element.sessionStart,
            element.sessionEnd,
            element.bookingNotes,
            element.quantity,
            element.groupSize,
            element.createdDate,
            element.bookingCreatedDate,
            element.bookingModifiedDate,
            element.bookingCreatedByStaffId,
            element.discountAmount,
            JSON.stringify(element.bookingDiscountIds),
            element.modifiers,
            "Aerosports Oakville Mississauga",
            new Date()
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getTicketsFromRollerMississauga = async (req, res) => {
  let date, finalDate, previousDate;
  const accesToken = await getTokenMississauga();
  date = await pool.query("SELECT MAX(createtime) FROM public.customers");
  if (date) {
    finalDate = moment(date).format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  } else {
    finalDate = moment().format("YYYY-MM-DD");
    previousDate = moment(finalDate).subtract(1, "day").format("YYYY-MM-DD");
  }
  const config = {
    method: "get",
    url: `https://api.roller.app/data/tickets?endDate=${finalDate}&startDate=${previousDate}&pageSize=500`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.tickets (ticketid, name, customerid, customticketid, productid, createddate, bookingdate, expirydate, producttype, productsubtype, discountids, numberofrecurringpayments, recurringpaymentfrequency, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
          [
            element.ticketId,
            element.name,
            element.customerId,
            element.customTicketId,
            element.productId,
            element.createdDate,
            element.bookingDate,
            element.expiryDate,
            element.productType,
            element.productSubType,
            element.discountIds,
            element.numberOfRecurringPayments,
            element.recurringPaymentFrequency,
            "Aerosports Oakville Mississauga",
            new Date()
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getProductFromRollerMississauga = async (req, res) => {
  const accesToken = await getTokenMississauga();
  const config = {
    method: "get",
    url: "https://api.roller.app/data/products?pageSize=500",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accesToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      response.data.items.forEach((element) => {
        pool.query(
          "INSERT INTO public.product (productid, parentproductid, name, producttype, productsubtype, cost, productstatus, parklocation, createtime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
          [
            element.productId,
            element.parentProductId,
            element.name,
            element.productType,
            element.productSubType,
            element.cost,
            element.productStatus,
            "Aerosports Oakville Mississauga",
            new Date()
          ],
          (error) => {
            if (error) {
              throw error;
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};


module.exports = {
  getCustomerDataFromRollerMississauga,
  getSingedWaiversFromRollerMississauga,
  getGxScoreFromRollerMississauga,
  getBookingFromRollerMississauga,
  getTicketsFromRollerMississauga,
  getProductFromRollerMississauga,
};
