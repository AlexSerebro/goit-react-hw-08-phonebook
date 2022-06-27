import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  function hendleFilterValue(e) {
    dispatch(filterActions.setFilterValue(e.target.value));
  }

  return (
    <Box component="form" sx={{ mt: 3 }} className={style.form}>
      <Typography component="h3" variant="h5" className={style.text}>
        Find contacts by name
      </Typography>
      <Grid item xs={12} sm={12}>
        <TextField
          type="text"
          name="name"
          required
          fullWidth
          id="Name"
          label="Name"
          value={value}
          onChange={hendleFilterValue}
        />
      </Grid>
    </Box>
  );
};
