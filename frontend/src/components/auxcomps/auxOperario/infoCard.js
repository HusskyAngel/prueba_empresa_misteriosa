import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useSelector} from 'react-redux';

export default function InfoCard(){
    const theme = useTheme();
    const p=useSelector(state=> state.CurrentMarker)
    return ( 
           <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    long:{p.long}  lat:{p.lat}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {p.place}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={p.imgl}
                alt="Live from space album cover"
              />
            </Card>
    );
}
