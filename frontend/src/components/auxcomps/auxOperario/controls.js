import Button from "@material-ui/core/Button";
import React  from "react";
import InfoCard from './infoCard'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddForm from './addForm';
import { useSelector, useDispatch } from 'react-redux';

export default function Controls(){
    const adding=useSelector(state=>state.AddingPoint);
    const p= useSelector(state=>state.CurrentMarker);
    const dispatch=useDispatch();
    const addPoint=()=>{ 
        dispatch({type:'CHANGER_POST'})
        dispatch({type:"ADDING_POINT_TRUE"});
        dispatch({type:"CHANGE_NOTIFICATION_PROPS", NotificationProps:{active: true , severity:"info", message:" seleccione el punto y ingrese los datos"} });
    };
    const removePoint=()=>{ 
        dispatch({type:'ADDING_POINT_FALSE'})
        dispatch({type:"CHANGE_NOTIFICATION_PROPS", NotificationProps:{active: true , severity:"info", message:" marker eliminado"} });
    };
    const updatePoint=()=>{ 
        dispatch({type:'CHANGER_PUT'})
        dispatch({type:"ADDING_POINT_TRUE"});
        dispatch({type:"CHANGE_NOTIFICATION_PROPS", NotificationProps:{active: true , severity:"info", message:" marker actualizado"} });
    };
    return (
        <div>
                <Stack spacing={3} direction={"row"}>
                <div>
                    <Button variant="contained" color="primary" onClick={addPoint}>
                        Agregar  inventario
                    </Button>   

                    <Button variant="contained" color="primary" onClick={removePoint}>
                        Eliminar Inventario
                    </Button>
                    <Button variant="contained" color="primary" onClick={updatePoint}>
                        Trasladar Inventario
                    </Button>
                </div>
                {!adding?
                    (<div>
                        <Stack spacing={2} direction={"row"}>
                            <InfoCard/>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                   <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {p.des}
                                  </Typography>
                            </Box>
                        </Stack>
                    </div>
                    ):
                    (<div> 
                        <AddForm/>
                    </div>    
                    )
                }
                </Stack>
        </div>
    );
}
