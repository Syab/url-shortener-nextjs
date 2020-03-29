# URL-shortener-nextjs
A small project using NextJS and ReactJS to create a GUI for shortening a URL


This frontend is currently up on (though the backed hasn't yet been deployed to production. So it's pretty much useless in production at the moment):

https://url-shortener-nextjs-git-master.syab.now.sh/shorty

### Prerequisites to run this locally:

- Your system should have NodeJS installed (v10 and above)
- Your system should have npm installed (v6.13.x and above)
- You should have the database and backend started up
- See   to start set up DB infrastructure.
- See https://github.com/Syab/url-shortener-nodejs to start up backend in dev mode.

### Getting Started
1. Clone this repository in a desired location of your system
   ```
   cd /your/fave/directory
   git clone https://github.com/Syab/url-shortener-nextjs.git
   cd url-shortener-nextjs
   ```

2. Install node modules 
    ```
   npm install
    ```
3. You can choose to run it in dev or start the app as in production mode
    ```
   # dev mode
   npm run dev
   
   # production mode
   npm run build
   npm start
   
   ```
