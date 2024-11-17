import PropTypes from 'prop-types';

const FeedBack = ({ feedBackData }) => {
    return (
        <div className='grid grid-cols-3 gap-10 w-10/12 mx-auto mt-12'>
            {
                feedBackData.map(feed => <div key={feed.reviewId} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex items-center gap-6'>
                            <img className='w-12 h-12 rounded-full' src={feed.userImg} alt="" />
                            <h2 className="card-title">{feed.name}</h2>
                            <p className='text-right'>{new Date().toLocaleDateString()}</p>
                        </div>
                        <p>{feed.review}</p>
                        <div className="card-actions justify-between items-center">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FeedBack;
FeedBack.propTypes = {
    feedBackData: PropTypes.array
}