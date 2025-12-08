# DevTinder

- Created a Vite + React application
- Removed unecessary code and created a Hello World App
- Installed Tailwind CSS
- Installed Daisy UI
- Added NavBar component to App.jsx
- Created a NavBar.jsx seperate Component file
- Installed react router dom
- Create BrowserRouter > Routes>Route=/ Body> RouteChildren
- Create an Outlet in your Body Component
- Created a Footer
- Created a Login Page
- Installed Axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials: true,
- Whenever you're making API call so pass axios => {withCredentials: true}
- Installed Redux ToolKit 
- Installed react-redux + @reduxjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- Added redux devTools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactored the code to add constants file + created a component folder
- You should not be access other routes without login
- If toiken is not present, redirect user to login page
- Logout Feature
- Get the Feed and add the feed in the store
- Build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- New page -  See all my connections
- New page -  See all my connections Requests(Pending)
- Feature - Accept/Reject Connection Requests
- Send/ignore the user card from Feed
- SignUp New User
- E2E Testing



Body   
   NavBar
   Route=/  => Feed
   Route=/login  => Login
   Route=/connections  => Connections
   Route=/profile  => Profile



   
# Deployment

- SignUp on AWS
- Launch Instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-18-60-222-168.ap-south-2.compute.amazonaws.com
- Installed Node version 22.19.0(Should match with ur local system node version)
- Git clone (get your repositiries both FE & BE)
- Frontend 
    - I went to the project & install the dependencies(npm install)
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance
- Backend
    - Allowed Ec2 instance public IP on mongodb server
    - npm install pm2 -g
    - pm2 start npm -- start
    - pm2 start npm --name "devtinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush npm (<name>), pm2 stop <name>, pm2 delete <name>
    - config ngnix - /etc/ngnix/sites-availabe/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api"


# Ngnix Config :

    Frontend = http://18.60.222.168/
    Backend = http://18.60.222.168:7777/

    Domain name = devtinder.com => 18.60.222.168

    nginx config :

    server_name 18.60.222.168

   location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
   }



