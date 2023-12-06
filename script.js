
function setCookie(name, value, days) 
{
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) 
{
	const cookieName = `${name}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');

	for (let i = 0; i < cookieArray.length; i++) 
	{
		let cookie = cookieArray[i].trim();
		if (cookie.indexOf(cookieName) === 0) 
		{
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return null;
}

function resize_tooltips()
{
	const w = window.innerWidth;
	var elems = document.getElementsByClassName('tooltiptext'); 
	for(var i = 0; i < elems.length; ++i)
	{
		var element = elems[i];
		var rect = element.getBoundingClientRect();	
		if(rect.right < w/2.) element.style.transform = 'translate(50%, 0)';
		else element.style.transform = 'translate(-50%, 0)';
	}
}

window.addEventListener('resize', function() 
{
	resize_tooltips();
})

resize_tooltips();