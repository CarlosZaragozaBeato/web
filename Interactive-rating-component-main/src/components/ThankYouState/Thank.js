import mobilePhone from '../../images/illustration-thank-you.svg'
import './Thank.css'
const Thank = ({rt,vsb})=>{
    return(

        <>

        <div className={`thanksCard ${vsb===true?"visible":"hidden"}`}>

            <figure className="figurePhone">
                <img src={mobilePhone} alt="phone image" />
            </figure>

            <h3 className="infoSelection">You selected {rt} out of 5</h3>

            <h2 className="thanks">Thank you!</h2>

            <p className="infoSupport">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>

        </div>
        </>

    );

}
export default Thank; 


