(function () {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const message = "Want a quick tour? Scroll to see how I build agentic workflows with LangGraph, RAG, and production-grade FastAPI services.";

  const el = document.getElementById('botMessage');
  const typing = document.getElementById('botTyping');
  const actions = document.getElementById('botActions');
  if (!el || !typing || !actions) return;

  if (prefersReduced) {
    el.textContent = message;
    typing.style.display = 'none';
    actions.classList.remove('hidden');
    return;
  }

  let i = 0;
  const speedMs = 18;
  const timer = window.setInterval(() => {
    el.textContent += message.charAt(i);
    i += 1;
    if (i >= message.length) {
      window.clearInterval(timer);
      typing.style.display = 'none';
      actions.classList.remove('hidden');
    }
  }, speedMs);
})();
