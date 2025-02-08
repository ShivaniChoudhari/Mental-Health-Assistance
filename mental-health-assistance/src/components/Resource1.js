import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Resources1 = () => {
  return (
    <main className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Resources</h1>
        <p className="lead">
          <i>
            "A curated collection of videos, articles, and podcasts to uplift
            your spirit, nurture mindfulness, and strengthen your inner peace.
            Whether you're seeking calm, positivity, or personal growth, these
            resources are here to support and inspire you."
          </i>
        </p>
      </div>

      {/* Self Help Videos */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Self-Help Videos</h2>
        <div className="row">
          {/* Video 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/bPz8B6i8ZlA"
                title="How To Relieve Anxiety In One Minute"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">How To Relieve Anxiety In One Minute</h5>
                <p className="card-text">A simple exercise to help you reduce anxiety quickly.</p>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/7l1aMNj3OCo"
                title="How To Deal With Depression?"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">How To Deal With Depression?</h5>
                <p className="card-text">
                  Learn strategies to cope with depression through mindfulness and self-care.
                </p>
              </div>
            </div>
          </div>

          {/* Paid Video  */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <iframe
                width="100%"
                height="200"
                src=""
                title="Paid Content"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ backgroundColor: "#f8f9fa" }}
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">10-Minute Guided Meditation</h5>
                <p className="card-text">
                  A relaxing guided meditation to calm your overactive mind.
                </p>
                <button className="btn btn-danger w-100" disabled>
                  Pay to Unlock
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Articles</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Importance of Mental Health Breaks</h5>
                <p className="card-text">
                  Taking breaks is crucial for mental well-being. Read how short breaks improve productivity.
                </p>
                <a
                  href="https://www.psychologytoday.com/us/blog/stronger-the-broken-places/201805/the-importance-taking-breaks"
                  className="btn btn-info w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Brain-Boosting Foods</h5>
                <p className="card-text">
                  Discover the best foods that enhance cognitive function and mental clarity.
                </p>
                <a
                  href="https://www.healthline.com/nutrition/11-brain-foods"
                  className="btn btn-info w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>

          {/* Paid Article */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Exclusive: The Science of Meditation</h5>
                <p className="card-text">A deep dive into how meditation changes the brain.</p>
                <button className="btn btn-danger w-100" disabled>
                  Pay to Unlock
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Podcasts</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="text-center">Mental Health Matters</h5>
              <p>A podcast discussing various mental health topics and strategies.</p>
              <audio controls className="w-100">
                <source src="https://www.sample-videos.com/audio/mp3/wave.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="text-center">Mindful Living</h5>
              <p>Explore mindfulness practices for a peaceful life.</p>
              <audio controls className="w-100">
                <source src="https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Paid Podcast */}
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="text-center">Exclusive: Resilience & Growth</h5>
              <p>Stories and strategies for building resilience and personal growth.</p>
              <button className="btn btn-danger w-100" disabled>
                Pay to Unlock
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources1;
