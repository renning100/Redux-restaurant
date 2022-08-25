import { INCREMENT, DECREMENT } from "./actions/types";

const initialState = [
  {
    id: 1,
    names: "Warme Vorspeisen",
    products: [
      {
        id: 1,
        name: "Papadam(2, stuck)",
        title: "Setup development environment",
        sallery: "2.10€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Gemischet Vospeisen",
        title: "Develop website and add content",
        sallery: "12.20€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Vegetable Samosa",
        title: "Deploy to live server",
        sallery: "5.50€",
        clicks: 0,
      },
    ],
  },
  {
    id: 2,
    names: "Suppen",
    products: [
      {
        id: 1,
        name: "Malkatani Suppe",
        title: "Setup development environment",
        sallery: "4.50€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Creme Soup",
        title: "Develop website and add content",
        sallery: "32.22€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Tomattensuppen",
        title: "Deploy to live server",
        sallery: "5.50€",
        clicks: 0,
      },
    ],
  },
  {
    id: 3,
    names: "Salate",
    products: [
      {
        id: 1,
        name: "Indian Salat",
        title: "Setup development environment",
        sallery: "4.20€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Chat",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Gemischter Salat",
        title: "Deploy to live server",
        sallery: "5.50€",
        clicks: 0,
      },
      {
        id: 4,
        name: "Channa Chat",
        title: "Deploy to live cahat",
        sallery: "7.40€",
        clicks: 0,
      },
    ],
  },
  {
    id: 4,
    names: "Beilagen",
    products: [
      {
        id: 1,
        name: "Papadam(2, stuck)",
        title: "Setup development environment",
        sallery: "2.40€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Gemischet Vospeisen",
        title: "Develop website and add content",
        sallery: "12.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Vegetable Samosa",
        title: "Deploy to live server",
        sallery: "5.70€",
        clicks: 0,
      },
    ],
  },
  {
    id: 5,
    names: "Speciaptaten",
    products: [
      {
        id: 1,
        name: "Malkatani Suppe",
        title: "Setup development environment",
        sallery: "4.50€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Creme Soup",
        title: "Develop website and add content",
        sallery: "32.40€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Tomattensuppen",
        title: "Deploy to live server",
        sallery: "5.40€",
        clicks: 0,
      },
    ],
  },
  {
    id: 6,
    names: "Vegetarian",
    products: [
      {
        id: 1,
        name: "Indian Salat",
        title: "Setup development environment",
        sallery: "4.20€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Chat",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Gemischter Salat",
        title: "Deploy to live server",
        sallery: "5.70€",
        clicks: 0,
      },
      {
        id: 4,
        name: "Channa Chat",
        title: "Deploy to live cahat",
        sallery: "7.50€",
        clicks: 0,
      },
    ],
  },
  {
    id: 7,
    names: "Huhn",
    products: [
      {
        id: 1,
        name: "Papadam(2, stuck)",
        title: "Setup development environment",
        sallery: "2.27€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Gemischet Vospeisen",
        title: "Develop website and add content",
        sallery: "12.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Vegetable Samosa",
        title: "Deploy to live server",
        sallery: "5.0€",
        clicks: 0,
      },
    ],
  },
  {
    id: 8,
    names: "Enten",
    products: [
      {
        id: 1,
        name: "Malkatani Suppe",
        title: "Setup development environment",
        sallery: "4.50€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Creme Soup",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Tomattensuppen",
        title: "Deploy to live server",
        sallery: "5.70€",
        clicks: 0,
      },
    ],
  },
  {
    id: 9,
    names: "Lamm",
    products: [
      {
        id: 1,
        name: "Indian Salat",
        title: "Setup development environment",
        sallery: "4.40€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Chat",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Gemischter Salat",
        title: "Deploy to live server",
        sallery: "5.70€",
        clicks: 0,
      },
      {
        id: 4,
        name: "Channa Chat",
        title: "Deploy to live cahat",
        sallery: "7.50€",
        clicks: 0,
      },
    ],
  },
  {
    id: 10,
    names: "Fisch",
    products: [
      {
        id: 1,
        name: "Papadam(2, stuck)",
        title: "Setup development environment",
        sallery: "2.47€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Gemischet Vospeisen",
        title: "Develop website and add content",
        sallery: "12.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Vegetable Samosa",
        title: "Deploy to live server",
        sallery: "5.50€",
        clicks: 0,
      },
    ],
  },
  {
    id: 11,
    names: "Reisgerich",
    products: [
      {
        id: 1,
        name: "Malkatani Suppe",
        title: "Setup development environment",
        sallery: "4.50€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Creme Soup",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Tomattensuppen",
        title: "Deploy to live server",
        sallery: "5.70€",
        clicks: 0,
      },
    ],
  },
  {
    id: 12,
    names: "Nachspeisen",
    products: [
      {
        id: 1,
        name: "Indian Salat",
        title: "Setup development environment",
        sallery: "4.60€",
        clicks: 0,
      },
      {
        id: 2,
        name: "Chicken Chat",
        title: "Develop website and add content",
        sallery: "32.50€",
        clicks: 0,
      },
      {
        id: 3,
        name: "Gemischter Salat",
        title: "Deploy to live server",
        sallery: "5.50€",
        clicks: 0,
      },
      {
        id: 4,
        name: "Channa Chat",
        title: "Deploy to live cahat",
        sallery: "7.70€",
        clicks: 0,
      },
      {
        id: 5,
        name: "Prosecco 0,7l",
        title: "Chile",
        sallery: "14.77€",
        clicks: 0,
      },
    ],
  },
];

const reducer = (state = initialState, action) => {
  const i = action?.payload?.index;
  const j = action?.payload?.id;

  switch (action.type) {
      case INCREMENT: 

          state[i-1].products[j-1].clicks++

          return [...state]
          // return state    

      case DECREMENT: 

          state[i-1].products[j-1].clicks--

          return [...state]

     default: return state
  }
};

export default reducer;
