import ItemsActions from './itemsActions';
type ItemState = {
  items: string[],
  itemsRequesting: boolean,
};

const initialState: ItemState = {
  items: [],
  itemsRequesting: true
};

function itemsReducer(state = initialState, action: ItemsActions): ItemState {
  switch(action.type) {
    case 'add-item':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload as string
        ]
      };
    case 'remove-item':
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload)
      };
    case 'update-request-status':
      return {
        ...state,
        itemsRequesting: action.payload
      }
    default:
      return {...state};
  }
}

export default itemsReducer;
