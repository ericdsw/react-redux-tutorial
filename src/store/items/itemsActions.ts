
export type AddItem = {
  type: 'add-item',
  payload: string
}

export type RemoveItem = {
  type: 'remove-item',
  payload: string
}

export type UpdateRequestStatus = {
  type: 'update-request-status',
  payload: boolean
}

type ItemActions = AddItem | RemoveItem | UpdateRequestStatus;
export default ItemActions;
