import React from 'react'
import classes from './Header.module.css';
import { Search } from '@material-ui/icons';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Providers/StateProvider';
import { auth } from '../../firebase';



const Header = (props) => {
    const [state] = useStateValue();

    const handleAuthentication = () => {
        auth.signOut();
    };

    const basketClasses = [classes.header__basketCount, classes.header__subcatLine2].join(' ');
    return (
        <div className={classes.header}>
            <Link to="/">
                <img className={classes.header__logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"></img>
            </Link>
            <div className={classes.header__search}>
                <input className={classes.header__input} type="text" />
                <Search className={classes.header__searchIcon} />
            </div>
            <div className={classes.header__nav}>
                <div className={classes.header__subcat}>
                    <span className={classes.header__subcatLine1}>Hello</span>
                    <span className={classes.header__subcatLine2}>Accounts & Lists</span>
                </div>
                <Link to="/orders">
                    <div className={classes.header__subcat}>
                        <span className={classes.header__subcatLine1}>Returns</span>
                        <span className={classes.header__subcatLine2}>& Orders</span>
                    </div>
                </Link>
                {state.user ?
                    <Link to={"/"}>
                        <div
                            className={classes.header__subcat}
                            onClick={handleAuthentication}
                        >
                            <span className={classes.header__subcatLine1}>
                                Hello, {' '}{state.user?.email}</span>
                            <span className={classes.header__subcatLine2}>
                                Log out</span>
                        </div>
                    </Link>
                    : <Link to={"/login"}>
                        <div className={classes.header__subcat}>
                            <span className={classes.header__subcatLine1}>
                                Hello, Guest</span>
                            <span className={classes.header__subcatLine2}>
                                Sign in</span>
                        </div>
                    </Link>}
                <Link to="/checkout">
                    <div className={classes.header__subcatBasket}>
                        <ShoppingBasket />
                        <span className={basketClasses}>{state.cart?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )

}

export default Header;
