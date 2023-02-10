
import img from './images/AI k12.png.jpg';
import {
    MDBBtn,
    MDBCard, MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Body()  {

    return (
        <header>

            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: `url('${img}')`, height: '500px'}}
            >
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>AI TEACHER</h1>
                            <h4 className='mb-3'>The Future of Education
                                Experience</h4>
                            <Link to="/start-learning">
                                <MDBBtn tag="a" outline size="lg">
                                    Start Learning now
                                </MDBBtn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className="wrap">
                    <div className="cube">

                        <div className="front">
                            The Future of Education: How AI Teachers are Transforming the Learning Experience
                        </div>
                        <div className="back">
                            A new AI way of learning
                        </div>
                        <div className="top">
                            24/7 Access to a Personal Mentor
                        </div>
                        <div className="bottom">
                            Personal Mentor and Teacher
                        </div>
                        <div className="left">
                            Artificial Intelligence (AI).
                        </div>
                        <div className="right">
                            LEARN SMARTER, NOT HARDER
                        </div>
                    </div>
                </div>
            </header>
    );
}
export default Body;
