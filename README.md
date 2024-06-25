# GuestRoomBookingApplication

Created new project : npx create-react-app project-name

**Libraries installed on the frontend : **
**for Bootstrap**
> npm i bootstrap react-bootstrap
for axios - fetch data from third party API
> npm i axios

 **Libraries installed on the backend :**
 > npm i express mongoose cors bcryptjs 

**Instructions to run the project**

**Have to install nodemodules for both frontend and backend with the command on terminal**
ProjectFolderPath/frontend>npm i 
ProjectFolderPath/backend>npm i

**To Run the FrontEnd : **
ProjectFolderPath>cd frontend
>npm start

**To Run the Backend :**
ProjectFolderPath>cd backend 
>node server.js

**To run json server :**
ProjectFolderPath/frontend>cd public
npx json-server --watch rooms.json --port 3003(optional port number)



**Sample Working Schema:**

Sample MongoDB Data for room details
_id:
667a86f41144cf6e8cb203e9
floorSize
"4"
name
"Deluxe"
numberOfBeds
"2"
photos
"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwg…"


**For User Login after registration:**

For Owner Login:
_id
6679468cd12fbd94d6a52fba
name
"Dhivyabharathi "
email
"divyathoughts@gmail.com"
password
"$2a$10$jLL.e1rAE.VrxagMyztXRusQp8JSRS8UgME50FvjGKEoz8a19a2ei"
mobile
"06374107112"
isOwner
true
createdAt
2024-06-24T10:12:28.661+00:00
updatedAt
2024-06-24T10:12:28.661+00:00
__v
0

**For User Login :**

_id
6679489bd12fbd94d6a52fc5
name
"db"
email
"abc@gmail.com"
password
"$2a$10$aEks2QYkQBoOnkfrB77Q1.FM8miyHsGFhMMOs2qwzicy92QfKOvjm"
mobile
"06374107112"
isOwner
false
createdAt
2024-06-24T10:21:15.480+00:00
updatedAt
2024-06-24T10:21:15.480+00:00
__v
0
