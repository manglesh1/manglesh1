// CREATE TABLE IF NOT EXISTS public.bookings
// (
//     bookingreference character varying(2000) COLLATE pg_catalog."default",
//     bookingdate character varying(2000) COLLATE pg_catalog."default",
//     bookingstatus character varying(2000) COLLATE pg_catalog."default",
//     bookinglocation character varying(2000) COLLATE pg_catalog."default",
//     productid character varying(2000) COLLATE pg_catalog."default",
//     sessionstart character varying(2000) COLLATE pg_catalog."default",
//     sessionend character varying(2000) COLLATE pg_catalog."default",
//     bookingnotes character varying(2000) COLLATE pg_catalog."default",
//     quantity integer,
//     groupsize integer,
//     createddate date,
//     bookingcreateddate date,
//     bookingmodifieddate date,
//     bookingcreatedbystaffid character varying(2000) COLLATE pg_catalog."default",
//     discountamount numeric,
//     bookingdiscountids jsonb,
//     modifiers jsonb,
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )





// CREATE TABLE IF NOT EXISTS public.customers
// (
//     customersid integer,
//     firstname character varying(2000) COLLATE pg_catalog."default",
//     customersemail character varying(2000) COLLATE pg_catalog."default",
//     lastname character varying(2000) COLLATE pg_catalog."default",
//     dateofbirth character varying(2000) COLLATE pg_catalog."default",
//     createat date,
//     updateat date,
//     phonenumber character varying(100) COLLATE pg_catalog."default",
//     acceptmarketing boolean,
//     customeraddress jsonb,
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )



// CREATE TABLE IF NOT EXISTS public.gsxraiting
// (
//     gxsresponseid integer,
//     customerid integer,
//     bookingreference integer,
//     isfan boolean,
//     iscritic boolean,
//     overallrating integer,
//     servicerating integer,
//     safetyrating integer,
//     facilitiesrating integer,
//     valuerating integer,
//     comments character varying(500000) COLLATE pg_catalog."default",
//     actioned boolean,
//     createat date,
//     updateat date,
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )



// CREATE TABLE IF NOT EXISTS public.product
// (
//     productid character varying(2000) COLLATE pg_catalog."default",
//     parentproductid character varying(2000) COLLATE pg_catalog."default",
//     name character varying(2000) COLLATE pg_catalog."default",
//     producttype character varying(2000) COLLATE pg_catalog."default",
//     productsubtype character varying(2000) COLLATE pg_catalog."default",
//     cost character varying(200) COLLATE pg_catalog."default",
//     productstatus character varying(2000) COLLATE pg_catalog."default",
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )



// CREATE TABLE IF NOT EXISTS public.signwaivers
// (
//     customersid integer,
//     firstname character varying(2000) COLLATE pg_catalog."default",
//     customersemail character varying(2000) COLLATE pg_catalog."default",
//     lastname character varying(2000) COLLATE pg_catalog."default",
//     dateofbirth character varying(2000) COLLATE pg_catalog."default",
//     createat date,
//     updateat date,
//     phonenumber character varying(100) COLLATE pg_catalog."default",
//     acceptmarketing boolean,
//     customeraddress jsonb,
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )




// CREATE TABLE IF NOT EXISTS public.tickets
// (
//     ticketid character varying(2000) COLLATE pg_catalog."default",
//     name character varying(2000) COLLATE pg_catalog."default",
//     customerid character varying(2000) COLLATE pg_catalog."default",
//     customticketid character varying(2000) COLLATE pg_catalog."default",
//     productid character varying(2000) COLLATE pg_catalog."default",
//     createddate date,
//     bookingdate character varying(2000) COLLATE pg_catalog."default",
//     expirydate character varying(100) COLLATE pg_catalog."default",
//     discountids jsonb,
//     numberofrecurringpayments integer,
//     recurringpaymentfrequency character varying(2000) COLLATE pg_catalog."default",
//     parklocation character varying(2000) COLLATE pg_catalog."default",
//     producttype character varying(2000) COLLATE pg_catalog."default",
//     productsubtype character varying(2000) COLLATE pg_catalog."default",
//     createtime date
// )
