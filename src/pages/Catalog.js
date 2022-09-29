function Catalog(props) {

   
        const loaded = () => {
            return props.catalog.map( catalog => (
                <div className="catalog">
                    <h1>{catalog.name}</h1>
                </div>
            ));
        }
    
        const loading = () => {
            return <h1>Loading . . .</h1>
        };
    
        return (
            <section>
            { props.catalog ? loaded() : loading() }
            </section>
        )
    
    }


export default Catalog;