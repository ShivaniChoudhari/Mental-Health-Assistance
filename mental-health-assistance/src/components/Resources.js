import React, { useState } from 'react';
import RazorpayButton from './RazorpayButton';
const Resources = () => {

    return (
        <main className="container mt-5">
            <div className="text-center">
                <h1>Resources</h1>
                <p> <i>"Here, you'll find a thoughtfully curated collection of videos, articles, and podcasts designed to uplift your spirit, nurture mindfulness, and strengthen your inner peace. Whether you're seeking a moment of calm, a dose of positivity, or tools for personal growth, these resources are here to support and inspire you on your journey to well-being. Dive in and discover your sanctuary of calm and empowerment."</i></p>
               
            </div>
            <section className="mt-5 section-videos">
                <h1 className="text-center mt-4 mb-4">Self Help Videos</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200"  src="https://www.youtube.com/embed/example1" title="How To Relieve Anxiety In One Minute" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How To Relieve Anxiety In One Minute</h5>
                                <p className="card-text">Having some terrible panic attacks the past couple of weeks over something completely irrational and stupid.
                                    Exercise for relieve anxiety in one minute
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200"  src="https://www.youtube.com/embed/example1" title="How To Deal With Depression?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How To Deal With Depression?</h5>
                                <p className="card-text">A guided tips session to help you relax.Mindfulness can help you stay grounded and reduce overthinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="How to hack your brain for better focus" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">How to hack your brain for better focus</h5>
                                <p className="card-text">The modern world constantly fragments our attention. In this funny, insightful talk that how to hack the brain's Default</p>
                            </div>
                        </div>
                    </div>
                </div>
  
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="A 10 minute Guided Meditation for your Overactive Mind" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">A 10 minute Guided Meditation for your Overactive Mind</h5>
                                <p className="card-text">Listening to this 10-minute guided meditation can be a transformative experience for anyone struggling with an overactive mind.  </p>
                                <div className="d-flex justify-content-end mr-3">
                                <RazorpayButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" overflow="hidden" src="https://www.youtube.com/embed/example1" title="4 Small Habits To Improve Self Esteem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">4 Small Habits To Improve Self Esteem</h5>
                                <p className="card-text">Self esteem is defined as the degree to which qualities and characteristics inside one’s self-concept are perceived to be positive. In short, it is your opinion of yourself.</p>
                                <div className="d-flex justify-content-end mr-3">
                                <RazorpayButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/example1" title="5 Ways to Deal with Anxiety" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="card-body">
                                <h5 className="card-title">5 Ways to Deal with Anxiety</h5>
                                <p className="card-text">Dr. Hansaji Yogendra explains how to deal with anxiety in 5 simple ways. Due to COVID-19, we have faced a lot of mental health issues in the society. This video will help you to deal with these issues.</p>
                                <div className="d-flex justify-content-end mr-3">
                                <div className="d-flex justify-content-end mr-3">
  <RazorpayButton/>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="mt-5 section-articles">
                <h1 className="text-center mt-4 mb-4">Articles</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Importance of Regular Breaks and Mental Health Days</h5>
                                <p className="card-text">
                                   
                                        Encouraging employees to take regular breaks and mental health days is vital for maintaining a sustainable and productive work environment. Overworking and ignoring the need for rest can lead to burnout.
                                        <br/>
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info mt-3">Read Article</a>
                                        <br />
                            </p>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Brain Eating Habits</h5>
                                <p className="card-text">Developing healthy eating habits is essential for maintaining overall well-being. A balanced diet provides the necessary nutrients for your body to function optimally, supports mental health, and reduces the risk of chronic diseases.</p>
                                <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info mt-3">Read Article</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Exercise and Mental Health</h5>
                                <p className="card-text">Physical activity has a profound impact on mental health. Regular exercise releases endorphins, which are natural mood lifters. It also helps reduce stress, anxiety, and symptoms of depression, while improving self-esteem and cognitive function.</p>
                                <a href="https://example.com/article3" className="btn btn-info mt-3">Read Article</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Importance of Regular Breaks and Mental Health Days</h5>
                                <p className="card-text">
                                   
                                        Encouraging employees to take regular breaks and mental health days is vital for maintaining a sustainable and productive work environment. 
                                        <div class="d-flex w-100 justify-content-between mt-3">
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info disabled">Read Article</a>
                                        <div className="d-flex mr-3">
                                        <RazorpayButton/>
                                </div>
                                        </div>
                                        <br />
                            </p>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Brain Eating Habits</h5>
                                <p className="card-text">Developing healthy eating habits is essential for maintaining overall well-being. A balanced diet provides the necessary nutrients for your body to function optimally, supports mental health, and reduces the risk of chronic diseases.</p>
                                <div class="d-flex w-100 justify-content-between mt-4">
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info disabled">Read Article</a>
                                        <div className="d-flex mr-3">
                                        <RazorpayButton/>
                                </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                          
                          
                            <div className="card-body">
                                <h5 className="card-title">Exercise and Mental Health</h5>
                                <p className="card-text">Physical activity has a profound impact on mental health. Regular exercise releases endorphins, which are natural mood lifters. It also helps reduce stress, anxiety, and symptoms of depression, while improving self-esteem and cognitive function.</p>
                                <div class="d-flex w-100 justify-content-between">
                                        <a href="https://www.youtube.com/watch?v=PBaFURjVrm0" className="btn btn-info disabled">Read Article</a>
                                        <div className="d-flex mr-3">
                                        <RazorpayButton/>
                                </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 section-podcasts">
                <h1 className="text-center mt-4 mb-4">Podcasts</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">Mental Health Matters</h5>
                                <p className="card-text">A podcast discussing various mental health topics and tips.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast1.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Mindful Living</h5>
                                <p className="card-text">Explore mindfulness practices and how they can improve your life.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast2.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Resilience and Growth</h5>
                                <p className="card-text">Stories and strategies for building resilience and personal growth.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast3.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-center">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2">Listen to Podcast</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Mental Health Matters</h5>
                                <p className="card-text">A podcast discussing various mental health topics and tips.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast1.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-between">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2 disabled">Listen to Podcast</a>
                                <RazorpayButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Mindful Living</h5>
                                <p className="card-text">Explore mindfulness practices and how they can improve your life.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast2.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-between">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2 disabled">Listen to Podcast</a>
                                <RazorpayButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Resilience and Growth</h5>
                                <p className="card-text">Stories and strategies for building resilience and personal growth.</p>
                                <audio controls>
                                    <source src="https://example.com/podcast3.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="d-flex justify-content-between">
                                <a href="https://example.com/podcast3" className="btn btn-primary mt-2 disabled">Listen to Podcast</a>
                                <RazorpayButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
           
    </main >);
};  

export default Resources;