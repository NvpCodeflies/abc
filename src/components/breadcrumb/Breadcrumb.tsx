import { Link, useParams } from 'react-router-dom';
import './breadcrumb.css';

const Breadcrumb = () => {

    let { vulnerbilityId } = useParams();

    return (
        <div className="breadcrumb_section">

            <div className="container">
                <ul className="breadcrumb">
                    <li>
                        <Link to="/" >Remedy Cloud</Link>
                    </li>
                    <li className='currentPageLink'>
                        <p>{vulnerbilityId}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb