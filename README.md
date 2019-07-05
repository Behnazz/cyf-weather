This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set up

Please **fork** and **clone** this repository, and navigate to the correct directory using the command line.

In the project directory, you can run:

> `npm install`
>
> `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, and enter a city name in the search bar to see results.

## Instructions

### Aim

You will be connecting to a real-time weather API to make a weather app that looks like this:

![final design](src/img/instructions/final-design.png)

![designgif](src/img/instructions/weatherappdemo.gif)

### Getting started

Let's start slow by creating the HTML and CSS we need to make the app look like the design: do this is App.js and App.css

Don't worry about fetching data yet, you can use **invented and hardcoded** values for now - just focus on getting content up on the page and imitating the design provided.

A few things to think of:

- The font you need is called `Raleway` and is already loaded up into the project - but remember you'll need to declare it in your CSS.
- You'll need to copy the colours, spacing, layout and size of elements in the design. This is a core skill as a front-end developer! :)
- Extra points if you can think of a nice way to display the app on mobile ;)

### Let's try it with a JSON file

Once you're happy with how the page looks, let's get rid of the hardcoded temperatures and other values, and put in a sample JSON file. This means your app will read those values locally, from a static JSON file you should include in your project.

You can use this JSON file: https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22. Copy all contents into a new file and add it to your project.

This JSON represents weather data for **just one city**.

It includes **a `list` array containing the weather forecast for the next 24 hours, split into 8 x 3-hour chunks**
Each object inside `list` contains a `weather` array with an object that looks like this:

```
"weather": [
  {
    "id": 521,
    "main": "Rain",
    "description": "shower rain",
    "icon": "09d"
  }
]
```

Read the values you're displaying on your page from this file.

Now you've got your JSON sorted, it's time to fetch some real weather data!

### Getting the weather data

We'll be using data from this API: http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchInput}&cnt=8&units=metric&appid=${apiKey}

The data will come in JSON format, and will look like this: https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22

**1)** Register to get your personal API key. This is free, and will enable you to make (limited) requests to fetch the weather data you need. Follow the steps here: https://openweathermap.org/appid

**2)** Once logged in, go to the API keys tab and copy the default Key. Keep this somewhere safe as you will need it when you fetch data.

![api key](src/img/instructions/api-key.png)

**3)** The format you'll need to follow to make API calls is:
`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${YOUR_API_KEY}`

where CITY_NAME is replaced by the city you're looking for, for example 'London', and YOUR_API_KEY is replaced with... your personal API key, of course.

example format: http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=0c7674c74ce2a976435208059ac6092f (this doesn't work because it's a fake API key, but when you replace it with yours, it will ;) )

**Think about when you want to fetch your data...**

### Breaking your app up into components

Once you've got it looking good and you're successfully fetching some data, it's time to break your app up into components so you can loop through the data results and display the weather forecast.

Look at the design:

- how could you break it up into components?
- In which component would you fetch the weather data?
- Which components need access to the weather data?

### Start setting up your app

- You'll need several components - you can decide how much you want to break things up into different components, but at minimum you will need a `<Search />` component, and a `<CurrentWeather />` component (you can choose the naming you like).

![wireframe](src/img/instructions/wireframe.png)

- The search input (e.g. 'Birmingham') will need to be inserted into the API url (see CITY_NAME above)

- The response you get from the API will need to be passed down as props to the `<CurrentWeather />` component so it knows what weather to display.

- As we've seen before, the response will include **a `list` array containing the weather forecast for the next 24 hours, split into 8 x 3-hour chunks**
  Each object inside `list` contains a `weather` array with an object that looks like this:

```
"weather": [
  {
    "id": 521,
    "main": "Rain",
    "description": "shower rain",
    "icon": "09d"
  }
]
```

**The `id` is what we'll use to display the current weather icon.**

### Matching up the weather `id` with the appropriate icon

We will **not** be using the `icon` property of the data, we will only use the `id` and match it with our own svg icons. You can find these svgs in `src/img/weather-icons`.

You will need to write some code to do the following:

| if `id` is:         | then show icon named: |
| ------------------- | --------------------- |
| less than 300       | storm.svg             |
| between 300 and 499 | drizzle.svg           |
| between 500 and 599 | rain.svg              |
| between 600 and 699 | snow.svg              |
| between 700 and 799 | fog.svg               |
| equal to 800        | clear.svg             |
| equal to 801        | partlycloudy.svg      |
| between 801 and 805 | mostlycloudy.svg      |

So for example, in the above response, the `id` was 521, which is between 500 and 599, so the icon to display will be `rain.svg`

### Showing more weather information

Once you're showing the icon, you can also display information about the temperature, the humidity etc.
Have a look at the response from the API to find this information, and try to display it as shown in the design! ;)

---

## Stretch goals

### Display the weather forecast for the next 24 hours

Add a new section to your app that will display the weather over the next 24 hours in the given location.

![final design](src/img/instructions/final-design.png)

**Think about how you can manipulate the data to display the weather for each 3-hour chunk...**

Good luck!
