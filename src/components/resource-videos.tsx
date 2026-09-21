import { useEffect, useMemo, useRef, useState } from "react";
import "./resource-videos.css";

type ResourceVideo = {
  name: string;
  url: string;
  size: number;
};

type ResourceFolder = {
  name: string;
  folders: ResourceFolder[];
  videos: ResourceVideo[];
};

const videoTree: ResourceFolder[] = [
  {
    name: "Level 1",
    folders: [
      {
        name: "Chapter 1",
        folders: [
          {
            name: "Session 1",
            folders: [],
            videos: [
              {
                name: "Chapter 1 Session 1.mp4",
                url: "/videos/Level 1/Chapter 1/Session 1/Chapter 1 Session 1.mp4",
                size: 29508039,
              },
            ],
          },
          {
            name: "Session 2",
            folders: [],
            videos: [
              {
                name: "Chapter 1 Session 2 - 1.mp4",
                url: "/videos/Level 1/Chapter 1/Session 2/Chapter 1 Session 2 - 1.mp4",
                size: 235354807,
              },
              {
                name: "Chapter 1 Session 2 -2.mp4",
                url: "/videos/Level 1/Chapter 1/Session 2/Chapter 1 Session 2 -2.mp4",
                size: 88357484,
              },
            ],
          },
        ],
        videos: [],
      },
      {
        name: "Chapter 2",
        folders: [],
        videos: [
          {
            name: "Chapter 2 -1.mp4",
            url: "/videos/Level 1/Chapter 2/Chapter 2 -1.mp4",
            size: 165750359,
          },
          {
            name: "Chapter 2 -2.mp4",
            url: "/videos/Level 1/Chapter 2/Chapter 2 -2.mp4",
            size: 533804622,
          },
        ],
      },
    ],
    videos: [],
  },
];

type FlatVideo = {
  video: ResourceVideo;
  path: string[];
};

function collectVideos(
  nodes: ResourceFolder[],
  parents: string[],
  flat: FlatVideo[],
) {
  nodes.forEach((node) => {
    const path = [...parents, node.name];

    node.videos.forEach((video) => {
      flat.push({ video, path });
    });

    collectVideos(node.folders, path, flat);
  });
}

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb >= 100 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const s = Math.floor(seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  return `${m}:${String(sec).padStart(2, "0")}`;
}

type PlaylistEntry = {
  index: number;
  video: ResourceVideo;
  path: string[];
  chapter: string;
  session: string | null;
};

type RenderBlock =
  | { type: "group"; title: string }
  | { type: "session"; title: string }
  | { type: "item"; entry: PlaylistEntry };

function buildRenderBlocks(flat: FlatVideo[]): RenderBlock[] {
  const blocks: RenderBlock[] = [];

  flat.forEach((item, index) => {
    const chapter = item.path[1] ?? "Videos";
    const session = item.path[2] ?? null;

    const last = blocks[blocks.length - 1];

    if (last !== undefined) {
      if (last.type === "group" && last.title !== chapter) {
        blocks.push({ type: "group", title: chapter });
      } else if (
        last.type === "session" &&
        last.title !== (session ?? "")
      ) {
        blocks.push({ type: "session", title: session ?? "" });
      } else if (last.type === "item") {
        if (last.entry.chapter !== chapter) {
          blocks.push({ type: "group", title: chapter });
          blocks.push({ type: "session", title: session ?? "" });
        } else if (last.entry.session !== session) {
          blocks.push({ type: "session", title: session ?? "" });
        }
      }
    } else {
      blocks.push({ type: "group", title: chapter });
      blocks.push({ type: "session", title: session ?? "" });
    }

    blocks.push({
      type: "item",
      entry: {
        index: index + 1,
        video: item.video,
        path: item.path,
        chapter,
        session,
      },
    });
  });

  return blocks;
}

function PlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="8 5 19 12 8 19 8 5" />
    </svg>
  );
}

function ShuffleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function EqualizerIcon() {
  return (
    <span
      className="playlist-eq"
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  );
}

function ResourceVideos() {
  const all = useMemo(() => {
    const flat: FlatVideo[] = [];
    collectVideos(videoTree, [], flat);
    return flat;
  }, []);

  const [selected, setSelected] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [query, setQuery] = useState("");
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [watchProgress, setWatchProgress] = useState(0);
  const [bufferProgress, setBufferProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const itemRefs = useRef(new Map<string, HTMLButtonElement>());

  const current = all[selected];
  const next = all[(selected + 1) % all.length];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return all;
    }

    return all.filter((item) =>
      item.video.name.toLowerCase().includes(q),
    );
  }, [all, query]);

  const blocks = useMemo(() => buildRenderBlocks(filtered), [filtered]);

  const selectVideo = (index: number) => {
    setSelected(index);
    setWatchProgress(0);
    setBufferProgress(0);
  };

  const playAll = () => {
    selectVideo(0);
    setTimeout(() => {
      videoRef.current?.play().catch(() => undefined);
    }, 60);
  };

  const shuffle = () => {
    const random = Math.floor(Math.random() * all.length);
    selectVideo(random);
    setTimeout(() => {
      videoRef.current?.play().catch(() => undefined);
    }, 60);
  };

  const playNext = () => {
    selectVideo((selected + 1) % all.length);
  };

  const handleLoadedMetadata = () => {
    const media = videoRef.current;

    if (!media || !isFinite(media.duration) || media.duration <= 0) {
      return;
    }

    setDurations((prev) =>
      prev[current.video.url]
        ? prev
        : { ...prev, [current.video.url]: media.duration },
    );

    setWatchProgress(0);
    setBufferProgress(0);
  };

  const handleTimeUpdate = () => {
    const media = videoRef.current;

    if (!media) {
      return;
    }

    const duration = media.duration;

    if (!isFinite(duration) || duration <= 0) {
      return;
    }

    const frac = Math.max(0, Math.min(1, media.currentTime / duration));
    const stepped = Math.round(frac * 40) / 40;

    setWatchProgress((prev) =>
      Math.abs(prev - stepped) < 0.001 ? prev : stepped,
    );
  };

  const handleProgress = () => {
    const media = videoRef.current;

    if (!media) {
      return;
    }

    const duration = media.duration;

    if (!isFinite(duration) || duration <= 0) {
      return;
    }

    const buffered = media.buffered.length
      ? media.buffered.end(media.buffered.length - 1)
      : 0;

    const frac = Math.max(0, Math.min(1, buffered / duration));
    const stepped = Math.round(frac * 40) / 40;

    setBufferProgress((prev) =>
      Math.abs(prev - stepped) < 0.001 ? prev : stepped,
    );
  };

  useEffect(() => {
    const activeUrl = all[selected].video.url;
    itemRefs.current.get(activeUrl)?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selected, all]);

  const activeFrac =
    watchProgress > 0.001 ? Math.min(1, watchProgress) : 0;
  const bufferFrac =
    bufferProgress > 0.001 ? Math.min(1, bufferProgress) : 0;

  return (
    <section
      className="videos-section"
      id="videos"
    >
      <div className="videos-channel">
        <div className="videos-channel-text">
          <span className="videos-chip">
            GUIDEBOOK ACADEMY
          </span>

          <h2>
            Video <span>Library</span>
          </h2>

          <p>
            Level 1 lessons, organised by chapter and session.
            Press play and start learning.
          </p>
        </div>

        <div className="videos-channel-actions">
          <span className="videos-count">
            {all.length}{" "}
            {all.length === 1 ? "video" : "videos"}
          </span>

          <button
            className="queue-play-all"
            onClick={playAll}
          >
            <PlayIcon size={16} />
            Play all
          </button>
        </div>
      </div>

      <div className="youtube-playlist">
        <div className="player-column">
          <div className="player-shell">
            <video
              key={current.video.url}
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              src={current.video.url}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onProgress={handleProgress}
              onEnded={autoplay ? playNext : undefined}
            />

            <div className="player-bar">
              <span className="player-buffer" />
              <span
                className="player-scrub"
                style={{ width: `${activeFrac * 100}%` }}
              />
            </div>
          </div>

          <div className="player-meta">
            <div className="player-avatar">
              G
            </div>

            <div className="player-meta-main">
              <span className="player-now-playing">
                NOW PLAYING
              </span>

              <h3>
                {current.video.name}
              </h3>

              <p>
                {current.path.join(" / ")}
                {" · "}
                {formatSize(current.video.size)}
                {durations[current.video.url]
                  ? ` · ${formatTime(durations[current.video.url])}`
                  : ""}
              </p>
            </div>

            <a
              className="video-download"
              href={current.video.url}
              download
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon />
              Download
            </a>
          </div>

          <div className="up-next">
            <div className="up-next-head">
              <span className="up-next-label">
                UP NEXT
              </span>

              <button
                className={`autoplay-toggle${
                  autoplay ? " on" : ""
                }`}
                onClick={() => setAutoplay((value) => !value)}
                aria-pressed={autoplay}
              >
                <span className="autoplay-switch">
                  <i />
                </span>
                Autoplay
              </button>
            </div>

            <button
              className="up-next-card"
              onClick={() => selectVideo((selected + 1) % all.length)}
            >
              <span className="up-next-thumb">
                <PlayIcon size={18} />

                {durations[next.video.url] && (
                  <b>
                    {formatTime(durations[next.video.url])}
                  </b>
                )}
              </span>

              <span className="up-next-info">
                <span className="up-next-name">
                  {next.video.name}
                </span>

                <span className="up-next-sub">
                  Video {((selected + 1) % all.length) + 1} of{" "}
                  {all.length}
                  {" · "}
                  {next.path.slice(1).join(" / ")}
                  {" · "}
                  {formatSize(next.video.size)}
                </span>
              </span>
            </button>
          </div>
        </div>

        <aside className="playlist-panel">
          <div className="playlist-header">
            <div className="playlist-head-row">
              <div>
                <span className="playlist-kicker">
                  PLAYLIST
                </span>

                <h2 className="playlist-title">
                  Level 1
                </h2>
              </div>

              <button
                className="playlist-shuffle"
                onClick={shuffle}
                title="Shuffle"
              >
                <ShuffleIcon />
              </button>
            </div>

            <div className="playlist-search">
              <SearchIcon />

              <input
                type="text"
                placeholder="Search videos"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />

              {query && (
                <button
                  className="playlist-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="playlist-list">
            {blocks.map((block, blockIndex) => {
              if (block.type === "group") {
                return (
                  <span
                    className="playlist-group-title"
                    key={`group-${blockIndex}`}
                  >
                    {block.title}
                  </span>
                );
              }

              if (block.type === "session") {
                return block.title ? (
                  <span
                    className="playlist-session-title"
                    key={`session-${blockIndex}`}
                  >
                    {block.title}
                  </span>
                ) : null;
              }

              const { entry } = block;

              const isActive =
                current.video.url === entry.video.url;

              return (
                <button
                  className={`playlist-item${
                    isActive ? " active" : ""
                  }`}
                  key={entry.video.url}
                  ref={(element) => {
                    if (element) {
                      itemRefs.current.set(
                        entry.video.url,
                        element,
                      );
                    } else {
                      itemRefs.current.delete(entry.video.url);
                    }
                  }}
                  onClick={() =>
                    selectVideo(
                      all.findIndex(
                        (item) =>
                          item.video.url === entry.video.url,
                      ),
                    )
                  }
                >
                  <span className="playlist-index">
                    {entry.index}
                  </span>

                  <span className="playlist-thumb">
                    {isActive ? (
                      <EqualizerIcon />
                    ) : (
                      <PlayIcon size={20} />
                    )}

                    {durations[entry.video.url] && (
                      <b className="playlist-duration">
                        {formatTime(durations[entry.video.url])}
                      </b>
                    )}

                    {isActive && (
                      <span
                        className="playlist-buffer"
                        style={{
                          width: `${bufferFrac * 100}%`,
                        }}
                      />
                    )}

                    {isActive && (
                      <span
                        className="playlist-scrub"
                        style={{
                          width: `${activeFrac * 100}%`,
                        }}
                      />
                    )}
                  </span>

                  <span className="playlist-item-info">
                    <span className="playlist-item-title">
                      {entry.video.name}
                    </span>

                    <span className="playlist-item-sub">
                      {entry.path.slice(1).join(" / ")}
                      {" · "}
                      {formatSize(entry.video.size)}
                    </span>
                  </span>
                </button>
              );
            })}

            {filtered.length === 0 && (
              <p className="playlist-empty">
                No videos found for "{query.trim()}".
              </p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ResourceVideos;