import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { treatment, image, description, cost, id } = service
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className='h-44'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment}
                        <div className="badge badge-secondary">${cost}</div>
                    </h2>
                    <p title={description}>{description.slice(0, 105)}...</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/details/${id}`}>
                            <button className="btn btn-primary">CheckOut More</button>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}