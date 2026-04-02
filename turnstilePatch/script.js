(() => {
    if (window.__cdpMousePatched) return;
    const rX = () => 800 + Math.floor(Math.random() * 400);
    const rY = () => 400 + Math.floor(Math.random() * 200);
    Object.defineProperty(MouseEvent.prototype, 'screenX', { get: rX });
    Object.defineProperty(MouseEvent.prototype, 'screenY', { get: rY });
    window.__cdpMousePatched = true;
})();
