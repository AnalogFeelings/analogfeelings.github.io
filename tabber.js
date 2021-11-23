document.addEventListener("DOMContentLoaded", function() 
{
  const tabs = document.querySelectorAll("menu[role=tablist]");

  for (let i = 0; i < tabs.length; i++) 
  {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => 
      {
        e.preventDefault();

        tabButtons.forEach((button) => 
        {
          if (button.getAttribute("aria-controls") === e.target.getAttribute("aria-controls")) 
          {
            button.setAttribute("aria-selected", true);
            OpenTab(e, tab);
          } 
          else 
          {
            button.setAttribute("aria-selected", false);
          }
        });
      })
    );
  }
});


function OpenTab(event, tab) 
{
  const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
  articles.forEach((p) => 
  {
    p.setAttribute("hidden", true);
  });
  const article = tab.parentNode.querySelector(`[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`);
  article.removeAttribute("hidden");
}