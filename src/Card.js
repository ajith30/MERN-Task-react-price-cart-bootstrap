//Note: In Latest React.js Version we dont required to import "React" to create aComponent
import PropTypes from 'prop-types'


//Functional Card Component
function Card({model}) {
  
  return (
    
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{model.type}</h5>
            <h6 className="card-price text-center">
              ${model.price}<span className="card-month">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {model.details.map((item, i) => {
                return (
                  <li className={(item.decoration) ? "text-muted" : ""} key={i}>
                  <span className="fa-li">
                    <i className={(item.checked) ? "fas fa-check" : "fas fa-times"}></i></span>
                  {item.text === "5 Users" ? <b>5 Users</b>: item.text=== "Unlimited Users" ? <b>Unlimited Users</b> : item.text === "Unlimited Free Subdomains" ? <><b>Unlimited</b> Free Subdomains</> : item.text}
                  </li>
                  )
              })}
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    
  );
}

//Specifying props datd type below. This is optional. 
//It provides Extra check whether the correct data type passed as props and helps in debugging.

Card.propTypes = {
  model: PropTypes.object,
}


export default Card;
