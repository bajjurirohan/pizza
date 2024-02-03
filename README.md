# Assignment 

I hace create a NextJS application for this FrontEnd Coding challange with EveryRealm

## To Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pizza page

I have  created a pizza page on the route /pizza where you can add and remove slices on the pizza and also remove pepperonis as required. The respective code is in \app\pizza

You will be able to reset your selection with the reset Option and the respective Code is in Components\Cart.

I have utilized Redux to the the total costs according to the given pricings with the pizza slice in lib\features\pizza-slice.ts. The useReducer hook was used to manage the state of the cart.

## Search page

I have implemented the search functionality in the route /seach where you can search for repositories from the Github API and results the repositiories with repect to the name provide by the user
