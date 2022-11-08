import './Contact.css'

function Contact() {
    return (
        <div className="Contact">
            <div className="businessInfo">
                <h3>Numero de teléfono: 618-333-007</h3>
                <h3>Dirección: Negrete 418 ote, zona centro. Dgo, Dgo.</h3>
                <h3>Cp: 34,000.</h3>
                <h3>Facebook: Química Durango.</h3>
                <h3>Whatsapp: 618-333-007.</h3>
            </div>
            <div className="contactForm">
                <label style={{paddingBottom: 10}}>Name
                    <input type="box" placeholder="Name"/>
                </label>
                <label style={{paddingBottom: 10}}>Email
                    <input type="box" placeholder="Email" />
                </label>
                <label style={{paddingBottom: 10}}>Description
                    <input 
                    type="box" 
                    placeholder="Description"
                    />
                </label>
                <input type="Submit" />
            </div>
        </div>
    )
    
}

export default Contact;