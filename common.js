function LoadElements()
{
    let includeElements = document.querySelectorAll('[data-include]');

    for(const element of includeElements)
    {
        let name = element.getAttribute("data-include");

        let file = 'Elements/' + name + '.html';

        $.get(file, function(html_content)
        {
            $(element).replaceWith(html_content);
        }, 'html');
    }
}