# T9 MVP
This MVP version of T9 feature. Enjoy :smile:
## How to use 
Deployed on Heroku: https://t9app.herokuapp.com/

```
yarn install
yarn build
yarn start
```
and open http://localhost:3000/

To run development server(without backend):
```
yarn start:dev
```

To run test cases:
```
yarn test
yarn test --coverage
```

## Used technologies
- created simple Trie algorithm
- React, Redux, redux-actions, reselect, redux-saga
- Jest, Enzyme
- Babel
- Eslint
- Webpack
- NodeJS, express.js

## Some further improvements: :fire:

- Handling suggestions loading (show some spinner)
- Handling empty suggestions list
- Handling errors on Suggestions loading
- Show words by frequency of use
- Allow iterate over possible characters
- Allow delete entered words
- Add "0" button to allow add space in text
- Take a look at bundle.js size
