# Care 360 : 

Care 360 is a mobile application that allows clients to book appointments with different specialists easily.

## **The Problem** :no_entry_sign: :-

A group of doctors who works in different clinics has noticed a common problem their clients face when they book appointments. 
To book an appointment, client should wait for a call response. So, the booking process takes more time than it should.
On the other hand, just a call cannot provide the client with many pieces of information about the specialist or the clinic. 

## **The solution** :bulb: :-

As a solution, we have decided to provide those clinics with different and special journey with Care 360. 
Physical or phone calls booking appointments are placed with an online booking experience which makes it easy for the specialist and the client to view the booked appointment. 
As a result, clients can book appointments in just a few seconds. 
They can search for different doctors with different specialties and get the full information needed about doctors and clinics to have an excellent care treatment.

## **User Stories**  :books: 

### **User who wants to view doctors and book appointments** : 
   #### As a client, I can : 

- As a client, I can search for specific doctor.
- As a client, I can book an appointment with a specific doctor
- As a client, I can view different doctors with different specialities. 
- As a client, I can view full informations about the doctor and clinic location.
- As a client, I can have an account on Care 360 to view booked appointments.
- As a client, I can review my booked appoinments.


As a doctor, I can see the details and data of a customer who has booked appointments.

### **Admin**: 
   #### As an admin, I can : 
- As an admin, I can create profiles for doctors.
- As an admin, I can view the number of doctors registered in the application.
- As an admin, I can view the number of clients and booked appointments in the application.

### **Doctor**: 

As a doctor, I can see the time and date of booked appointments.
As a doctor, I can have a personal profile in Care 360 which has all my informations.


## **User Journey**  :pencil2:
When a client opens the Care 360 application he/she can see the loading page with the application name and a short message about it works. 
Then he/she views the main page which has different sections like view specialists/ about us/ view appointments.

If the client just wants to search for different doctors with different specialties. He/she can move by pressing on the view specialists button to view different specialists page where he/she can search specialists by their names and filter them by specialties.

If he/she finds a suitable doctor, by clicking on the view profile button the client can view the doctor page with the whole information about it. 

On both, specialists and doctor pages clients can book an appointment after registering in the application by pressing on the book button for a specific doctor which he/she desires to meet.

So, in the menu, there is a register page where clients can register to book appointments and view the booked ones.

By clicking on the profile icon in the nav bar, the client can view a new page that contains the appointments that he/she made.


## **How to Launch App Locally** :-

*  clone this repo by typing this command in the terminal:  
`https://github.com/GSG-G10/Care-360.git`

*  Run `npm i` to install the packages for the app in general.

*  Run `cd client` and `npm i` to install the packages for the client- React Native.

### Database Setup  :clipboard:

> Make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER  DATABASE {database name} OWNER TO {user name};
```
- Do the same as before but make sure to change the names.

* Run the following command in the database pgcli terminal  
`\ I server/database/config/build.sql`
and the command 
`\ I server/database/config/fakeData.sql`
to add fake Data

### **Environment variables:**
Environment variables are one of the ways we keep our products safe. If you want to access our app locally you will need to add your own.
- create `.env` file
- add your Environment variables
```shell=
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to (http://localhost:5000/) 
> To run client-side, In your terminal Type:    

    `cd client` => `npm start`  

Now you can view the app live in the Browser or just download expo on your mobile and scan the Qr code. You can also use an android emulator.

## **Technologies** :computer: :-

- BackEnd: **Node JS & Express JS**
- FrontEnd: **React Native**
- Database: **PostgreSQL**
- Styling: **CSS**
- Libraries: **React Native Paper**


## **Team Members** :-

- ```Ibrahim Jomaa```
- ```Noor Abunamus```
- ```Mohammed Alrayes```
- ```Nadia Altamimi```
- ```Elham Fadel```

