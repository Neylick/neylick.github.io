var highlight_link = 'index_header_link';

(function ()
{
	document.addEventListener('DOMContentLoaded', () =>
	{
		resize_tooltips();
		
		fetch('footer.html')
		.then(resp => {if(!resp.ok) throw new Error('Could not fetch footer'); else return resp.text()})
		.then(data => { document.getElementById('footer').innerHTML = data; })
		.then(() => on_form_loaded())
		.catch(error => console.error(error))
		
		fetch('header.html')
		.then(resp => {if(!resp.ok) throw new Error('Could not fetch header'); else return resp.text()})
		.then(data => { document.getElementById('header').innerHTML = data; })
		.then(() => document.getElementById(highlight_link).classList.add('header_current'))
		.catch(error => console.error(error))
	});
})();

