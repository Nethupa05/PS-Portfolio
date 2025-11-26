import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lectures } from '../data/data';

const LectureDetail = () => {
  const { id } = useParams();
  const lecture = lectures.find(lec => lec.id === parseInt(id));

  if (!lecture) {
    return (
      <div className="container">
        <div className="error-page">
          <h2>Lecture not found</h2>
          <Link to="/" className="back-link">← Back to Lectures</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lecture-detail">
      <div className="container">
        <Link to="/" className="back-link">← Back to All Lectures</Link>
        
        {/* Lecture Header */}
        <div className="lecture-header">
          <div className="lecture-hero">
            <img src={lecture.thumbnail} alt={lecture.title} />
          </div>
          <div className="lecture-meta">
            <h1>{lecture.title}</h1>
            <p className="lecture-date">{lecture.date}</p>
            <p className="lecture-instructor"><strong>Instructor:</strong> {lecture.instructor}</p>
            <div className="lecture-tags">
              {lecture.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Simplified Structure */}
        <div className="lecture-content">
          
          {/* Introduction Section */}
          <section className="content-section">
            <h2>Introduction</h2>
            <div className="introduction-content">
              {lecture.introduction.map((paragraph, index) => (
                <p key={index} className="paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Lecture Content Sections */}
          <section className="content-section">
            <h2>Lecture Content</h2>
            <div className="lecture-sections">
              {lecture.lectureContent.map((section, index) => (
                <div key={index} className="content-subsection">
                  <h3 className="subsection-title">{section.section}</h3>
                  <div className="subsection-content">
                    {section.content.map((paragraph, paraIndex) => (
                      <p key={paraIndex} className="content-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lecture Images */}
          <section className="content-section">
            <h2>Lecture Materials & Visuals</h2>
            <div className="images-grid">
              {lecture.images.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.url} alt={image.caption} />
                  <p className="image-caption">{image.caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Optional: Download Materials */}
          {lecture.materials && lecture.materials.length > 0 && (
            <section className="content-section">
              <h2>Download Materials</h2>
              <div className="materials-grid">
                {lecture.materials.map((material, index) => (
                  <div key={index} className="material-card">
                    <div className="material-icon">
                      {material.type === 'slides' && '📊'}
                      {material.type === 'worksheet' && '📝'}
                      {!['slides', 'worksheet'].includes(material.type) && '📄'}
                    </div>
                    <div className="material-info">
                      <h4>{material.name}</h4>
                      <span className="material-type">{material.type}</span>
                    </div>
                    <a href={material.url} download className="download-btn">
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default LectureDetail;