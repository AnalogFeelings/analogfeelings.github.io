window.onload = InitPage;

function InitPage()
{
    twemoji.parse(document.body, {
        folder: "svg",
        ext: ".svg"
    });
    InitBanner();
}

function InitBanner()
{
    let bannerLogoElement = document.getElementById("bannerLogo");
    let stickyBannerElement = document.querySelector('[id="stickyBanner"]');
    let stickyObserver = new IntersectionObserver(([e]) => BannerCallback(e),
        {
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1]
        });

    stickyObserver.observe(stickyBannerElement);

    function BannerCallback(e)
    {
        let isIntersecting = e.boundingClientRect.top === 0;

        bannerLogoElement.classList.toggle("shown", isIntersecting);

        e.target.classList.toggle("sticky", isIntersecting);
    }
}