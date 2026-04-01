import React from 'react';
import './MyWork.css';
// Asumo que mywork_data ahora contiene: w_name, w_desc, w_tech (array) y w_img
import mywork_data from '../../assets/mywork_data'; 

const MyWork = () => {
    return (
        <section id='mywork' className="mywork-section">
            <div className="mywork-header">
                <h1 className="terminal-cmd">ls -la ~/projects/deployed</h1>
                <div className="header-line"></div>
            </div>

            <div className="projects-grid">
                {mywork_data.map((work, index) => (
                    <article key={index} className="project-repo-card">
                        <div className="repo-header">
                            <span className="repo-icon">📂</span>
                            <h2 className="repo-name">{work.w_name || `Project_${index + 1}`}</h2>
                        </div>
                        
                        <div className="repo-body">
                            <img src={work.w_img} alt={work.w_name} className="project-img-preview" />
                            <p className="repo-desc">
                                {work.w_desc || "Agente monitoreo de transaciones AVAX"}
                            </p>
                            <div className="repo-tech-stack">
                                {work.w_tech ? work.w_tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                )) : (
                                    <>
                                        <span className="tech-tag">C99</span>
                                        <span className="tech-tag">OpenSSL</span>
                                        <span className="tech-tag">Unix</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="repo-footer">
                            <a href={work.w_link || "#"} className="view-code">
                                <span className="git-branch">main</span> --view-source
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <div className="show-more-wrapper">
                <button type="button" className="btn-git-load">
                    git fetch --all && show_more.sh
                </button>
            </div>
        </section>
    );
}

export default MyWork;