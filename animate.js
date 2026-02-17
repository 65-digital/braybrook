 ///// Animate when in view
      const defaultObserverOptions = {
          rootMargin: '0px',
          threshold: 0.3
      };

      const noThresholdObserverOptions = {
          rootMargin: '0px',
          threshold: 0
      };

      // Callback for both observers
     function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, 10); // 50ms delay is usually enough
      observer.unobserve(entry.target);
    }
  });
}

      // Create observers
      const defaultObserver = new IntersectionObserver(observerCallback, defaultObserverOptions);
      const noThresholdObserver = new IntersectionObserver(observerCallback, noThresholdObserverOptions);

      // Observe all elements with .animation
      document.querySelectorAll('.animation').forEach(element => {
          const useNoThreshold = element.classList.contains('no-threshold');
          (useNoThreshold ? noThresholdObserver : defaultObserver).observe(element);
      });