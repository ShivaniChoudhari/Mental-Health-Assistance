import React, { useState, useEffect } from 'react';
import RazorpayButton from './RazorpayButton';
import axios from 'axios'; // We will use axios for making API calls

const Resources = () => {
    const [isSubscribed, setIsSubscribed] = useState(false); // Change this based on actual user subscription state
    const [resources, setResources] = useState({
        videos: [],
        articles: [],
        podcasts: [],
    });

    // Fetch resources from the backend when the component mounts
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('/api/resources'); // Assume we have an endpoint for resources
                setResources(response.data);
            } catch (error) {
                console.error("Error fetching resources:", error);
            }
        };

        fetchResources();
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <main className="container mt-5">
            <div className="text-center">
                <h1>Resources</h1>
                <p> 
                    <i>"Here, you'll find a thoughtfully curated collection of videos, articles, and podcasts designed to uplift your spirit, nurture mindfulness, and strengthen your inner peace. Whether you're seeking a moment of calm, a dose of positivity, or tools for personal growth, these resources are here to support and inspire you on your journey to well-being. Dive in and discover your sanctuary of calm and empowerment."</i>
                </p>
            </div>

            <section className="mt-5 section-videos">
                <h1 className="text-center mt-4 mb-4">Self Help Videos</h1>
                <div className="row">
                    {resources.videos.map(video => (
                        <div className="col-md-4" key={video.id}>
                            <div className="card">
                                {!isSubscribed ? (
                                    <div className="video-placeholder d-flex justify-content-center align-items-center" style={{ height: "200px", background: "#ddd" }}>
                                        <p className="text-center">Subscribe to watch</p>
                                    </div>
                                ) : (
                                    <iframe width="100%" height="200" src={video.url} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{video.title}</h5>
                                    <p className="card-text">{video.description}</p>
                                    {isSubscribed && (
                                        <div className="d-flex justify-content-end mr-3">
                                            <RazorpayButton />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-5 section-articles">
                <h1 className="text-center mt-4 mb-4">Articles</h1>
                <div className="row">
                    {resources.articles.map(article => (
                        <div className="col-md-4" key={article.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <a href={article.url} className="btn btn-info mt-3" target="_blank" rel="noopener noreferrer">
                                        Read Article
                                    </a>
                                    {isSubscribed && (
                                        <div className="d-flex justify-content-between mt-3">
                                            <a href={article.url} className={`btn btn-info mt-3 ${!isSubscribed ? "disabled" : ""}`}>Read Article</a>
                                            {!isSubscribed && <RazorpayButton />}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-5 section-podcasts">
                <h1 className="text-center mt-4 mb-4">Podcasts</h1>
                <div className="row">
                    {resources.podcasts.map(podcast => (
                        <div className="col-md-4" key={podcast.id}>
                            <div className="card m-3">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{podcast.title}</h5>
                                    <p className="card-text">{podcast.description}</p>
                                    <audio controls>
                                        <source src={podcast.url} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                    <div className="d-flex justify-content-center">
                                        <a href={podcast.url} className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">Listen to Podcast</a>
                                    </div>
                                    {!isSubscribed && (
                                        <div className="d-flex justify-content-between mt-3">
                                            <a href={podcast.url} className={`btn btn-primary mt-2 ${!isSubscribed ? "disabled" : ""}`}>Listen to Podcast</a>
                                            {!isSubscribed && <RazorpayButton />}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Resources;
