function Sidebar({title, item1, item2, item3}){
    return(
        <aside
        style={{backgroundColor:'burlywood', padding: '20px', color:'black'}}>
            <h3>{title}</h3>

            <ul >
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </aside>
    );
}

export default Sidebar;