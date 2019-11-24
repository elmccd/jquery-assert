import {JSDOM} from 'jsdom';
import jquery from 'jquery';
import jqueryAssert from '..';

export const createDomFragment = () => {
	return new JSDOM(`
<!DOCTYPE html>
<p>Hello world</p>
<div class="one"></div>
<div class="two"></div>
<div class="two"></div>
<div class="three"></div>
<div class="three"></div>
<div class="three"></div>
<div class="four"></div>
<div class="four"></div>
<div class="four"></div>
<div class="four"></div>
`);
};

export const prepareJQueryWithAssertPluginAndDOM = () => {
	const $ = jquery(createDomFragment().window);

	// Install plugin
	jqueryAssert($);

	return $;
};
