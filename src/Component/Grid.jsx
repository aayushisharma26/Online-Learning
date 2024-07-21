import React from 'react';
import './Grid.css'; // Ensure to create this CSS file for styling

const Grid = () => {
    return (
        <div className="grid-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 box">
                        <img className="pic" src="/vector.jpg" alt="img" />
                        <p className="title">Programming Languages</p>
                        <div className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore.?</div>
                        <a href="https://www.simplilearn.com/best-programming-languages-start-learning-today-article">Learn More →</a>
                    </div>
                    <div className="col-md-4 box">
                        <img className="pic" src="/thumbnail.jpg" alt="univ" />
                        <p className="title">DSA Course</p>
                        <div className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore.?</div>
                        <a href="https://www.vinsys.com/blog/top-10-professional-training-courses">Learn More →</a>
                    </div>
                    <div className="col-md-4 box">
                        <img className="pic" src="/home.png" alt="img" />
                        <p className="title">Professional Training</p>
                        <div className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse perspiciatis provident tempora beatae amet sint, doloribus odio dolorem alias tempore.?</div>
                        <a href="https://www.simplilearn.com/best-programming-languages-start-learning-today-article">Learn More →</a>
                    </div>
                </div>
                <div className="row2">
                    <div className="right">
                        <img className="img" src="/cat.jpg" alt="cat" />
                    </div>
                    <div className="left">
                        <div className="left-head">💡 Learn Anything Online</div>
                        <div className="paragraph">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli.</div>
                        <div className="left-head">🏆 Communicate with People</div>
                        <div className="paragraph">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli eu sollicitudin sem iaculis.</div>
                        <div className="left-head">🧩 Share Your Knowledge</div>
                        <div className="paragraph">Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli.</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="trainers">Meet our Trainers</div>
                        <p className="title">Suspindisse ante mi iaculis ac eleifend id venenatis non eros. Sed rhoncus gravida eli eu sollicitudin sem iaculis.</p>
                        <div className="col-md-3 box">
                            <img className="image" src="/photo-man-jpg" alt="man" />
                            <div className="name">Jean Smith</div>
                            <p className="r">Marketing Instructor</p>
                        </div>
                        <div className="col-md-3 box">
                            <img className="image" src="/photo.jpeg" alt="woman" />
                            <div className="name">Jeremy Lawson</div>
                            <p className="r">PHP Instructor</p>
                        </div>
                        <div className="col-md-3 box">
                            <img className="image" src="/man.jpeg" alt="man" />
                            <div className="name">Jean Smith</div>
                            <p className="r">Marketing Instructor</p>
                        </div>
                        <div className="col-md-3 box">
                            <img className="image" src="/woman.jpeg" alt="woman" />
                            <div className="name">Jean Andrews</div>
                            <p className="r">Instructor</p>
                        </div>
                    </div>
                    <div className="container">
                        <h1>See what others are achieving through learning</h1>
                        <div className="row">
                            <div className="col-md-3 box">
                                <p className="paragraph">Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.</p>
                                <div className="box5">
                                    <img className="logo_img" src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="logo-img" />
                                    <h5>StackOverflow</h5>
                                    <div className="response">37076 responses collected</div>
                                </div>
                                <a href="https://www.udemy.com/topic/web-development/">View Web Development courses</a>
                            </div>
                            <div className="col-md-3 box">
                                <p className="paragraph">Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.</p>
                                <div className="box5">
                                    <img className="s" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" alt="logo" />
                                    <h5>AlvinLim</h5>
                                    <div className="founder">Technical Co-Founder, CTO at Dimensional</div>
                                </div>
                                <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/">View this AWS course</a>
                            </div>
                            <div className="col-md-3 box">
                                <p className="paragraph">Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.</p>
                                <div className="box5">
                                    <img className="s" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" alt="logo" />
                                    <h5>AlvinLim</h5>
                                    <div className="founder">Technical Co-Founder, CTO at Dimensional</div>
                                </div>
                                <a href="https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/">View this AWS course</a>
                            </div>
                            <div className="col-md-3 box">
                                <p className="paragraph">I learned most of my programming skills and database management skills through self-study and Udemy.</p>
                                <div className="box5">
                                    <img className="s" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbiUyMGluJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" alt="logo" />
                                    <h5>AlvinLim</h5>
                                    <div className="founder">Technical Co-Founder, CTO at Dimensional</div>
                                </div>
                                <a href="https://www.udemy.com/course/complete-python-bootcamp/">View this AWS course</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;
