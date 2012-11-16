// Here you go, pretty simple:

function createXHR()
{
    var xhr;
    if (window.ActiveXObject)
    {
        try
        {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e)
        {
            alert(e.message);
            xhr = null;
        }
    }
    else
    {
        xhr = new XMLHttpRequest();
    }

    return xhr;
}


/*
 * Documentation is here
 * http://msdn.microsoft.com/en-us/library/ms535874%28VS.85%29.aspx
 *
 * Example:
 */


var xhr = createXHR();
xhr.onreadystatechange = function()
{
    if (xhr.readyState === 4)
    {
        alert(xhr.responseText);
    }
}
xhr.open('GET', 'test.txt', true)
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send()


/* 
 * In order to do cross-domain scripting,
 * you'll either have to call out to a local server-side proxy
 * (which reads and echo's the remote data),
 * or, if your remote service returns JSON, use this method:
 */

var s = document.createElement('script')
s.src = 'remotewebservice.json';
document.body.appendChild(s);

/* 
 * Since JSON is essentially a JavaScript object or array,
 * this is a valid source.
 * You theoretically should then be able to call the remote service directly.
 * I haven't tested this, but it seems to be an accepted practice:
 * Reference:
 *  Calling Cross Domain Web Services in AJAX
 *  http://www.simple-talk.com/dotnet/asp.net/calling-cross-domain-web-services-in-ajax/
 */

