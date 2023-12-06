function set_lang_fr()
{
	document.documentElement.lang = 'fr';
	setCookie('language', 'fr', 365);
	
	const en_button = document.getElementById('button-en');
	en_button.classList.remove('focused');

	const fr_button = document.getElementById('button-fr');
	fr_button.classList.add('focused');

	var elems = document.getElementsByClassName('english_only');
	for(var i = 0; i < elems.length; ++i)
	{
		var element = elems[i];
		element.setAttribute('hidden', true);
	}

	elems = document.getElementsByClassName('french_only');
	for(var i = 0; i < elems.length; ++i)
	{
		var element = elems[i];
		element.removeAttribute('hidden');
	}

}

function set_lang_en()
{
	document.documentElement.lang = 'en';
	setCookie('language', 'en', 365);

	const en_button = document.getElementById('button-en');
	en_button.classList.add('focused');

	const fr_button = document.getElementById('button-fr');
	fr_button.classList.remove('focused');
	
	var elems = document.getElementsByClassName('english_only');
	for(var i = 0; i < elems.length; ++i)
	{
		var element = elems[i];
		element.removeAttribute('hidden');
	}
	
	elems = document.getElementsByClassName('french_only');
	for(var i = 0; i < elems.length; ++i)
	{
		var element = elems[i];
		element.setAttribute('hidden', true);
	}
}

function toggleLanguage() 
{
	// GET ____PREVIOUS____ LANGUAGE
	if(document.documentElement.lang === 'en')
	{
		set_lang_fr();
	}
	else if(document.documentElement.lang === 'fr')
	{
		set_lang_en();	
	}
}

document.getElementById('lang-button').addEventListener('click', toggleLanguage);

const l = getCookie('language');
if(l === 'fr') set_lang_fr();
else if(l === 'en') set_lang_en();