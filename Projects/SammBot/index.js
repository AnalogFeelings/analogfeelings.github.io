window.onload = InitBanner;

function InitBanner()
{
    let stickyBannerElement = document.querySelector('[id="stickyBanner"]');
    let stickyObserver = new IntersectionObserver(([e]) => e.target.classList.toggle("sticky", e.boundingClientRect.top === 0),
        {
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1]
        });

    stickyObserver.observe(stickyBannerElement);
}