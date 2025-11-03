const videoModal = document.getElementById('videoModal');
  const iframe = videoModal.querySelector('iframe');
  const videoURL = "https://www.youtube.com/embed/ML0BvhEuXHs";

  videoModal.addEventListener('show.bs.modal', () => {
    iframe.src = videoURL + "?autoplay=1";
  });

  videoModal.addEventListener('hidden.bs.modal', () => {
    iframe.src = "";
  });