Tech Challenge for UP42

## To Run

Use command `yarn start`. This will install dependencies and run the app in `localhost:3000`. \
A browser window should open automatically.

## Packages

### Create React App

Just a super simple way to get started, so I bootstrapped using this.

### Material-UI

Feature rich, themeable UI library. I chose this as I have used it in the past so I am familiar, it's fairly feature complete, and stable.
It is also built on emotion, so it is easy to extend to custom styling where appropriate.

## Other Decisions

### Pages vs modals

Explain using modals rather than implementing a routing solution

## Challenges

## Future Improvements

### Routing rather than modals

It would be better to use individual pages with a routing solution than using modals, at least for the single car object display. This would allow users to share individual cars and bookmark. \
Ultimately I decided to go with modals as an initial solution as the implementation time and complexity was far less with the tools that MUI provided me with. There would also be further considerations like changing availability with cars and whether or not navigating to them directly is actually useful. \
In short I estimated a modal based solution to be easier and simpler, while implementing routing would be better UX, and far more scalable into the future, if this application had any future.
