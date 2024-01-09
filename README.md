# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


-------------------- Requirement clarification
Features: 
  toggle
  display the video cards,
  dynamic routing

techstack
    styling : Tailwind css
    managing data: Redux
    app : React
    bundler : create-react-app
    navigation : react-router-dom
    testing: jest, react-testing-library

Planning components:
        Head
            hamburger, youtube_logo, seachBar, userIcon
        Body
            SideBar
                MenuItems/ NavigationItems
            MainContainer
                ButtonsList
                VideoContainer
                    VideoCard


HW
api call after 200ms
debouncing
cleanup

display the suggestion
onblur remove sugg

cache data:
song : ["songs", "songs telugu", "songs tamil", "songs hindi", "songs kannada", "songs songs]

iphone : ["iphone12","iphone11","iphone13","iphone12 pro max", ]

iph : ["iphone12","iphone11","iphone13","iphone12 pro max", ]

Cache_Results :
{
    "song" : ["songs", "songs hindi"],
    "javascript": ["javascript mastery", "javascript array"],
    iph : ["iphone12","iphone11","iphone13","iphone12 pro max", ]
}

Reddit nested comment
Youtube 2 level nested commeny
single comment: {name: "laxmi",
                 desc: "wow",
                 reply:[{name: "xyz",
                 desc:"kk",
                 reply:[]

                 },{

                 }]
                }

=========================
search with Debouncing, optimising the search
API calls optimisation
caching
    

=================
Live Chat >>>>>> Infinite scroll >>>>>> pagination

Live Chat 
2 ways we can do : First -> Web socket
                   Second -> API polling

Challenges in Live Chat:
1: To get data live
2: Update the UI

Web socket is the 2 way connection btw the server and the UI.(bi-directional)
Either way we can send the data.
No regular interval -> 1st data can come in after 10ms,
2nd data can come after 50ms, 3rd can come after 10min

API polling => one direction - data flows from server to UI when UI requests the server. 
Regular Intervals => if the interval is 20ms , then after every 20ms server will 
send the data if present.
UI will keep polling after 20ms that new data has come in or not.

Gmail => API polling
WhatsApp => Web socket, trading app

