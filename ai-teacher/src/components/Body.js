
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
                            Artificial Intelligence (AI) has revolutionized numerous industries, and education is no exception. AI teachers are transforming the traditional education system by offering new and innovative ways of learning that cater to the needs of students in the 21st century
                        </div>
                        <div className="top">
                            >One of the main benefits of AI teachers is their ability to personalize the learning experience for each student. AI algorithms can analyze student performance data and adjust the curriculum and teaching method to suit the individual needs of each student, leading to more efficient and effective learning
                        </div>
                        <div className="bottom">
                            Additionally, AI teachers can provide 24/7 access to education, making it possible for students to learn at their own pace and on their own schedule. This is particularly beneficial for students in remote or underprivileged areas who may not have access to traditional educational resources
                        </div>
                        <div className="left">
                            Another advantage of AI teachers is that they can conduct real-time assessments of student performance and provide instant feedback. This helps students to identify areas where they need improvement and focus their efforts accordingly
                        </div>
                        <div className="right">
                            In conclusion, AI teachers have the potential to revolutionize the way we think about education. With their ability to personalize the learning experience, provide 24/7 access to education, and conduct real-time assessments, AI teachers have the potential to improve educational outcomes and provide students with a more engaging and effective learning experience
                        </div>
                    </div>
                </div>
            </header>
    );
}
export default Body;
