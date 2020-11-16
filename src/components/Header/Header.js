import React from 'react'
import classes from './Header.module.css';
import { Search } from '@material-ui/icons';
import { ShoppingBasket } from '@material-ui/icons';



const header = (props) => {
    const basketClasses = [classes.header__basketCount, classes.header__subcatLine2].join(' ');
    return (
        <div className={classes.header}>
            <img className={classes.header__logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"></img>
            <div className={classes.header__search}>
                <input className={classes.header__input} type="text" />
                <Search className={classes.header__searchIcon} />
            </div>
            <div className={classes.header__nav}>

                <div className={classes.header__subcat}>
                    <span className={classes.header__subcatLine1}>Hello</span>
                    <span className={classes.header__subcatLine2}>Accounts & Lists</span>
                </div>

                <div className={classes.header__subcat}>
                    <span className={classes.header__subcatLine1}>Returns</span>
                    <span className={classes.header__subcatLine2}>& Orders</span>
                </div>

                <div className={classes.header__subcat}>
                    <span className={classes.header__subcatLine1}>Hello</span>
                    <span className={classes.header__subcatLine2}>Sign In</span>
                </div>

                <div className={classes.header__subcatBasket}>
                    <ShoppingBasket />
                    <span className={basketClasses}></span>
                </div>

            </div>

        </div>
    )

}

export default header;
