import {JSDOM} from 'jsdom';
import jquery from 'jquery';
import jqueryAssert from '..';

export const createDomFragment = () => {
	return new JSDOM('<!DOCTYPE html><p>Hello world</p>');
};

export const prepareJQueryWithAssertPluginAndDOM = () => {
	const $ = jquery(createDomFragment().window);

	// Install plugin
	jqueryAssert($);

	return $;
};
