
const imga='https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg'
const initialState = {
    token:"qwedqweqweqweqweqweqweqweqwwq",
    Points:[{id:1, long: -80.8307, lat:31.8484, imgl:imga, place:"Cali",des:"asd"},{id: 2, long: -121.8193, lat:37.2969, imgl:imga, place:"Cali",des:"dsd"}] ,
    User: { nombre: "juan", apellido: "angel", correo: "angel.juan@asdad.com", cc:"123123121", cargo:"operario" },
    CurrentMarker: {id:1, long: 1221, lat:123, imgl:imga, place:"Cali",des:"asd"},
    AddingPoint: false ,
    NotificationProps: {active: false , severity:"", message:""},
    NewMarker:{long:'', lat:''} ,
    Changer:"post"
};
  
  const OperarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MARKER':
        return {...state, Points: state.Points+ action.NewPoint}; 
      case 'UPDATE_CURRENT_MARKER':
        return { ...state, CurrentMarker: action.CurrentMarker};
      case 'REMOVE_CURRENT_MARKER':
        return { ...state, counter: state.counter - 1 };
      case 'ADDING_POINT_TRUE':
        return {...state,AddingPoint:true};
      case 'ADDING_POINT_FALSE':
        return {...state,AddingPoint:false};
      case 'CHANGE_NOTIFICATION_PROPS':
        return {...state, NotificationProps: action.NotificationProps}
      case 'CHANGE_NEW_MARKER':
        return {...state,NewMarker: action.NewMarker}
      case 'CHANGER_POST':
        return {...state, Changer: "post"}
      case 'CHANGER_PUT':
            return {...state, Changer: "put"}
      default:
        return state;
    }
  };
  
  export default OperarioReducer;