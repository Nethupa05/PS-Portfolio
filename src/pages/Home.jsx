// import React from 'react';
// import { Link } from 'react-router-dom';
// import { lectures, studentInfo } from '../data/data';

// // ... rest of the Home component code

// const Home = () => {
//   return (
//     <div className="home">
//       {/* Student Info Section */}
//       <section className="student-section">
//         <div className="container">
//           <div className="student-card">
//             <div className="student-avatar">
//               <img src={studentInfo.avatar} alt={studentInfo.name} />
//             </div>
//             <div className="student-details">
//               <h1>{studentInfo.name}</h1>
//               <p className="student-major">{studentInfo.major}</p>
//               <p className="student-university">{studentInfo.university}</p>
//               <p className="student-semester">{studentInfo.semester}</p>
//               <p className="student-bio">{studentInfo.bio}</p>
//               <div className="student-contact">
//                 <p>Email: {studentInfo.email}</p>
//                 <p>Phone: {studentInfo.phone}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lectures Grid */}
//       <section className="lectures-section">
//         <div className="container">
//           <h2 className="section-title">My Lectures ({lectures.length})</h2>
//           <div className="lectures-grid">
//             {lectures.map((lecture) => (
//               <Link to={`/lecture/${lecture.id}`} key={lecture.id} className="lecture-card">
//                 <div className="lecture-image">
//                   <img src={lecture.thumbnail} alt={lecture.title} />
//                 </div>
//                 <div className="lecture-content">
//                   <h3>{lecture.title}</h3>
//                   <p className="lecture-date">{lecture.date}</p>
//                   <p className="lecture-instructor">Instructor: {lecture.instructor}</p>
//                   <div className="lecture-tags">
//                     {lecture.tags.map((tag, index) => (
//                       <span key={index} className="tag">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import { lectures, studentInfo } from '../data/data';

const Home = () => {
  return (
    <div className="home">
      {/* Professional Student Section */}
      <section className="student-section">
        <div className="container">
          <div className="student-card">
            <div className="student-avatar">
              <img 
                src={studentInfo.avatar} 
                alt={studentInfo.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200/2d3748/ffffff?text=ND';
                }}
              />
            </div>
            <div className="student-details">
              <h1 className="student-name">{studentInfo.name}</h1>
              
              <div className="student-major">
                {studentInfo.major}
              </div>
              
              <div className="student-education">
                <div className="education-item">
                  {studentInfo.university}
                </div>
                <div className="education-item">
                  {studentInfo.semester}
                </div>
              </div>
              
              <div className="student-bio">
                {studentInfo.bio}
              </div>
              
              <div className="student-contact">
                <div className="contact-item email">
                  <strong>Email:</strong> {studentInfo.email}
                </div>
                <div className="contact-item phone">
                  <strong>Phone:</strong> {studentInfo.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lectures Grid */}
      <section className="lectures-section">
        <div className="container">
          <h2 className="section-title">Academic Lectures</h2>
          <div className="lectures-grid">
            {lectures.map((lecture) => (
              <Link to={`/lecture/${lecture.id}`} key={lecture.id} className="lecture-card">
                <div className="lecture-image">
                  <img src={lecture.thumbnail} alt={lecture.title} />
                </div>
                <div className="lecture-content">
                  <h3>{lecture.title}</h3>
                  <div className="lecture-meta">
                    <p className="lecture-date">{lecture.date}</p>
                    <p className="lecture-instructor">Instructor: {lecture.instructor}</p>
                  </div>
                  <div className="lecture-tags">
                    {lecture.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;