// import React from 'react';
// import './course.css';
// import courseData from './courseData';


// function Coursedatas() {
//   return (
//     <div className='main-container'>
//       <div className='slider-box'>
//         <img src="https://www.mindadmission.com/wp-content/uploads/2023/02/Hidden-Benefits-of-Online-Education.jpg" alt="Courses Banner" className="slider-image" />
//       </div>
//       <div className="course-container"> 
//         {courseData.map((course, index) => (
//           <div className="course-box" key={index}>
//             <img src={course.image} alt={course.title} className="course-image" />
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             <p>Instructor: {course.instructor}</p>
//             <p>Language: {course.language}</p>
//             <p>Rating: {course.rating}</p>
//             <p>Price:${course.price}</p>
//             <p>Category: {course.category}</p>
//             <a href={course.enrollNow} target="_blank" rel="noopener noreferrer" className="enroll-link">Learn Now</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Coursedatas;




















import React from 'react';
import './course.css';
import courseData from './courseData';

function Coursedatas() {
  return (
    <div className='main-container'>
      <div className='slider-box'>
        <img src="https://www.mindadmission.com/wp-content/uploads/2023/02/Hidden-Benefits-of-Online-Education.jpg" alt="Courses Banner" className="slider-image" />
      </div>
      <div className="course-container"> 
        {courseData.map((course, index) => (
          <div className="course-box" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Language: {course.language}</p>
            <p>Rating: {course.rating}</p>
            <p>Price:${course.price}</p>
            <p>Category: {course.category}</p>
            <div className="button-container">
              <a href={course.learnNow} target="_blank" rel="noopener noreferrer" className="learn-link">Learn Now</a>
              <a href={course.enrollNow} target="_blank" rel="noopener noreferrer" className="enroll-link">Enroll Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coursedatas;
