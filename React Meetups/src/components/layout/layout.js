import laycss from './layout.module.css';

import Mainnavigation from "./mainnavigation";

function Layout(props) {
    return (
        <div>
            <Mainnavigation />
            <main className={laycss.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;