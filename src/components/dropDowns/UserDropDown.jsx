
import { Button, Menu , MenuItem } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../zustant/authSlice';
import { useNavigate } from 'react-router-dom';
import useWishlist from '../../zustant/wishlistSlice';
import useCart from '../../zustant/cartSlice';

export default function UserDropDown({user}) {

    const logoutHandler = useAuth(s=>s.logoutHandler)
    const clearwishlist = useWishlist(s=>s.clearwishlist)
    const clearCart = useCart(s=>s.clearCart)
    //start mui menu
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //end mui menu
   const navigate= useNavigate()
   const logout = async()=>{
    await logoutHandler()
    handleClose()
    navigate('/login')
    clearwishlist()
    clearCart()
   }
 return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'#fff',textTransform:'capitalize'}}
      >
        Welcome:   <span className='text-(--main-color)'>   {user.userName}</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose} sx={{width:'200px'}}>Profile</MenuItem>
        <MenuItem onClick={logout} sx={{width:'200px'}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
