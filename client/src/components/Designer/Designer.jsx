import "./design.scss";
import { TextField, Button, Container, Stack,Box} from '@mui/material';


const design = () => {
  return (
      <div class="container">
          <h1 class="heading">UPLOAD DESIGN</h1>
      <Container fixed>
        <Box sx={{ height: '78vh' }}> 
      <form>
          <TextField
            type="text"
            variant='outlined'  
            label="Product Name"
            required
            fullWidth
            sx={{ marginBottom: 4 }}
            focused
          />
          <TextField
            type="text"
            variant='outlined'
            label="Description"
            required
            fullWidth
            multiline={true}
            sx={{ marginBottom: 4 }}
            focused
          />
        <TextField
          type="text"
          variant='outlined'
          label="Price"
          required
          fullWidth
          sx={{ marginBottom: 4 }}
          focused
        />
        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}> 
        <TextField
          type="file"
          variant='outlined'
          label="Product Image"
          required
          fullWidth
          sx={{ marginBottom: 2 }}
          focused
        />
        <TextField
          type="file"
          variant='outlined'
          label="Product Design"
          required
          fullWidth
          sx={{ marginBottom: 2 }}
          focused
        />
        </Stack>
        
        <Button variant="contained" color="success" type="submit">Upload</Button>
        <Button variant="contained" color="error" type="cancel" sx={{marginLeft:2}}>cancel</Button>
      </form>
      </Box>
      </Container>


    </div>
  );
};

export default design;
