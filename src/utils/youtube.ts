export const getYouTubeVideoId = (url?: string): string | null => {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url.trim());
    const hostname = parsedUrl.hostname.replace(/^www\./, "");
    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] || null;
    } else if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/")[2] || null;
      } else if (
        parsedUrl.pathname.startsWith("/shorts/") ||
        parsedUrl.pathname.startsWith("/live/")
      ) {
        videoId = parsedUrl.pathname.split("/")[2] || null;
      } else {
        videoId = parsedUrl.searchParams.get("v");
      }
    }

    return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)
      ? videoId
      : null;
  } catch {
    return null;
  }
};
