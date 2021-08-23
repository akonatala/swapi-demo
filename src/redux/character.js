const ActionType = {
  CharacterAction: 'characterAction',
  ClearSelected: 'character-clear-selected',
  SetDefaultList: 'set-default-character',
}

const DEFAULT_STATE = {
  selected: null,
  characterList: '',
};

const Character = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionType.CharacterAction:
      return {
        ...state,
        characterList: action,
      };
    default:
      return {
        ...state,
      };
  }
};    

  export default Character