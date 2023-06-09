import Navigation from "./navigation"
import classes from "./MainLayout.module.css"
const MainLayout = (props) => {
    return(
        <div>
            <Navigation />
            <main className={classes.main}>{props.children}</main>

        </div>
    )
}
export default MainLayout