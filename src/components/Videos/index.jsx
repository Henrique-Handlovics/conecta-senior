import { useState } from "react";

import "./videos.css";

import { videos } from "./videos";

import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function Videos() {

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  return (

    <section
      className="videos-section"
      id="videos"
    >

      <div className="videos-header">

        <span className="videos-badge">
          Biblioteca de Vídeos
        </span>

        <h2>
          Aprenda assistindo
        </h2>

        <p>
          Explore vídeos educativos preparados para ajudar você a utilizar a tecnologia com mais confiança e segurança.
        </p>

      </div>

      <div className="videos-grid">

        {videos.map((video) => (

          <VideoCard
            key={video.id}
            video={video}
            onOpen={setSelectedVideo}
          />

        ))}

      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </section>

  );

}